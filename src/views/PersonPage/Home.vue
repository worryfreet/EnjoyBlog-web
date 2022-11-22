<template>
  <div class="home-box">
    <!-- 头部 -->
    <Header></Header>
    <!-- 侧边栏 -->
    <div class="home-main">
      <div class="home-main-box1">
        <leftSidebar></leftSidebar>
      </div>
      <div class="home-main-box2">
         <basePage/>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import Header from "../../components/Header/index.vue";
import leftSidebar from "./leftSidebar.vue";
import basePage from "./basePage.vue"
</script>

<style scoped lang="scss">
.home-box {
  width: 100%;
  height: 100%;
  margin: 0 auto;
}
.home-main{
   width: 90%;
   display: flex;
   justify-content: center;
   margin: 0 auto;
   margin-top: 110px;
   .home-main-box1{
     flex: 1;
   }
   .home-main-box2{
    flex: 4;
   }
}
</style>
