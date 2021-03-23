import { v4 as uuidv4 } from 'uuid';

import {
  db, auth, fireStore, storage,
} from './firebase';
import {
  isEmpty,
  isMatch,
  isNotEmpty,
  RECIPE_COUNT,
} from '../utils/utils';

const timeStamp = (dateTime) => fireStore.Timestamp.fromDate(new Date(dateTime));
const fieldValue = fireStore.FieldValue;

export async function fetchRecipe(id) {
  const recipesRef = db.collection('recipes');
  const recipe = recipesRef.doc(id).get();
  return recipe;
}

export async function fetchRecipes(lastRecipe) {
  const recipesRef = db.collection('recipes');

  if (isEmpty(lastRecipe)) {
    const snapshot = await recipesRef.orderBy('created', 'desc').limit(RECIPE_COUNT).get();
    return snapshot.docs;
  }

  const snapshot = await recipesRef.orderBy('created', 'desc').startAfter(timeStamp(lastRecipe.created)).limit(RECIPE_COUNT).get();
  return snapshot.docs;
}

export async function postRecipe(recipe) {
  const user = auth.currentUser;
  if (isNotEmpty(user)) {
    const userId = user.email;
    const { id } = await db.collection('recipes').add({
      ...recipe,
      userId,
      created: fieldValue.serverTimestamp(),
      updated: fieldValue.serverTimestamp(),
      show: true,
    });

    return id;
  }
  return null;
}

export async function updateRecipe(recipe) {
  const user = auth.currentUser;
  if (isNotEmpty(user)) {
    const userId = user.email;
    const {
      id, title, category, product, ingredients, description, image,
    } = recipe;
    await db.collection('recipes').doc(id).update({
      userId,
      title,
      category,
      product,
      ingredients,
      description,
      image,
      updated: fieldValue.serverTimestamp(),
    });
  }
}

export async function deleteRecipe({ id, userId }) {
  const user = auth.currentUser;

  if (isNotEmpty(user) && isMatch(userId)(user.email)) {
    await db.collection('recipes').doc(id).delete();
  }
}

export async function postFile({ userId, upload }) {
  const fileRef = await storage.ref().child(`${userId.split('@')[0]}/${uuidv4()}`);
  const response = await fileRef.putString(upload, 'data_url');
  const imageURL = response.ref.getDownloadURL();
  return imageURL;
}

export async function deleteFile({ image }) {
  await storage.refFromURL(image).delete();
}
