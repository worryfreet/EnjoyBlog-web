<template>
  <div class="home-box">
    <!-- 头部 -->
    <Header></Header>
    <!-- 侧边栏 -->
    <div class="home-right">
      <div class="home-right-box1">
        <leftSidebar></leftSidebar>
      </div>
      <div class="home-right-box2">
         <basePage/>
      </div>
     
    </div>
    
  </div>
</template>

<script setup lang="ts">
import Header from "./Header.vue";
import leftSidebar from "./leftSidebar.vue";
import basePage from "./basePage.vue"
</script>

<style scoped lang="scss">
.home-box {
  width: 100%;
  height: 100%;
 
}
.home-right{
  width: 80%;
   display: flex;
   justify-content: center;
   margin: 0 auto;
   .home-right-box1{
    flex-basis: 220px;
   }
   .home-right-box2{
    flex-flow: 1;
   }
}
</style>
