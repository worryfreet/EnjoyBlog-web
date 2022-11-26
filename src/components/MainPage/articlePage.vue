<template>
  <div class="articlePage-box">
    <div class="articlePage-tltle">
        <span v-for="item in articleTitle"
          :key="item.id"
          @click="changeTitle(item)"
          :class="{activeTab: activeIndex === item.id}">
          {{ item.text }}
        </span>
    </div>
<articleCard/>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import articleCard from './articleCard.vue';
const articleTitle = [
  {
    id: "0",
    text: "最新",
  },
  {
    id: "1",
    text: "最热",
  },
  {
    id: "2",
    text: "官方",
  },
  {
    id: "3",
    text: "加精",
  },
];
const activeIndex = ref('0')
const changeTitle = (item:any) => {
    activeIndex.value = item.id
}
</script>

<style scoped lang="scss">
.articlePage-box{
    width: 100%;
    background-color: #fff;
    .articlePage-tltle{
        height: 54px;
        line-height: 54px;
        border-bottom: 1px solid #f4f4f4;
        padding-left: 15px;
        display: flex;
          span{
                font-size: 16px;
                color: #4e5969;
                margin-right: 35px;
                cursor: pointer;
            }
            span:hover{
                color: #004fc4;
            }
        .activeTab{
            color: #004fc4;
            font-weight: 700;
            border-bottom: 3px solid #004fc4;
        }
    }
}
</style>
