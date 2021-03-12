import React from 'react';
import { render } from '@testing-library/react';

import IngredientList from '../IngredientList';

describe('IngredientList', () => {
  const onChange = jest.fn();
  beforeEach(() => {
    onChange.mockClear();
  });

  const renderIngredientList = ({ ingredients, onChangeIngredient }) => render((
    <IngredientList
      ingredients={ingredients}
      onChangeIngredient={onChangeIngredient}
    />
  ));

  const ingredients = [
    { id: 1, ingredient: '설탕', weight: 150 },
    { id: 2, ingredient: '버터', weight: 150 },
    { id: 3, ingredient: '전란', weight: 100 },
    { id: 4, ingredient: '박력분', weight: 150 },
  ];

  context('with onChangeIngredient', () => {
    it('render values', () => {
      const { container, getByDisplayValue } = renderIngredientList({
        ingredients, onChangeIngredient: onChange,
      });

      expect(container).not.toHaveTextContent('원재료');
      expect(getByDisplayValue('설탕')).toHaveValue('설탕');
      expect(getByDisplayValue('100')).toHaveValue(100);
    });
  });

  context('without onChangeIngredient', () => {
    it('render values', () => {
      const { container, getByDisplayValue } = renderIngredientList({ ingredients });

      expect(container).toHaveTextContent('원재료');
      expect(getByDisplayValue('설탕')).toHaveValue('설탕');
      expect(getByDisplayValue('100')).toHaveValue(100);
    });
  });
});
