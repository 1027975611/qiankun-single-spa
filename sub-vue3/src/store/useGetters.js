import { computed } from "vue";
import { mapGetters, useStore } from "vuex";
/**
* 
* @param {*} namespace 模块名称
* @param {*} mapper getters属性集合 ['name', 'age']
* @returns 
*/
export default function useGetters(namespace,mapper) {
    const store = useStore();
    const storeGettersFns = mapGetters(namespace,mapper);
    const storeGetters = {};
    Object.keys(storeGettersFns).forEach((fnKey) => {
        const fn = storeGettersFns[fnKey].bind({ $store: store });
        storeGetters[fnKey] = computed(fn);
    });
    return storeGetters;
}