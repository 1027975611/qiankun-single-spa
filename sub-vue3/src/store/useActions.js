import { mapActions, useStore } from 'vuex';
 /**
 * 
 * @param {*} namespace 模块名称
 * @param {*} mapper 方法名集合 ['fn1', 'fn2']
 * @returns 
 */
export function useActions(namespace, mapper) {
    const store = useStore();
    const storeActionsFns = mapActions(namespace, mapper);
    const storeAction = {};
    Object.keys(storeActionsFns).forEach(fnKey => {
        storeAction[fnKey] = storeActionsFns[fnKey].bind({ $store: store })
    })
    return storeAction
}