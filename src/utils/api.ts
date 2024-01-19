// 引入axios库
import axios from 'axios';

// 创建axios实例
const axiosInstance = axios.create({
  baseURL: 'https://api.pingcc.cn', // 设置统一的基础URL
  timeout: 10000, // 请求超时设置
  headers: {'X-Custom-Header': 'foobar'} // 任何其他默认设置
});

// 请求拦截器
axiosInstance.interceptors.request.use(config => {
  // 在请求发送之前做一些处理
  // 例如，如果需要，可以在这里添加authorization token
  return config;
}, error => {
  // 处理请求错误
  return Promise.reject(error);
});

// 响应拦截器
axiosInstance.interceptors.response.use(response => {
  // 对响应数据做点什么
  return response.data; // 通常，只需返回response的数据部分
}, error => {
  // 处理响应错误
  // 可以在这里统一处理错误，例如显示错误消息
  return Promise.reject(error);
});

// 导出实例
export default axiosInstance;