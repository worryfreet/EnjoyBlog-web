<template>
  <!-- 我的成就 -->
  <div class="achievement-box">
    <div class="title">我的成就</div>
    <div class="item-box">
      <div class="item" v-for="item in itemList" :key="item.id">
        <span class="number">{{ item.number }}</span>
        <span class="text-title">{{ item.text }}</span>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const itemList = [
  {
    id: "0",
    text: "文章",
    number: 21,
  },
  {
    id: "1",
    text: "提问",
    number: 3,
  },
  {
    id: "2",
    text: "回答",
    number: 45,
  },
  {
    id: "3",
    text: "获赞",
    number: 4546,
  },
];
</script>

<style scoped lang="scss">
.achievement-box {
  width: 340px;
  background-color: #fff;
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
    display: flex;
    justify-content: space-between;
    .item {
      font-size: 14px;
      padding: 15px;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
        .number{
            margin-bottom: 10px;
            font-size: 16px;
            font-weight: 700;
        }
        .text-title{
            color: #939aa3;
            font-size: 12px;
        }
    }
  }
}
</style>
