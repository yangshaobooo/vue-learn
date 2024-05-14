import httpInstance from '@/utils/http'

// 获取banner 
export function getBannerAPI(params = {}) {
    // 默认为1 商品为2
    const {distributionSite='1'}=params
    return httpInstance({
        url: '/home/banner',
        params:{
            distributionSite
        }
    })
}

// 获取新鲜好物内容
export const findNewAPI = () => {
    return httpInstance({
        url: '/home/new'
    })
}

// 获取人气推荐数据
export const getHotAPI = () => {
    return httpInstance({
        url: '/home/hot'
    })
}

// 获取产品数据
export const getGoodsAPI = () => {
    return httpInstance({
        url: '/home/goods'
    })
}