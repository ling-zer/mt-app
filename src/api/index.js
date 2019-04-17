import axios from '@/axios.js';

var api = {
    searchHotWords(params) {
        return axios.get('/api/meituan/header/searchHotWords.json', params);
    },
    searchWords() {
        return axios.get('/api/meituan/header/search.json');
    },
    getMenuList() {
        return axios.get('/api/meituan/index/nav.json');
    },
    resultsByKeywords() {
        return axios.get('/api/meituan/index/resultsByKeywords.json');
    },
    goodsList() {
        return axios.get('/api/meituan/list/goodsList.json');
    },
    recommend() {
        return axios.get('/api/meituan/list/recommend.json');
    },
    getHotCity() {
        return axios.get('/api/meituan/city/hot.json');
    },
    getRencentCity() {
        return axios.get('/api/meituan/city/recents.json');
    },
    getProvinceList() {
        return axios.get('/api/meituan/city/province.json');
    },
    getCurPosition() {
        return axios.get('/api/meituan/city/getPosition.json');
    },
    getcityList() {
        return axios.get('/api/meituan/city/cityList.json');
    },
    login(params){
        return axios.get('/api/meituan/login', {params});
    },
    register(params){
        return axios.get('/api/meituan/register', {params});
    }
}

export default api;