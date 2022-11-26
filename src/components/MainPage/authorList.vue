<template>
  <div class="author-list">
    <div class="title">作者榜</div>
    <div class="item-box">
      <div class="item" v-for="item in authorList" :key="item.id">
        <img class="logo" src="../../assets/2.png" alt="" />
        <div class="author-info">
          <span class="name">{{ item.name }}</span>
          <span class="tag">{{ item.tag }}</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const authorList = [
  {
    id: "1",
    imgUrl: "",
    name: "Qbian",
    tag: "java&go",
  },
  {
    id: "2",
    imgUrl: "",
    name: "客栈小K",
    tag: "扫地",
  },
  {
    id: "3",
    imgUrl: "",
    name: "hhhhh",
    tag: "划水专员~",
  },
  {
    id: "4",
    imgUrl: "",
    name: "无忧",
    tag: "java&go",
  },
  {
    id: "5",
    imgUrl: "",
    name: "无忧本本",
    tag: "java&go",
  },
];
</script>

<style scoped lang="scss">
.author-list {
  width: 340px;
  background-color: #fff;
  margin-top: 10px;
  padding-bottom: 10px;
  .title {
    padding: 0 15px;
    font-size: 18px;
    font-weight: 700;
    height: 54px;
    line-height: 54px;
    border-bottom: 1px solid #ebeef5;
    margin-bottom: 0;
  }
  .item-box {
    .item {
      font-size: 14px;
      padding: 15px 15px 8px;
      display: flex;
      align-items: center;
      .logo {
        width: 35px;
        height: auto;
        border-radius: 50%;
        margin-right: 15px;
      }
      .author-info {
        display: flex;
        flex-direction: column;
        color: #606a78;
        .name {
            color: #282f38;
            font-size: 16px;
        }
        .tag {
            font-size: 12px;
            margin-top: 7px;
        }
      }
    }
    .item:hover{
        cursor: pointer;
        color: #004fc4;
        background-color: #F0F6FC;
    }
  }
}
</style>
