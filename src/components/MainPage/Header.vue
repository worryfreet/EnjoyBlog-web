<template>
  <div class="header-box">
    <div class="header-container">
      <div class="box">
        <div class="header-left">
          <!-- logo -->
          <div class="logo">
            <img class="logo-icon" src="../assets/logo.jpg" />
            <span class="logo-title" @click="gotoMainPage()">享受每一客</span>
          </div>
          <div class="switchTab">个人页</div>
          <!-- 搜索 -->
          <div class="search-box">
            <input type="text" placeholder="搜索" />
            <span></span>
          </div>
        </div>
        <div class="header-right">
          <!-- 写博客 -->
          <div class="edit-box">写博客</div>
          <!-- 消息 -->
          <div class="news-box">
            <el-icon><Bell /></el-icon>
          </div>
          <!-- 退出 -->
          <div class="log-box">
            <el-icon><Key /></el-icon>
          </div>
        </div>
      </div>
      <Tag v-if="pageType !== 'mainPag'" />
    </div>
  </div>
</template>

<script setup lang="ts">
import Tag from "./Tag.vue";
import { useRouter } from 'vue-router'
const router = useRouter()

let pageType = localStorage.getItem('pageType')

const gotoMainPage = () => {
  router.push({path:'mainPage'})
  localStorage.setItem('pageType','mainPage')
}
</script>

<style scoped lang="scss">
.header-box {
  position: sticky;
  width: 100%;
  z-index: 100;
  top: 0;
}
.header-container {
  width: 90%;
  background-color: #f9f9f9;
  box-shadow: 0 1px 4px 1px rgb(0 0 0 / 5%);
  margin: 0 auto;
  .box {
    width: 100%;
    height: 60px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin: 0 auto;
    color: #777777;
    .header-left {
      display: flex;
      justify-content: center;
      align-items: center;
      .switchTab {
        margin-right: 20px;
        margin-left: 70px;
      }
    }
    .logo {
      width: 220px;
      display: flex;
      align-items: center;
      .logo-icon {
        width: 40px;
        height: auto;
        margin-left: 20px;
      }
      .logo-title {
        cursor: pointer;
        font-size: 16px;
        margin-left: 10px;
      }
    }
    .header-right {
      display: flex;
      font-size: 16px;
      margin-right: 20px;
      .edit-box {
        margin: 0 10px;
      }
      .news-box {
        margin: 0 10px;
      }
      .log-box {
        margin: 0 10px;
      }
    }
  }
}
</style>
