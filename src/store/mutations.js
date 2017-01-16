export const addState = (state,res) => {
    state.researchInfo.appPic = res.picUrl + res.investigate.appPic                                     // 拼接图片地址
    state.researchInfo['name'] = res.investigate.name
    state.researchInfo['address'] = res.investigate.city + res.investigate.region + res.investigate.road + '号'     // 拼接具体地址
    state.researchInfo['description'] = res.investigate.description                                                 // 详细描述
    state.researchInfo['IPList'] = res.IPList

    setTimeout(function() {
        state.researchInfo['judgeShow'] = false            // 当有数据时,设置加载动画状态为false
    },2400)
}

