import { mapState, useStore } from 'vuex'
import { computed } from 'vue'
  /**
 * 
 * @param {*} namespace 模块名称
 * @param {*} mapper state属性集合 ['name', 'age']
 * @returns 
 */
export default function (namespace,mapper) {
    // 获取key,并判断是否存在
    const store = useStore();
    // 获取相应的对象 : {name:function,age:function}
    const storeStateFns = mapState(namespace,mapper);
    // 进行 $store 指向 ，并赋值
    const storeState = {}
    Object.keys(storeStateFns).forEach(Fnkey => {
        // setup中无this 指向,在 compute中计算state时需要  $store 指向 ,所以使用bind() 绑定 $store
        const fn = storeStateFns[Fnkey].bind({ $store: store });
        storeState[Fnkey] = computed(fn)
    })
    // 返回值
    return storeState;
}