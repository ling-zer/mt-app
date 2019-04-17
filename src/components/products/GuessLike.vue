<template>
    <div >
        <ul class="like-list">
            <li v-for="(item, index) in likeList" :key="index">
                <router-link :to="{name: item.itemId}">
                    <div>
                        <img :src="item.imgUrl" alt="">
                    </div>
                    <p class="title">{{item.title}}</p>
                    <p class="addr">{{item.areaName}}</p>
                    <p>
                        <span class="icon">￥</span>
                        <span class="like-price">{{item.avgPrice}}</span>
                        <span class="icon">/人</span>
                    </p>
                </router-link>

            </li>
        </ul>

    </div>

</template>

<script>
import api from '@/api/index.js';
export default {
    data() {
        return{
            likeList: [{
                img: 'http://p0.meituan.net//shopmainpic/befad47d8c729e7f5fcf461091a7f896130967.jpg@188w_106h_1e_1c',
                title: '桃夭日式料理（常发店）',
                addr: '万达广场',
                price: '192'
            },{
                img: 'http://p1.meituan.net//mogu/c63d971eabb49f8182491b2363f7610743120.jpg@188w_106h_1e_1c',
                title: '天天花甲',
                addr: '金山',
                price: '13.5'
            },{
                img: 'https://img.meituan.net//msmerchant/989857cb339c101cad782af9eddace3b23615.jpg@188w_106h_1e_1c',
                title: '巴依古丽',
                addr: '吾悦广场',
                price: '49.9'
            }]
        }
    },
    created() {
        api.recommend().then(res => {
            console.log(res);
            this.likeList = res.data.data;
        })
    }
};
</script>

<style lang="scss">
    @import '@/assets/css/products/guessLike.scss';
</style>