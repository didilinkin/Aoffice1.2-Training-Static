import Vue from 'vue'
import axios from 'axios'
axios.defaults.headers.post['Content-Type'] = 'application/json'
import * as types from './mutations'

export const setResearchInfo = ({commit}) => {
    // // // 测试交互请求(可以获取到数据) 本地测试位置: "./data.json"
    // axios.post('./static/researchInfo_1.json', {
    // // axios.post("/api/es/details?code=" + $("#escode").val(), {
    //     // code: 'es011'
    // })
    // .then(function (response) {
    //     let get_data = response.data.resultData
    //     // console.log( get_data )
    //     commit('addState',get_data)
    // })
    // .catch(function (error) {
    //     console.log(error);
    // });

    // 直接从页面得到变量
    (function(){
        let get_data = response.data.resultData
        commit('addState',get_data)
    })()
}
