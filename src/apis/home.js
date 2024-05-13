import  httpInstance from '@/utils/http'

// 获取banner 
export function getBannerAPI(){
    return httpInstance({
        url: '/home/banner'
    })
}

// 获取新鲜好物内容
export const findNewAPI = () => {
    return httpInstance({
      url:'/home/new'
    })
  }

// 获取人气推荐数据
export const getHotAPI = () => {
    return  httpInstance({
        url:'/home/hot'
    })
  }