
import axios from "axios";
import qs from "qs";
import app from "../main.js";

/** 创建axios 实例 */
const service = axios.create({
  baseURL: process.env.BASE_URL, // api 的base_url
  timeout: 5000  // 请求超时时间
});

/** request 拦截器==> 对请求参数做处理  */
service.interceptors.request.use(config => {
  // app.$vux.loading.show({
  //   text: '数据加载中......'
  // });

  config.method === 'post'
    ? config.data = qs.stringify({...config.data})
    : config.params = {...config.params};
  config.headers['Content-Type'] = 'application/x-www-form-urlencoded';

  return config;
},error => { // 请求错误处理
  // app.$vux.toast.show({
  //   type: 'warn',
  //   text: error
  // });
  Promise.reject(error)
});


/** response 拦截器 ===》 对相应做处理 */

service.interceptors.response.use(
  response => { // 成功请求到数据
    if (response.data.result === 'TRUE') {
      return response.data;
    } else {

    }
  },
  error => {
    console.log('error');
    console.log(error);
    console.log(JSON.stringify(error));

    let text = JSON.parse(JSON.stringify(error)).response.status === 404
      ? '404'
      : '网络异常，请重试';
    return Promise.reject(error)
  });

export default service;
























