<template>
  <div class="home-box">
    <!-- 头部 -->
    <Header></Header>
    <div class="category-tags-container">
      <Classify/>
    </div>
    <div class="page-article-container">
      <div class="article-content">
        <articlePage/>
      </div>
      <div class="g-sidebar-container">
        <achievement/>
        <authorList/>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import Header from "../components/MainPage/Header.vue";
import Classify from "../components/MainPage/Classify.vue";
import articlePage from "../components/MainPage/articlePage.vue";
import achievement from "../components/MainPage/achievement.vue";
import authorList from "../components/MainPage/authorList.vue";
import { onMounted } from 'vue'


onMounted(() => {
})

</script>

<style scoped lang="scss">
.home-box {
  width: 100%;
  height: 100%;
  margin: 0 auto;
}
.category-tags-container{
  width: 90%;
  display: flex;
  justify-content: center;
  margin: 0 auto;
}
.page-article-container{
  width: 90%;
  display: flex;
  justify-content: center;
  margin: 0 auto;
  .article-content{
    flex: 3;
  }
  .g-sidebar-container{
    flex: 1;
    margin-left: 10px;
  }
}
.home-main{
   width: 90%;
  
   .home-main-box1{
     flex: 1;
   }
   .home-main-box2{
    flex: 4;
   }
}
</style>
