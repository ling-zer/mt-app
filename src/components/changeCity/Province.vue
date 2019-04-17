<template>
    <div>
        <span>按省份选择:</span>
        <m-select :list="provinceList" 
        :value="province" title="省份" 
        :showWrapperActive="provinceActive" 
        @change_active="changeProvinceActive" 
        @change="changeProvince"
        className="province"
        />
        <m-select :list="cityList" 
        :value="city" title="城市" 
        :showWrapperActive="cityActive" 
        @change_active="changeCityActive" 
        @change="changeCity"
        :disabled="cityDisabled"
        className="city"
        />
        <span>直接搜索:</span>
        <el-select 
            v-model="searchWord" 
            filterable 
            remote 
            reserve-keyword 
            placeholder="请输入关键词" 
            :remote-method="remoteMethod" 
            :loading="loading"
        >
            <el-option v-for="item in searchList" :key="item" :label="item" :value="item">
            </el-option>
        </el-select>
    </div>

</template>

<script>
import MSelect from "./Select";
import api from '@/api/index.js';
export default {
  data() {
    return {
      provinceList: [
        "山东",
        "甘肃",
        "江苏北京",
        "云南",
        "海南",
        "浙江",
        "上海",
        "天津",
        "陕西",
        "新疆",
        "贵州",
        "安徽",
        "澳门",
        "湖南",
        "河北",
        "香港",
        "辽宁",
        "四川",
        "宁夏",
        "吉林",
        "福建",
        "湖北",
        "广东",
        "重庆",
        "山西",
        "江西",
        "黑龙江",
        "青海",
        "河南",
        "台湾",
        "内蒙古",
        "西藏",
        "广西"
      ],
      province: "省份",
      city: "城市",
      cityList: ["成都", "遂宁", "绵阳"],
      provinceActive: false,
      cityActive: false,
      searchList: ["成都", "遂宁", "绵阳"],
      searchWord: '',
      loading: false,
      cityDisabled: true
    };
  },
  created() {
    api.getProvinceList().then(res => {
      this.provinceList = res.data.data.map(item => {
        item.name = item.provinceName;
        return item;
      });
    });
  },
  components: {
    MSelect
  },
  methods: {
    changeProvinceActive(flag) {
      this.provinceActive = flag;
      if (flag) {
        this.cityActive = false;
      }
    },
    changeCityActive(flag) {
      this.cityActive = flag;
      if (flag) {
        this.provinceActive = false;
      }
    },
    remoteMethod() {//请求后端接口

    },
    changeProvince(value) {
        this.province = value.name;
        this.cityDisabled = false;
        this.cityList = value.cityInfoList;
    },
    changeCity(value) {
        this.city = value.name;
        this.$store.dispatch('setPosition', value);
        this.$router.push({name: 'index'}); //跳转页面
    }

  }
};
</script>

<style lang="scss">
@import "@/assets/css/changecity/iselect.scss";
</style>