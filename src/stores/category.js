import { ref } from 'vue'
import { defineStore } from 'pinia'
import {getCategoryAPI} from '@/apis/layout'

export const useCategoryStore = defineStore('category', () => {
    //导航列表逻辑
    // 创建一个响应式的对象
    const categoryList = ref([])

    // 创建一个函数，声明为async：异步。
    const getCategory = async () => {
        // await 等待一个异步操作的完成
        const res = await getCategoryAPI()
        // 将请求得到的首页目录数据给赋值给响应式数据
        categoryList.value = res.result
    }
    return {
        categoryList,
        getCategory
    }
})
