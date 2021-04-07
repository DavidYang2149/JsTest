(window.webpackJsonp=window.webpackJsonp||[]).push([[31],{161:function(module,__webpack_exports__,__webpack_require__){"use strict";eval('// ESM COMPAT FLAG\n__webpack_require__.r(__webpack_exports__);\n\n// EXTERNAL MODULE: ./node_modules/react/index.js\nvar react = __webpack_require__(1);\nvar react_default = /*#__PURE__*/__webpack_require__.n(react);\n\n// EXTERNAL MODULE: ./node_modules/react-redux/es/index.js + 16 modules\nvar es = __webpack_require__(43);\n\n// EXTERNAL MODULE: ./node_modules/@emotion/styled/dist/emotion-styled.browser.esm.js + 12 modules\nvar emotion_styled_browser_esm = __webpack_require__(62);\n\n// CONCATENATED MODULE: ./src/layouts/chat/Chat.jsx\n\nconst ChatBox = emotion_styled_browser_esm["a" /* default */].article`\n  margin: 0 auto;\n  /* text-align: center; */\n  max-width: 600px;\n  min-height: 80vh;\n  max-height: 100vh;\n`;\nconst ChatMessageItems = emotion_styled_browser_esm["a" /* default */].ul`\n  min-height: 70vh;\n  max-height: 90vh;\n  overflow: scroll;\n  padding: 20px 20px 10px 20px;\n  border-radius: 5px;\n  background-color: #f8f8ef;\n\n  .continueMessage {\n    margin-top: -9px;\n  }\n`;\nconst ChatMessageItem = emotion_styled_browser_esm["a" /* default */].li`\n  text-align: left;\n  align-items: center;\n  margin-bottom: 10px;\n  flex-direction: row;\n\n  div {\n    display:inline-flex;\n  }\n\n  div > div {\n    display: block;\n  }\n\n  div > img {\n    display: block;\n    width: 40px;\n    height: 40px;\n    margin: 2px 5px;\n    border-radius: 50%;\n  }\n\n  .hidden {\n    width: 50px;\n  }\n\n  div > span {\n    font-size: 1.1rem;\n    font-weight: 700;\n  }\n\n  div > p {\n    font-size: 1rem;\n    font-weight: 400;\n    border-radius: 25px 25px 25px 0px;\n    padding: 10px 15px 10px 15px;\n    color: black;\n    background: #e5e5ea;\n  }\n`;\nconst MyChatMessageItem = emotion_styled_browser_esm["a" /* default */].li`\n  text-align: right;\n  align-items: center;\n  margin-bottom: 10px;\n  flex-direction: row-reverse;\n\n  div {\n    display:inline-flex;\n  }\n\n  div > div {\n    display: block;\n  }\n\n  div > img {\n    width: 40px;\n    height: 40px;\n    margin: 2px 5px;\n    border-radius: 50%;\n  }\n\n  .hidden {\n    width: 50px;\n  }\n\n  div > span {\n    font-size: 1.1rem;\n    font-weight: 700;\n  }\n\n  div > p {\n    font-size: 1rem;\n    font-weight: 400;\n    border-radius: 25px 25px 0px 25px;\n    padding: 10px 15px 10px 15px;\n    color: white;\n    background: #0994f6;\n  }\n`;\nconst MessageBox = emotion_styled_browser_esm["a" /* default */].div`\n  display: flex;\n  text-align: center;\n`;\nconst MessageInput = emotion_styled_browser_esm["a" /* default */].input`\n  font-size: 1.1rem;\n  font-weight: 500;\n  border-radius: 0.25rem;\n  border: 1px solid #e5e7eb;\n  background-color: #e4e7eb;\n  width: 80%;\n  height: 24px;\n  padding: 1rem;\n`;\nconst SendButton = emotion_styled_browser_esm["a" /* default */].button`\n  font-size: 1.2rem;\n  font-weight: 500;\n  border-radius: 0.25rem;\n  width: 20%;\n  height: 60px;\n  padding: 1rem;\n  cursor: pointer;\n  transition: 0.5s;\n  opacity: 0.8;\n  \n  :disabled {\n    cursor: not-allowed;\n    opacity: 0.2;\n  }\n\n  :hover:enabled {\n    opacity: 1.0;\n    transition: 0.5s;\n  }\n`;\n\n// EXTERNAL MODULE: ./src/utils/utils.js\nvar utils = __webpack_require__(9);\n\n// CONCATENATED MODULE: ./src/components/chat/ChatMessage.jsx\n\n\n\n\nconst ChatMessage = ({\n  chat,\n  owner,\n  preUser\n}) => {\n  if (Object(utils["f" /* isMatch */])(chat.user)(owner) && Object(utils["i" /* isNotMatch */])(chat.user)(preUser)) {\n    return /*#__PURE__*/react_default.a.createElement(MyChatMessageItem, null, /*#__PURE__*/react_default.a.createElement("div", null, /*#__PURE__*/react_default.a.createElement("div", null, /*#__PURE__*/react_default.a.createElement("span", null, chat.user), /*#__PURE__*/react_default.a.createElement("p", null, chat.message)), /*#__PURE__*/react_default.a.createElement("img", {\n      src: "images/user-solid-circle.svg",\n      alt: "User"\n    })));\n  }\n\n  if (Object(utils["f" /* isMatch */])(chat.user)(owner) && Object(utils["f" /* isMatch */])(chat.user)(preUser)) {\n    return /*#__PURE__*/react_default.a.createElement(MyChatMessageItem, {\n      className: "continueMessage"\n    }, /*#__PURE__*/react_default.a.createElement("div", null, /*#__PURE__*/react_default.a.createElement("div", null, /*#__PURE__*/react_default.a.createElement("p", null, chat.message)), /*#__PURE__*/react_default.a.createElement("span", {\n      className: "hidden"\n    })));\n  }\n\n  if (Object(utils["i" /* isNotMatch */])(chat.user)(owner) && Object(utils["f" /* isMatch */])(chat.user)(preUser)) {\n    return /*#__PURE__*/react_default.a.createElement(ChatMessageItem, {\n      className: "continueMessage"\n    }, /*#__PURE__*/react_default.a.createElement("div", null, /*#__PURE__*/react_default.a.createElement("span", {\n      className: "hidden"\n    }), /*#__PURE__*/react_default.a.createElement("div", null, /*#__PURE__*/react_default.a.createElement("p", null, chat.message))));\n  } // XXX LAST CASE: isNotMatch(chat.user)(owner) && isNotMatch(chat.user)(preUser)\n\n\n  return /*#__PURE__*/react_default.a.createElement(ChatMessageItem, null, /*#__PURE__*/react_default.a.createElement("div", null, /*#__PURE__*/react_default.a.createElement("img", {\n    src: "images/user-solid-circle.svg",\n    alt: "User"\n  }), /*#__PURE__*/react_default.a.createElement("div", null, /*#__PURE__*/react_default.a.createElement("span", null, chat.user), /*#__PURE__*/react_default.a.createElement("p", null, chat.message))));\n};\n\n/* harmony default export */ var chat_ChatMessage = (/*#__PURE__*/react_default.a.memo(ChatMessage));\n// CONCATENATED MODULE: ./src/components/chat/ChatMessageList.jsx\n\n\n\n\n\nconst ChatMessageList = ({\n  chatList,\n  owner,\n  lastChat\n}) => {\n  if (Object(utils["g" /* isNotArray */])(chatList)) {\n    return /*#__PURE__*/react_default.a.createElement(react_default.a.Fragment, null);\n  }\n\n  Object(react["useEffect"])(() => {\n    lastChat.current.scrollIntoView({\n      behavior: \'smooth\'\n    });\n  }, []);\n  return /*#__PURE__*/react_default.a.createElement(ChatMessageItems, null, Object(utils["h" /* isNotEmpty */])(chatList.length) && chatList.map((chat, index) => {\n    const preUser = index ? chatList[index - 1].user : \'\';\n    return /*#__PURE__*/react_default.a.createElement(chat_ChatMessage, {\n      key: chat.created,\n      chat: chat,\n      owner: owner,\n      preUser: preUser\n    });\n  }), /*#__PURE__*/react_default.a.createElement("div", {\n    ref: lastChat\n  }));\n};\n\n/* harmony default export */ var chat_ChatMessageList = (/*#__PURE__*/react_default.a.memo(ChatMessageList));\n// CONCATENATED MODULE: ./src/components/chat/ChatMessageWriteBox.jsx\n\n\n\n\nconst ChatMessageWriteBox = ({\n  message,\n  onChangeMessage,\n  onKeyUpMessage,\n  onSubmit\n}) => {\n  return /*#__PURE__*/react_default.a.createElement(MessageBox, null, /*#__PURE__*/react_default.a.createElement(MessageInput, {\n    type: "text",\n    name: "message",\n    onChange: onChangeMessage // onKeyUp={onKeyUpMessage}\n    ,\n    onKeyPress: onKeyUpMessage,\n    placeholder: "\\uBA54\\uC2DC\\uC9C0\\uB97C \\uC785\\uB825\\uD558\\uC138\\uC694",\n    value: message\n  }), /*#__PURE__*/react_default.a.createElement(SendButton, {\n    type: "button",\n    onClick: onSubmit,\n    disabled: Object(utils["e" /* isEmpty */])(message)\n  }, "Send"));\n};\n\n/* harmony default export */ var chat_ChatMessageWriteBox = (/*#__PURE__*/react_default.a.memo(ChatMessageWriteBox));\n// EXTERNAL MODULE: ./src/components/common/Loading.jsx + 1 modules\nvar Loading = __webpack_require__(88);\n\n// EXTERNAL MODULE: ./src/redux/chat.js + 1 modules\nvar redux_chat = __webpack_require__(90);\n\n// CONCATENATED MODULE: ./src/containers/chat/ChatContainer.jsx\n\n\n\n\n\n\n\n\n\nconst ChatContainer = () => {\n  const dispatch = Object(es["c" /* useDispatch */])();\n  const lastChat = Object(react["useRef"])();\n  const {\n    user: {\n      userId\n    },\n    chat: {\n      chatList,\n      message\n    }\n  } = Object(es["d" /* useSelector */])(state => ({\n    user: state.user,\n    chat: state.chat\n  }));\n\n  if (Object(utils["e" /* isEmpty */])(userId)) {\n    return /*#__PURE__*/react_default.a.createElement(Loading["a" /* default */], null);\n  }\n\n  const owner = Object(utils["d" /* getFirstSplit */])(userId)(\'@\');\n\n  const onChangeMessage = event => {\n    const {\n      name,\n      value\n    } = event.target;\n    dispatch(Object(redux_chat["a" /* changeMessage */])({\n      name,\n      value\n    }));\n  };\n\n  const onKeyUpMessage = async event => {\n    if (Object(utils["e" /* isEmpty */])(message.trim())) {\n      return;\n    }\n\n    if (Object(utils["f" /* isMatch */])(event.key)(\'Enter\')) {\n      await dispatch(Object(redux_chat["d" /* writeMessage */])());\n      lastChat.current.scrollIntoView({\n        behavior: \'smooth\'\n      });\n    }\n  };\n\n  const onSubmit = async () => {\n    if (Object(utils["e" /* isEmpty */])(message)) {\n      return;\n    }\n\n    await dispatch(Object(redux_chat["d" /* writeMessage */])());\n    lastChat.current.scrollIntoView({\n      behavior: \'smooth\'\n    });\n  };\n\n  return /*#__PURE__*/react_default.a.createElement(ChatBox, null, /*#__PURE__*/react_default.a.createElement(chat_ChatMessageList, {\n    chatList: chatList,\n    owner: owner,\n    lastChat: lastChat\n  }), /*#__PURE__*/react_default.a.createElement(chat_ChatMessageWriteBox, {\n    message: message,\n    onChangeMessage: onChangeMessage,\n    onKeyUpMessage: onKeyUpMessage,\n    onSubmit: onSubmit\n  }));\n};\n\n/* harmony default export */ var chat_ChatContainer = (ChatContainer);\n// EXTERNAL MODULE: ./src/services/firebase.js + 3 modules\nvar firebase = __webpack_require__(16);\n\n// CONCATENATED MODULE: ./src/pages/chat/ChatPage.jsx\n\n\n\n\n\n\nconst ChatPage = () => {\n  const dispatch = Object(es["c" /* useDispatch */])();\n  Object(react["useEffect"])(() => {\n    dispatch(Object(redux_chat["c" /* loadMessages */])());\n  }, []);\n  Object(react["useEffect"])(() => {\n    const chatRef = firebase["b" /* db */].collection(\'messages\');\n    chatRef.orderBy(\'created\').onSnapshot(() => {\n      dispatch(Object(redux_chat["c" /* loadMessages */])());\n    });\n  }, []);\n  return /*#__PURE__*/react_default.a.createElement(react_default.a.Fragment, null, /*#__PURE__*/react_default.a.createElement(chat_ChatContainer, null));\n};\n\n/* harmony default export */ var chat_ChatPage = __webpack_exports__["default"] = (ChatPage);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMTYxLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vc3JjL2xheW91dHMvY2hhdC9DaGF0LmpzeD82MTY5Iiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL2NoYXQvQ2hhdE1lc3NhZ2UuanN4P2Y4ZmIiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvY2hhdC9DaGF0TWVzc2FnZUxpc3QuanN4PzM0OWYiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvY2hhdC9DaGF0TWVzc2FnZVdyaXRlQm94LmpzeD85MTZhIiwid2VicGFjazovLy8uL3NyYy9jb250YWluZXJzL2NoYXQvQ2hhdENvbnRhaW5lci5qc3g/ZDM1NCIsIndlYnBhY2s6Ly8vLi9zcmMvcGFnZXMvY2hhdC9DaGF0UGFnZS5qc3g/MTRhZCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgc3R5bGVkIGZyb20gJ0BlbW90aW9uL3N0eWxlZCc7XG5jb25zdCBDaGF0Qm94ID0gc3R5bGVkLmFydGljbGVgXG4gIG1hcmdpbjogMCBhdXRvO1xuICAvKiB0ZXh0LWFsaWduOiBjZW50ZXI7ICovXG4gIG1heC13aWR0aDogNjAwcHg7XG4gIG1pbi1oZWlnaHQ6IDgwdmg7XG4gIG1heC1oZWlnaHQ6IDEwMHZoO1xuYDtcbmNvbnN0IENoYXRNZXNzYWdlSXRlbXMgPSBzdHlsZWQudWxgXG4gIG1pbi1oZWlnaHQ6IDcwdmg7XG4gIG1heC1oZWlnaHQ6IDkwdmg7XG4gIG92ZXJmbG93OiBzY3JvbGw7XG4gIHBhZGRpbmc6IDIwcHggMjBweCAxMHB4IDIwcHg7XG4gIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2Y4ZjhlZjtcblxuICAuY29udGludWVNZXNzYWdlIHtcbiAgICBtYXJnaW4tdG9wOiAtOXB4O1xuICB9XG5gO1xuY29uc3QgQ2hhdE1lc3NhZ2VJdGVtID0gc3R5bGVkLmxpYFxuICB0ZXh0LWFsaWduOiBsZWZ0O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBtYXJnaW4tYm90dG9tOiAxMHB4O1xuICBmbGV4LWRpcmVjdGlvbjogcm93O1xuXG4gIGRpdiB7XG4gICAgZGlzcGxheTppbmxpbmUtZmxleDtcbiAgfVxuXG4gIGRpdiA+IGRpdiB7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gIH1cblxuICBkaXYgPiBpbWcge1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIHdpZHRoOiA0MHB4O1xuICAgIGhlaWdodDogNDBweDtcbiAgICBtYXJnaW46IDJweCA1cHg7XG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xuICB9XG5cbiAgLmhpZGRlbiB7XG4gICAgd2lkdGg6IDUwcHg7XG4gIH1cblxuICBkaXYgPiBzcGFuIHtcbiAgICBmb250LXNpemU6IDEuMXJlbTtcbiAgICBmb250LXdlaWdodDogNzAwO1xuICB9XG5cbiAgZGl2ID4gcCB7XG4gICAgZm9udC1zaXplOiAxcmVtO1xuICAgIGZvbnQtd2VpZ2h0OiA0MDA7XG4gICAgYm9yZGVyLXJhZGl1czogMjVweCAyNXB4IDI1cHggMHB4O1xuICAgIHBhZGRpbmc6IDEwcHggMTVweCAxMHB4IDE1cHg7XG4gICAgY29sb3I6IGJsYWNrO1xuICAgIGJhY2tncm91bmQ6ICNlNWU1ZWE7XG4gIH1cbmA7XG5jb25zdCBNeUNoYXRNZXNzYWdlSXRlbSA9IHN0eWxlZC5saWBcbiAgdGV4dC1hbGlnbjogcmlnaHQ7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIG1hcmdpbi1ib3R0b206IDEwcHg7XG4gIGZsZXgtZGlyZWN0aW9uOiByb3ctcmV2ZXJzZTtcblxuICBkaXYge1xuICAgIGRpc3BsYXk6aW5saW5lLWZsZXg7XG4gIH1cblxuICBkaXYgPiBkaXYge1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICB9XG5cbiAgZGl2ID4gaW1nIHtcbiAgICB3aWR0aDogNDBweDtcbiAgICBoZWlnaHQ6IDQwcHg7XG4gICAgbWFyZ2luOiAycHggNXB4O1xuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgfVxuXG4gIC5oaWRkZW4ge1xuICAgIHdpZHRoOiA1MHB4O1xuICB9XG5cbiAgZGl2ID4gc3BhbiB7XG4gICAgZm9udC1zaXplOiAxLjFyZW07XG4gICAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgfVxuXG4gIGRpdiA+IHAge1xuICAgIGZvbnQtc2l6ZTogMXJlbTtcbiAgICBmb250LXdlaWdodDogNDAwO1xuICAgIGJvcmRlci1yYWRpdXM6IDI1cHggMjVweCAwcHggMjVweDtcbiAgICBwYWRkaW5nOiAxMHB4IDE1cHggMTBweCAxNXB4O1xuICAgIGNvbG9yOiB3aGl0ZTtcbiAgICBiYWNrZ3JvdW5kOiAjMDk5NGY2O1xuICB9XG5gO1xuY29uc3QgTWVzc2FnZUJveCA9IHN0eWxlZC5kaXZgXG4gIGRpc3BsYXk6IGZsZXg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbmA7XG5jb25zdCBNZXNzYWdlSW5wdXQgPSBzdHlsZWQuaW5wdXRgXG4gIGZvbnQtc2l6ZTogMS4xcmVtO1xuICBmb250LXdlaWdodDogNTAwO1xuICBib3JkZXItcmFkaXVzOiAwLjI1cmVtO1xuICBib3JkZXI6IDFweCBzb2xpZCAjZTVlN2ViO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZTRlN2ViO1xuICB3aWR0aDogODAlO1xuICBoZWlnaHQ6IDI0cHg7XG4gIHBhZGRpbmc6IDFyZW07XG5gO1xuY29uc3QgU2VuZEJ1dHRvbiA9IHN0eWxlZC5idXR0b25gXG4gIGZvbnQtc2l6ZTogMS4ycmVtO1xuICBmb250LXdlaWdodDogNTAwO1xuICBib3JkZXItcmFkaXVzOiAwLjI1cmVtO1xuICB3aWR0aDogMjAlO1xuICBoZWlnaHQ6IDYwcHg7XG4gIHBhZGRpbmc6IDFyZW07XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgdHJhbnNpdGlvbjogMC41cztcbiAgb3BhY2l0eTogMC44O1xuICBcbiAgOmRpc2FibGVkIHtcbiAgICBjdXJzb3I6IG5vdC1hbGxvd2VkO1xuICAgIG9wYWNpdHk6IDAuMjtcbiAgfVxuXG4gIDpob3ZlcjplbmFibGVkIHtcbiAgICBvcGFjaXR5OiAxLjA7XG4gICAgdHJhbnNpdGlvbjogMC41cztcbiAgfVxuYDtcbmV4cG9ydCB7IENoYXRCb3gsIENoYXRNZXNzYWdlSXRlbXMsIENoYXRNZXNzYWdlSXRlbSwgTXlDaGF0TWVzc2FnZUl0ZW0sIE1lc3NhZ2VCb3gsIE1lc3NhZ2VJbnB1dCwgU2VuZEJ1dHRvbiB9OyIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBDaGF0TWVzc2FnZUl0ZW0sIE15Q2hhdE1lc3NhZ2VJdGVtIH0gZnJvbSAnLi4vLi4vbGF5b3V0cy9jaGF0L0NoYXQnO1xuaW1wb3J0IHsgaXNNYXRjaCwgaXNOb3RNYXRjaCB9IGZyb20gJy4uLy4uL3V0aWxzL3V0aWxzJztcblxuY29uc3QgQ2hhdE1lc3NhZ2UgPSAoe1xuICBjaGF0LFxuICBvd25lcixcbiAgcHJlVXNlclxufSkgPT4ge1xuICBpZiAoaXNNYXRjaChjaGF0LnVzZXIpKG93bmVyKSAmJiBpc05vdE1hdGNoKGNoYXQudXNlcikocHJlVXNlcikpIHtcbiAgICByZXR1cm4gLyojX19QVVJFX18qL1JlYWN0LmNyZWF0ZUVsZW1lbnQoTXlDaGF0TWVzc2FnZUl0ZW0sIG51bGwsIC8qI19fUFVSRV9fKi9SZWFjdC5jcmVhdGVFbGVtZW50KFwiZGl2XCIsIG51bGwsIC8qI19fUFVSRV9fKi9SZWFjdC5jcmVhdGVFbGVtZW50KFwiZGl2XCIsIG51bGwsIC8qI19fUFVSRV9fKi9SZWFjdC5jcmVhdGVFbGVtZW50KFwic3BhblwiLCBudWxsLCBjaGF0LnVzZXIpLCAvKiNfX1BVUkVfXyovUmVhY3QuY3JlYXRlRWxlbWVudChcInBcIiwgbnVsbCwgY2hhdC5tZXNzYWdlKSksIC8qI19fUFVSRV9fKi9SZWFjdC5jcmVhdGVFbGVtZW50KFwiaW1nXCIsIHtcbiAgICAgIHNyYzogXCJpbWFnZXMvdXNlci1zb2xpZC1jaXJjbGUuc3ZnXCIsXG4gICAgICBhbHQ6IFwiVXNlclwiXG4gICAgfSkpKTtcbiAgfVxuXG4gIGlmIChpc01hdGNoKGNoYXQudXNlcikob3duZXIpICYmIGlzTWF0Y2goY2hhdC51c2VyKShwcmVVc2VyKSkge1xuICAgIHJldHVybiAvKiNfX1BVUkVfXyovUmVhY3QuY3JlYXRlRWxlbWVudChNeUNoYXRNZXNzYWdlSXRlbSwge1xuICAgICAgY2xhc3NOYW1lOiBcImNvbnRpbnVlTWVzc2FnZVwiXG4gICAgfSwgLyojX19QVVJFX18qL1JlYWN0LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwgbnVsbCwgLyojX19QVVJFX18qL1JlYWN0LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwgbnVsbCwgLyojX19QVVJFX18qL1JlYWN0LmNyZWF0ZUVsZW1lbnQoXCJwXCIsIG51bGwsIGNoYXQubWVzc2FnZSkpLCAvKiNfX1BVUkVfXyovUmVhY3QuY3JlYXRlRWxlbWVudChcInNwYW5cIiwge1xuICAgICAgY2xhc3NOYW1lOiBcImhpZGRlblwiXG4gICAgfSkpKTtcbiAgfVxuXG4gIGlmIChpc05vdE1hdGNoKGNoYXQudXNlcikob3duZXIpICYmIGlzTWF0Y2goY2hhdC51c2VyKShwcmVVc2VyKSkge1xuICAgIHJldHVybiAvKiNfX1BVUkVfXyovUmVhY3QuY3JlYXRlRWxlbWVudChDaGF0TWVzc2FnZUl0ZW0sIHtcbiAgICAgIGNsYXNzTmFtZTogXCJjb250aW51ZU1lc3NhZ2VcIlxuICAgIH0sIC8qI19fUFVSRV9fKi9SZWFjdC5jcmVhdGVFbGVtZW50KFwiZGl2XCIsIG51bGwsIC8qI19fUFVSRV9fKi9SZWFjdC5jcmVhdGVFbGVtZW50KFwic3BhblwiLCB7XG4gICAgICBjbGFzc05hbWU6IFwiaGlkZGVuXCJcbiAgICB9KSwgLyojX19QVVJFX18qL1JlYWN0LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwgbnVsbCwgLyojX19QVVJFX18qL1JlYWN0LmNyZWF0ZUVsZW1lbnQoXCJwXCIsIG51bGwsIGNoYXQubWVzc2FnZSkpKSk7XG4gIH0gLy8gWFhYIExBU1QgQ0FTRTogaXNOb3RNYXRjaChjaGF0LnVzZXIpKG93bmVyKSAmJiBpc05vdE1hdGNoKGNoYXQudXNlcikocHJlVXNlcilcblxuXG4gIHJldHVybiAvKiNfX1BVUkVfXyovUmVhY3QuY3JlYXRlRWxlbWVudChDaGF0TWVzc2FnZUl0ZW0sIG51bGwsIC8qI19fUFVSRV9fKi9SZWFjdC5jcmVhdGVFbGVtZW50KFwiZGl2XCIsIG51bGwsIC8qI19fUFVSRV9fKi9SZWFjdC5jcmVhdGVFbGVtZW50KFwiaW1nXCIsIHtcbiAgICBzcmM6IFwiaW1hZ2VzL3VzZXItc29saWQtY2lyY2xlLnN2Z1wiLFxuICAgIGFsdDogXCJVc2VyXCJcbiAgfSksIC8qI19fUFVSRV9fKi9SZWFjdC5jcmVhdGVFbGVtZW50KFwiZGl2XCIsIG51bGwsIC8qI19fUFVSRV9fKi9SZWFjdC5jcmVhdGVFbGVtZW50KFwic3BhblwiLCBudWxsLCBjaGF0LnVzZXIpLCAvKiNfX1BVUkVfXyovUmVhY3QuY3JlYXRlRWxlbWVudChcInBcIiwgbnVsbCwgY2hhdC5tZXNzYWdlKSkpKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IC8qI19fUFVSRV9fKi9SZWFjdC5tZW1vKENoYXRNZXNzYWdlKTsiLCJpbXBvcnQgUmVhY3QsIHsgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IENoYXRNZXNzYWdlIGZyb20gJy4vQ2hhdE1lc3NhZ2UnO1xuaW1wb3J0IHsgQ2hhdE1lc3NhZ2VJdGVtcyB9IGZyb20gJy4uLy4uL2xheW91dHMvY2hhdC9DaGF0JztcbmltcG9ydCB7IGlzTm90RW1wdHksIGlzTm90QXJyYXkgfSBmcm9tICcuLi8uLi91dGlscy91dGlscyc7XG5cbmNvbnN0IENoYXRNZXNzYWdlTGlzdCA9ICh7XG4gIGNoYXRMaXN0LFxuICBvd25lcixcbiAgbGFzdENoYXRcbn0pID0+IHtcbiAgaWYgKGlzTm90QXJyYXkoY2hhdExpc3QpKSB7XG4gICAgcmV0dXJuIC8qI19fUFVSRV9fKi9SZWFjdC5jcmVhdGVFbGVtZW50KFJlYWN0LkZyYWdtZW50LCBudWxsKTtcbiAgfVxuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgbGFzdENoYXQuY3VycmVudC5zY3JvbGxJbnRvVmlldyh7XG4gICAgICBiZWhhdmlvcjogJ3Ntb290aCdcbiAgICB9KTtcbiAgfSwgW10pO1xuICByZXR1cm4gLyojX19QVVJFX18qL1JlYWN0LmNyZWF0ZUVsZW1lbnQoQ2hhdE1lc3NhZ2VJdGVtcywgbnVsbCwgaXNOb3RFbXB0eShjaGF0TGlzdC5sZW5ndGgpICYmIGNoYXRMaXN0Lm1hcCgoY2hhdCwgaW5kZXgpID0+IHtcbiAgICBjb25zdCBwcmVVc2VyID0gaW5kZXggPyBjaGF0TGlzdFtpbmRleCAtIDFdLnVzZXIgOiAnJztcbiAgICByZXR1cm4gLyojX19QVVJFX18qL1JlYWN0LmNyZWF0ZUVsZW1lbnQoQ2hhdE1lc3NhZ2UsIHtcbiAgICAgIGtleTogY2hhdC5jcmVhdGVkLFxuICAgICAgY2hhdDogY2hhdCxcbiAgICAgIG93bmVyOiBvd25lcixcbiAgICAgIHByZVVzZXI6IHByZVVzZXJcbiAgICB9KTtcbiAgfSksIC8qI19fUFVSRV9fKi9SZWFjdC5jcmVhdGVFbGVtZW50KFwiZGl2XCIsIHtcbiAgICByZWY6IGxhc3RDaGF0XG4gIH0pKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IC8qI19fUFVSRV9fKi9SZWFjdC5tZW1vKENoYXRNZXNzYWdlTGlzdCk7IiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IE1lc3NhZ2VCb3gsIE1lc3NhZ2VJbnB1dCwgU2VuZEJ1dHRvbiB9IGZyb20gJy4uLy4uL2xheW91dHMvY2hhdC9DaGF0JztcbmltcG9ydCB7IGlzRW1wdHkgfSBmcm9tICcuLi8uLi91dGlscy91dGlscyc7XG5cbmNvbnN0IENoYXRNZXNzYWdlV3JpdGVCb3ggPSAoe1xuICBtZXNzYWdlLFxuICBvbkNoYW5nZU1lc3NhZ2UsXG4gIG9uS2V5VXBNZXNzYWdlLFxuICBvblN1Ym1pdFxufSkgPT4ge1xuICByZXR1cm4gLyojX19QVVJFX18qL1JlYWN0LmNyZWF0ZUVsZW1lbnQoTWVzc2FnZUJveCwgbnVsbCwgLyojX19QVVJFX18qL1JlYWN0LmNyZWF0ZUVsZW1lbnQoTWVzc2FnZUlucHV0LCB7XG4gICAgdHlwZTogXCJ0ZXh0XCIsXG4gICAgbmFtZTogXCJtZXNzYWdlXCIsXG4gICAgb25DaGFuZ2U6IG9uQ2hhbmdlTWVzc2FnZSAvLyBvbktleVVwPXtvbktleVVwTWVzc2FnZX1cbiAgICAsXG4gICAgb25LZXlQcmVzczogb25LZXlVcE1lc3NhZ2UsXG4gICAgcGxhY2Vob2xkZXI6IFwiXFx1QkE1NFxcdUMyRENcXHVDOUMwXFx1Qjk3QyBcXHVDNzg1XFx1QjgyNVxcdUQ1NThcXHVDMTM4XFx1QzY5NFwiLFxuICAgIHZhbHVlOiBtZXNzYWdlXG4gIH0pLCAvKiNfX1BVUkVfXyovUmVhY3QuY3JlYXRlRWxlbWVudChTZW5kQnV0dG9uLCB7XG4gICAgdHlwZTogXCJidXR0b25cIixcbiAgICBvbkNsaWNrOiBvblN1Ym1pdCxcbiAgICBkaXNhYmxlZDogaXNFbXB0eShtZXNzYWdlKVxuICB9LCBcIlNlbmRcIikpO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgLyojX19QVVJFX18qL1JlYWN0Lm1lbW8oQ2hhdE1lc3NhZ2VXcml0ZUJveCk7IiwiaW1wb3J0IFJlYWN0LCB7IHVzZVJlZiB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IHVzZVNlbGVjdG9yLCB1c2VEaXNwYXRjaCB9IGZyb20gJ3JlYWN0LXJlZHV4JztcbmltcG9ydCBDaGF0TWVzc2FnZUxpc3QgZnJvbSAnLi4vLi4vY29tcG9uZW50cy9jaGF0L0NoYXRNZXNzYWdlTGlzdCc7XG5pbXBvcnQgQ2hhdE1lc3NhZ2VXcml0ZUJveCBmcm9tICcuLi8uLi9jb21wb25lbnRzL2NoYXQvQ2hhdE1lc3NhZ2VXcml0ZUJveCc7XG5pbXBvcnQgTG9hZGluZyBmcm9tICcuLi8uLi9jb21wb25lbnRzL2NvbW1vbi9Mb2FkaW5nJztcbmltcG9ydCB7IENoYXRCb3ggfSBmcm9tICcuLi8uLi9sYXlvdXRzL2NoYXQvQ2hhdCc7XG5pbXBvcnQgeyBjaGFuZ2VNZXNzYWdlLCB3cml0ZU1lc3NhZ2UgfSBmcm9tICcuLi8uLi9yZWR1eC9jaGF0JztcbmltcG9ydCB7IGlzRW1wdHksIGlzTWF0Y2gsIGdldEZpcnN0U3BsaXQgfSBmcm9tICcuLi8uLi91dGlscy91dGlscyc7XG5cbmNvbnN0IENoYXRDb250YWluZXIgPSAoKSA9PiB7XG4gIGNvbnN0IGRpc3BhdGNoID0gdXNlRGlzcGF0Y2goKTtcbiAgY29uc3QgbGFzdENoYXQgPSB1c2VSZWYoKTtcbiAgY29uc3Qge1xuICAgIHVzZXI6IHtcbiAgICAgIHVzZXJJZFxuICAgIH0sXG4gICAgY2hhdDoge1xuICAgICAgY2hhdExpc3QsXG4gICAgICBtZXNzYWdlXG4gICAgfVxuICB9ID0gdXNlU2VsZWN0b3Ioc3RhdGUgPT4gKHtcbiAgICB1c2VyOiBzdGF0ZS51c2VyLFxuICAgIGNoYXQ6IHN0YXRlLmNoYXRcbiAgfSkpO1xuXG4gIGlmIChpc0VtcHR5KHVzZXJJZCkpIHtcbiAgICByZXR1cm4gLyojX19QVVJFX18qL1JlYWN0LmNyZWF0ZUVsZW1lbnQoTG9hZGluZywgbnVsbCk7XG4gIH1cblxuICBjb25zdCBvd25lciA9IGdldEZpcnN0U3BsaXQodXNlcklkKSgnQCcpO1xuXG4gIGNvbnN0IG9uQ2hhbmdlTWVzc2FnZSA9IGV2ZW50ID0+IHtcbiAgICBjb25zdCB7XG4gICAgICBuYW1lLFxuICAgICAgdmFsdWVcbiAgICB9ID0gZXZlbnQudGFyZ2V0O1xuICAgIGRpc3BhdGNoKGNoYW5nZU1lc3NhZ2Uoe1xuICAgICAgbmFtZSxcbiAgICAgIHZhbHVlXG4gICAgfSkpO1xuICB9O1xuXG4gIGNvbnN0IG9uS2V5VXBNZXNzYWdlID0gYXN5bmMgZXZlbnQgPT4ge1xuICAgIGlmIChpc0VtcHR5KG1lc3NhZ2UudHJpbSgpKSkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGlmIChpc01hdGNoKGV2ZW50LmtleSkoJ0VudGVyJykpIHtcbiAgICAgIGF3YWl0IGRpc3BhdGNoKHdyaXRlTWVzc2FnZSgpKTtcbiAgICAgIGxhc3RDaGF0LmN1cnJlbnQuc2Nyb2xsSW50b1ZpZXcoe1xuICAgICAgICBiZWhhdmlvcjogJ3Ntb290aCdcbiAgICAgIH0pO1xuICAgIH1cbiAgfTtcblxuICBjb25zdCBvblN1Ym1pdCA9IGFzeW5jICgpID0+IHtcbiAgICBpZiAoaXNFbXB0eShtZXNzYWdlKSkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGF3YWl0IGRpc3BhdGNoKHdyaXRlTWVzc2FnZSgpKTtcbiAgICBsYXN0Q2hhdC5jdXJyZW50LnNjcm9sbEludG9WaWV3KHtcbiAgICAgIGJlaGF2aW9yOiAnc21vb3RoJ1xuICAgIH0pO1xuICB9O1xuXG4gIHJldHVybiAvKiNfX1BVUkVfXyovUmVhY3QuY3JlYXRlRWxlbWVudChDaGF0Qm94LCBudWxsLCAvKiNfX1BVUkVfXyovUmVhY3QuY3JlYXRlRWxlbWVudChDaGF0TWVzc2FnZUxpc3QsIHtcbiAgICBjaGF0TGlzdDogY2hhdExpc3QsXG4gICAgb3duZXI6IG93bmVyLFxuICAgIGxhc3RDaGF0OiBsYXN0Q2hhdFxuICB9KSwgLyojX19QVVJFX18qL1JlYWN0LmNyZWF0ZUVsZW1lbnQoQ2hhdE1lc3NhZ2VXcml0ZUJveCwge1xuICAgIG1lc3NhZ2U6IG1lc3NhZ2UsXG4gICAgb25DaGFuZ2VNZXNzYWdlOiBvbkNoYW5nZU1lc3NhZ2UsXG4gICAgb25LZXlVcE1lc3NhZ2U6IG9uS2V5VXBNZXNzYWdlLFxuICAgIG9uU3VibWl0OiBvblN1Ym1pdFxuICB9KSk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBDaGF0Q29udGFpbmVyOyIsImltcG9ydCBSZWFjdCwgeyB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyB1c2VEaXNwYXRjaCB9IGZyb20gJ3JlYWN0LXJlZHV4JztcbmltcG9ydCBDaGF0Q29udGFpbmVyIGZyb20gJy4uLy4uL2NvbnRhaW5lcnMvY2hhdC9DaGF0Q29udGFpbmVyJztcbmltcG9ydCB7IGxvYWRNZXNzYWdlcyB9IGZyb20gJy4uLy4uL3JlZHV4L2NoYXQnO1xuaW1wb3J0IHsgZGIgfSBmcm9tICcuLi8uLi9zZXJ2aWNlcy9maXJlYmFzZSc7XG5cbmNvbnN0IENoYXRQYWdlID0gKCkgPT4ge1xuICBjb25zdCBkaXNwYXRjaCA9IHVzZURpc3BhdGNoKCk7XG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgZGlzcGF0Y2gobG9hZE1lc3NhZ2VzKCkpO1xuICB9LCBbXSk7XG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgY29uc3QgY2hhdFJlZiA9IGRiLmNvbGxlY3Rpb24oJ21lc3NhZ2VzJyk7XG4gICAgY2hhdFJlZi5vcmRlckJ5KCdjcmVhdGVkJykub25TbmFwc2hvdCgoKSA9PiB7XG4gICAgICBkaXNwYXRjaChsb2FkTWVzc2FnZXMoKSk7XG4gICAgfSk7XG4gIH0sIFtdKTtcbiAgcmV0dXJuIC8qI19fUFVSRV9fKi9SZWFjdC5jcmVhdGVFbGVtZW50KFJlYWN0LkZyYWdtZW50LCBudWxsLCAvKiNfX1BVUkVfXyovUmVhY3QuY3JlYXRlRWxlbWVudChDaGF0Q29udGFpbmVyLCBudWxsKSk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBDaGF0UGFnZTsiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7O0FDcklBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ3ZDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDaENBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7O0FDekJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7OztBQzlFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///161\n')}}]);