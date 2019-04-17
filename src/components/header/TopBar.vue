<template>
    <el-row class="m-header m-header-topbar">
        <el-col :span="10">
            <geo/>
        </el-col>
        <el-col :span="14">
            <m-nav/>
        </el-col>
    </el-row>

</template>

<script>
import Geo from './Geo';
import MNav from './Nav'
export default {
    components: {
        Geo,
        MNav
    }
}
</script>

<style lang="scss">
    @import '@/assets/css/public/header/topbar.scss'
</style>