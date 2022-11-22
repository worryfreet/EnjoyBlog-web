<template>
  <div class="main">
    <div class="center-box">
      <header class="center-header">
        <h1 class="center-title">友人</h1>
        <span class="title-info">我看到这个世界的恶意，我们正在接受考验</span>
      </header>
      <div class="wrapper">
        <!-- 首页输出文章 -->
        <div class="blog-post">
          <div class="blog-item">
            <div class="box1">
              <div class="box1-title">
                <span class="item-tag1">置顶</span>
                <span class="item-tip">handsome</span>
                <p class="item-tag2">--</p>
                <span class="item-tip">一款typecho主题</span>
              </div>
              <div class="box1-info">在复杂中，保持简洁。一款精心打磨后的typecho主题</div>
            </div>
             <div class="box1">
              <div class="box1-title">
                <span class="item-tag1">置顶</span>
                <span class="item-tip">handsome</span>
                <p class="item-tag2">--</p>
                <span class="item-tip">一款typecho主题</span>
              </div>
              <div class="box1-info">在复杂中，保持简洁。一款精心打磨后的typecho主题</div>
            </div>
             <div class="box1">
              <div class="box1-title">
                <span class="item-tag1">置顶</span>
                <span class="item-tip">handsome</span>
                <p class="item-tag2">--</p>
                <span class="item-tip">一款typecho主题</span>
              </div>
              <div class="box1-info">在复杂中，保持简洁。一款精心打磨后的typecho主题</div>
            </div>
            
          </div>
        </div>
      </div>
    </div>
    <div class="right-box">
      <rightSidebar/>
    </div> 
  </div>
</template>

<script setup lang="ts">
import rightSidebar from './rightSidebar.vue';
</script>

<style scoped lang="scss">
.main {
  width: 100%;
  display: flex;
  flex: 2;
  .right-box {
    right: 0;
    width: 268px;
  }
}
.center-box {
  .center-header {
    padding: 20px;
    background-color: #F9F9F9;
    .center-title {
      width: 670px;
      font-weight: lighter;
    }
    .title-info {
      font-size: 13px;
      color: #a0a0a0;
    }
  }
}
.wrapper {
  padding: 20px;
  .blog-post {
    background-color: #F9F9F9;
    .blog-item {
        width: 100%;
        
    }
  }
}
.box1 {
    height: 250px;
    background-size: cover;
    background-repeat: no-repeat;
    background-image: url(https://www.ihewro.com/usr/uploads/2019/01/762065921.jpg);
    padding: 30px;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
  .box1-title {
    color: #fff;
    font-size: 20px;
    margin-bottom: 10px;
    display: flex;
    align-items: center;
    .item-tag1 {
      color: #fff;
      font-size: 12px;
      padding: 2px 6px;
      border-radius: 5px;
      margin-right: 10px;
      background-color: #F05050;
      border: 1px solid #F05050;
    }
    .item-tip {
      margin: 5px;
    }
  }
   .box1-info {
    color: #fff;
    font-size: 12px;
    }
}
.right-box{
  width: 100%;
}
</style>