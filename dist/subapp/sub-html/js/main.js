{/* <script type="text/javascript" src="../shared/index.js"></script> */}

const render = (options) => {
  document.querySelector('#current-env').innerHTML = 'qiankun'
  // 展示基座下发的状态
  const node = document.createElement('div')
  node.innerHTML = `Hello, render with HTML`
  document.querySelector('.container').appendChild(node)
  return Promise.resolve();
};

function emptyAction(...args) {
  // 警告：提示当前使用的是空 Action
  console.log("Current execute action is empty! color:#00B095");
}

class Actions {
  // 默认值为空 Action
  actions = {
    onGlobalStateChange: emptyAction,
    setGlobalState: emptyAction
  };

  /**
   * 设置 actions
   */
  setActions(actions) {
    this.actions = actions;
  }

  /**
   * 映射
   */
  onGlobalStateChange(...args) {
    return this.actions.onGlobalStateChange(...args);
  }

  /**
   * 映射
   */
  setGlobalState(...args) {
    return this.actions.setGlobalState(...args);
  }
}

const actions = new Actions();

(global => {
  global['prehtml'] = {
    bootstrap: () => {
      console.log('purehtml bootstrap');
      return Promise.resolve();
    },
    mount: (options) => {
      console.log('purehtml mount', options);
      actions.setActions(options);
      return render(options);
    },
    unmount: () => {
      console.log('purehtml unmount');
      return Promise.resolve();
    },
  };
})(window);
