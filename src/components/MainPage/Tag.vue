<template>
  <div class="Tag-box">
    <ul>
      <li
        v-for="(item, index) in tagList"
        :key="index"
        @click="changeTag(item)"
        :class="{activeTag: currentIndex === item.id}"
      >
        {{ item.text }}
      </li>
    </ul>
  </div>

</template>

<script setup lang="ts">
import { ref } from "vue";
import {allTagList} from './tagData'
import emiter from '../../utils/bus'

const tagList = allTagList;

const currentIndex = ref('0')
const changeTag = (item: any) => {
    currentIndex.value = item.id
    emiter.emit('tagChildrenList',item.children)
};
</script>

<style scoped lang="scss">
.Tag-box {
  width: 100%;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 0 auto;
  color: #777777;
  border-top: 1px solid #efefef;
  ul {
    list-style: none;
    display: flex;
    li {
        cursor: pointer;
        font-size: 15px;
        margin: 0 6px;
        padding: 3px 14px;
    }
    li:hover{
        color: #004fc4;
        padding: 3px 14px;
        background-color: rgba(5, 105, 204, .06)
      }
  }
}
.activeTag{
    cursor: pointer;
    color: #fff;
    font-weight: 700;
    border-radius: 3px;
    padding: 3px 14px;
    margin: 0 6px;
    background-color: #004fc4;
    
}
</style>
