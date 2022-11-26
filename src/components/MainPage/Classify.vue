<template>
  <div class="Classify-box">
    <ul>
      <li
        v-for="(item, index) in classifyList"
        :key="item.id"
        :class="{ activeTab: activeIndex === item.id }"
        @click="changeTab(item)"
      >
        {{ item.text }}
      </li>
    </ul>
  </div>
</template>

<script setup lang="ts">
import { onMounted, onBeforeMount, ref } from "vue";
import emiter from "../../utils/bus";

const classifyList: any = ref([]);
const activeIndex = ref("0");

const changeTab = (item:any) => {
    activeIndex.value = item.id
}

onMounted(() => {
  emiter.on("tagChildrenList", (res: any) => {
    classifyList.value = res;
  });
});

onBeforeMount(() => {
  emiter.off("tagChildrenList");
});
</script>

<style scoped lang="scss">
.Classify-box {
  width: 100%;
  margin-left: 5px;
  margin-bottom: 8px;
  ul {
    display: flex;
    flex-wrap: wrap;
    li {
      color: #939aa3;
      list-style: none;
      margin-top: 8px;
      margin-right: 8px;
      background-color: #fff;
      padding: 3px 10px;
      font-size: 13px;
      cursor: pointer;
      border-radius: 3px;
      box-shadow: 0 5px 8px 2px #f2f2f2;
    }
    li:hover {
      color: #004fc4;
    }
  }
  .activeTab {
    color: #004fc4;
    background-color: rgba(5, 105, 204, 0.06);
    box-shadow: 0 5px 8px 2px #fff;
  }
}
</style>
