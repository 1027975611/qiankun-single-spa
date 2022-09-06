import { computed } from 'vue'
import { mapState, mapGetters, mapMutations, mapActions, useStore } from 'vuex'
/**
 *
 * @param mapName  传入mapState, mapGetters, mapActions, mapMutations 的名称
 * @param mapperFn  传入的map辅助函数，mapState, mapGetters, mapActions, mapMutations
 * @param mapper    方法或者属性的名字，actions或者mutations或者getter的函数名，state的属性名字
 * @param module    开启命名空间后的模块名
 * @resultFn {{}}    返回数组，数组内容为fn函数，fn函数为每个属性所对应的map辅助函数
 */
const hooks = (mapName,mapperFn, mapper, module) => {
    const store = useStore();  // 引入vuex中的useStore函数
     // 获取到对应的对象的functions: {name: function, age: function}
    let mapData = {};
    // 对数据进行转换
    let resultFn = {};
    if (module) {  // 判断是否存在命名空间，如果存在则绑定
        mapData = mapperFn(module, mapper);
    } else {
        mapData = mapperFn(mapper);
    }
    Object.keys(mapData).forEach((fnKey) => {
        const fn = mapData[fnKey].bind({ $store: store })
        if ((mapName && mapName === 'mapMutations') || mapName === 'mapActions') {
            resultFn = fn
        } else {
            resultFn[fnKey] = computed(fn)
        }
    })
    return resultFn
};

/**
 * 封装useState函数
 * @param module   命名空间，名称
 * @param mapper  数组， state中定义的变量名称
 */
export const useState = (mapper, module) => {
    return hooks('mapState',mapState, mapper, module)
};

/**
 * 封装useGetters函数
 * @param module  命名空间，
 * @param mapper 数组，即getters中的返回值名称
 */
export const useGetters = (mapper, module) => {
    return hooks('mapGetters',mapGetters, mapper, module)
};

/**
 * 封装mapMutations函数
 * @param mapper  数组，mutations中函数的名称
 * @param module  命名空间，模块名称
 */
export const useMutations = (mapper, module) => {
    return hooks('mapMutations',mapMutations, mapper, module);
};

/**
 * 封装mapActions函数
 * @param mapper  数组，actions中函数的名称
 * @param module  命名空间，模块名称
 */
export const  useActions = (mapper, module) => {
    return hooks('mapActions',mapActions, mapper, module);
};
