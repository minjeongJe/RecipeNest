import axios from 'axios';

// baseURL을 설정한 axios 인스턴스 생성
export const api = axios.create({
  baseURL: `https://www.themealdb.com/api/json/v1/1`, 
});

// 요청 인터셉터 추가하기 (api 인스턴스에 적용)
api.interceptors.request.use(function (config) {
    // 요청이 전달되기 전에 작업 수행
    return config;
  }, function (error) {
    // 요청 오류가 있는 작업 수행
    return Promise.reject(error);
  });

// 응답 인터셉터 추가하기 (api 인스턴스에 적용)
api.interceptors.response.use(function (response) {
    // 2xx 범위에 있는 상태 코드는 이 함수를 트리거 합니다.
    return response;
  }, function (error) {
    // 2xx 외의 범위에 있는 상태 코드는 이 함수를 트리거 합니다.
    return Promise.reject(error);
  });
