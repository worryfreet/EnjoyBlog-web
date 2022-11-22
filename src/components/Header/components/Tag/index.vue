<template>
    <div class="Tag-box">
        <ul>
            <li v-for="(item,index) in tagList" :key="index">{{item.text}}</li>
        </ul>
    </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';

const tagList = ref([
    {
        id: 0,
        text: '全部'
    },
    {
        id: 1,
        text: '前端'
    },
    {
        id: 2,
        text: '后端'
    },
    {
        id: 3,
        text: '产品'
    },
    {
        id: 4,
        text: '测试'
    },
    {
        id: 5,
        text: '设计'
    },
    {
        id: 6,
        text: '运维'
    },
])

</script>

<style scoped lang="scss">
.Tag-box{
    width: 100%;
    height: 50px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin: 0 auto;
    background-color: bisque;
    color: #777777;
    ul {
        list-style: none;
        display: flex;
        
    }
}
</style>