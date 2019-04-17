<template>
    <div class="page-product">
        <el-row class="m-crumbs">
            <crumbs/>
        </el-row>
        <el-row>
            <el-col :span="19">
                <el-row>
                    <categroy/>
                </el-row>
                <el-row>
                    <list/>
                </el-row>
            </el-col>
            <el-col :span="5" class="product-like">
                <div class="likeBox">
                    <h3>猜你喜欢</h3>
                    <guess-like />
                </div>

            </el-col>
        </el-row>
    </div>

</template>

<script>
import Crumbs from "@/components/products/Crumbs";
import Categroy from "@/components/products/Categroy";
import List from "@/components/products/List";
import GuessLike from "@/components/products/GuessLike";
export default {
  components: {
    Crumbs,
    Categroy,
    List,
    GuessLike
  }
};
</script>

<style lang="scss">
@import "@/assets/css/products/index.scss";
</style>