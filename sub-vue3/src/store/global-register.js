
/**
 * 
 * @param {vuex实例} store 
 * @param {qiankun下发的props} props 
 */

export function registerGlobalModule(store, props = {}) {

  if (!store || !store.hasModule) {
    return;
  }

  // 获取初始化的state
  const initState = props.getGlobalState && props.getGlobalState() || {
    menu: [],
    user: {}
  };
  // 将父应用的数据存储到子应用中，命名空间固定为global
  if (!store.hasModule('global')) {
    const globalModule = {
      namespaced: true,
      state: initState,
      actions: {
        // 子应用改变state并通知父应用
        setGlobalState({ commit }, payload) {
          commit('setGlobalState', payload);
          commit('emitGlobalState', payload);
        },
        // 初始化，只用于mount时同步父应用的数据
        initGlobalState({ commit }, payload) {
          commit('setGlobalState', payload);
        },
      },
      mutations: {
        setGlobalState(state, payload) {
          // eslint-disable-next-line
          state = Object.assign(state, payload);
        },
        // 通知父应用
        emitGlobalState(state) {
          if (props.setGlobalState) {
            props.setGlobalState(state);
          }
        },
      },
    };
    // 模块动态注册
    store.registerModule('global', globalModule);
  } else {
    // 每次mount时，都同步一次父应用数据
    store.dispatch('global/initGlobalState', initState);
  }
};

// 1、commit 和 dispatch 两个方法都是传值给vuex的mutation改变state

// 2、区别总的来说他们只是存取方式的不同

// // commit: 用来提交当前模块的mutations 

// // dispatch: 用来提交当前模块的actions(actions可以提交mutations,可以进行异步操作)  

// // commit 有些做不到的可以用 dispatch 进行提交

// 3、 mutations修改state, action提交mutations。但是如果修改完还想做其他事情就用actions比较方便(then后执行想要做的事情) ==> this.$store.dispatch().then()

// 4、同步和异步之别

// commit: 同步操作

//   　　　　　　　　  存储 this.$store.commit('changeValue', name)

//   　　　　　　　　  取值 this.$store.state.changeValue



// dispatch: 异步操作

//    　　　　　　　　 存储 this.$store.dispatch('getlists', name)

//    　　　　　　　　 取值 this.$store.getters.getlists
