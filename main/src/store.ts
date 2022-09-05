import { initGlobalState, MicroAppStateActions } from 'qiankun'

/**
 * 通讯的初始数据
 */
const initialState:any = {
  user:{
    name:'sangyou'
  }
}
/**
 * 组件通讯-整合后的类型
 */
type Action = MicroAppStateActions & {
  /**
   * 获取 通信内存中的 数据
   */
  getGlobalState: (key?: any) => any
}

/**
 * 通讯方法
 */
const actions: Action = { ...initGlobalState(initialState), getGlobalState(){}}
actions.onGlobalStateChange((newState, prev) => {
  // state: 变更后的状态; prev 变更前的状态
  console.log('main change', JSON.stringify(newState), JSON.stringify(prev))

  for (const key in newState) {
    initialState[key] = newState[key]
  }
})

// 定义一个获取state的方法下发到子应用
actions.getGlobalState = (key) => {
  // 有key，表示取globalState下的某个子级对象
  // 无key，表示取全部

  return key ? initialState[key] : initialState
}

export default actions
