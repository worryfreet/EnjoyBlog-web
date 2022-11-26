<template>
  <div class="home-box">
    <!-- 头部 -->
    <Header></Header>
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
import Header from "../components/PersonPage/Header.vue";
import leftSidebar from "../components/PersonPage/leftSidebar.vue";
import basePage from "../components/PersonPage/basePage.vue"
import { onMounted } from 'vue'


onMounted(() => {
  localStorage.setItem('pageType','personPage')
})

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
   .home-main-box1{
     flex: 1;
   }
   .home-main-box2{
    flex: 4;
   }
}
</style>
