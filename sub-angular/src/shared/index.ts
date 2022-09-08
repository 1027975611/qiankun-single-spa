// /**
//  *  子应用自身的 shared 子应用独立运行时将使用该 shared，子应用的 shared 使用 localStorage 来操作 token；
//  */
// class Shared {
//   /**
//    * 获取 Token
//    */
//   getToken() {
//     // 子应用独立运行时，在 localStorage 中获取 token
//     return localStorage.getItem("token") || "";
//   }

//   /**
//    * 设置 Token
//    */
//   setToken(token:any) {
//     // 子应用独立运行时，在 localStorage 中设置 token
//     localStorage.setItem("token", token);
//   }
// }
// /**
//  * SharedModule：用于管理 shared，例如重载 shared 实例、获取 shared 实例等等；
//  */
// class SharedModule {
//   static shared = new Shared();

//   /**
//    * 重载 shared
//    */
//   static overloadShared(shared:any) {
//     SharedModule.shared = shared;
//   }

//   /**
//    * 获取 shared 实例
//    */
//   static getShared() {
//     return SharedModule.shared;
//   }
// }

// export default SharedModule;
function emptyAction(...args:any) {
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
  setActions(actions: any) {
    this.actions = actions;
  }

  /**
   * 映射
   */
  onGlobalStateChange(...args: any) {
    return this.actions.onGlobalStateChange(...args);
  }

  /**
   * 映射
   */
  setGlobalState(...args: any) {
    return this.actions.setGlobalState(...args);
  }
}

const actions = new Actions();
export default actions;

