<template>
  <div class="article-card" v-for="item in articleInfo" :key="item.id">
    <div class="card-top">
      <div class="logo">
        <img :src="item.imgUrl" alt="" />
        <span class="author">{{item.author}}</span>
      </div>
      <span class="tap">|</span>
      <span class="time">{{item.publishTmie}}</span>
      <span class="tap">|</span>
      <span class="tag" v-for="i in item.tag" :key="i.id">{{i.text}}</span>
    </div>
    <div class="card-center">
      <span class="title">{{item.title}}</span>
      <span class="info">{{item.content}}</span>
    </div>
    <div class="card-bottom">
        <span class="icon">
            <View style="width:16px; hight: 16px; margin-right: 8px" />
            <span class="number">{{item.scanNumber}}</span>
            <span class="tap">|</span>
        </span>
        <span class="icon">
            <Star style="width:16px; hight: 16px; margin-right: 8px" />
            <span class="number">{{item.supportNumber}}</span>
            <span class="tap">|</span>
        </span>
        <span class="icon">
            <ChatDotRound style="width:16px; hight: 16px; margin-right: 8px" />
            <span class="number">{{item.commentNumber}}</span>
         </span>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const articleInfo = [
    {
        id: '1',
        imgUrl:'../../assets/avator.png',
        author:'客栈小K',
        publishTmie:'2天前',
        tag:[
            {
                id:'12',
                text:'前端相关',
            },
            {
                id:'13',
                text:'JavaScript',
            },
            {
                id:'14',
                text:'React',
            },
        ],
        title:'导航条根据滚动条方向显示淡入淡出效果',
        content:'前言 不以规矩，不能成方圆。 本人有幸经历了团队 从缺乏标准到逐渐规范 的一个过程，在此当做记录供大家参考。 本文从 为什么需要规范 以及 建立规范的重',
        scanNumber:21,
        commentNumber:3,
        supportNumber:56,

    },
    {
        id: '2',
        imgUrl:'F:\vscode-workplace\EnjoyBlog\EnjoyBlog-web\src\assets\logo.jpg',
        author:'他在校',
        publishTmie:'一天前',
        tag:[
            {
                id:'12',
                text:'前端相关',
            },
        ],
        title:'探秘前端 CRDT 实时协作库 Yjs 工程实现',
        content:'作为近年来分布式系统领域算法研究的新成果，[CRDT](https://link.juejin.cn/?target=https%3A%2F%2Fen.wikipedia.org%2Fwiki%2FConflict-free_replicated_data_typ34354555555555555',
        scanNumber:20,
        commentNumber:7,
        supportNumber:87,

    },
    {
        id: '1',
        imgUrl:'F:\vscode-workplace\EnjoyBlog\EnjoyBlog-web\src\assets\logo.png',
        author:'hhh',
        publishTmie:'一年前',
        tag:[
            {
                id:'15',
                text:'Vue',
            },
            {
                id:'16',
                text:'浏览器',
            },
            {
                id:'17',
                text:'算法',
            },
        ],
        title:'正则表达式不要背',
        content:'正则表达式一直是困扰很多程序员的一门技术，当然也包括曾经的我。大多数时候我们在开发过程中要用到某些正则表达式的时候，都会打开谷歌或百度直hiadhshdddddddddddddddddddddddddddd',
        scanNumber:65,
        commentNumber:8,
        supportNumber:12,

    },
    {
        id: '1',
        imgUrl:'F:\vscode-workplace\EnjoyBlog\EnjoyBlog-web\src\assets\avator.png',
        author:'客栈小K',
        publishTmie:'2天前',
        tag:[
            {
                id:'12',
                text:'前端相关',
            },
            {
                id:'13',
                text:'JavaScript',
            },
            {
                id:'14',
                text:'React',
            },
        ],
        title:'导航条根据滚动条方向显示淡入淡出效果',
        content:'前言 不以规矩，不能成方圆。 本人有幸经历了团队 从缺乏标准到逐渐规范 的一个过程，在此当做记录供大家参考。 本文从 为什么需要规范 以及 建立规范的重',
        scanNumber:21,
        commentNumber:3,
        supportNumber:56,

    },
    {
        id: '2',
        imgUrl:'F:\vscode-workplace\EnjoyBlog\EnjoyBlog-web\src\assets\logo.jpg',
        author:'他在校',
        publishTmie:'一天前',
        tag:[
            {
                id:'12',
                text:'前端相关',
            },
        ],
        title:'探秘前端 CRDT 实时协作库 Yjs 工程实现',
        content:'作为近年来分布式系统领域算法研究的新成果，[CRDT](https://link.juejin.cn/?target=https%3A%2F%2Fen.wikipedia.org%2Fwiki%2FConflict-free_replicated_data_typ34354555555555555',
        scanNumber:20,
        commentNumber:7,
        supportNumber:87,

    },
    {
        id: '1',
        imgUrl:'F:\vscode-workplace\EnjoyBlog\EnjoyBlog-web\src\assets\logo.png',
        author:'hhh',
        publishTmie:'一年前',
        tag:[
            {
                id:'15',
                text:'Vue',
            },
            {
                id:'16',
                text:'浏览器',
            },
            {
                id:'17',
                text:'算法',
            },
        ],
        title:'正则表达式不要背',
        content:'正则表达式一直是困扰很多程序员的一门技术，当然也包括曾经的我。大多数时候我们在开发过程中要用到某些正则表达式的时候，都会打开谷歌或百度直hiadhshdddddddddddddddddddddddddddd',
        scanNumber:65,
        commentNumber:8,
        supportNumber:12,

    },
]

</script>

<style scoped lang="scss">
.article-card {
  display: flex;
  flex-direction: column;
  padding: 15px;
  background-color: #fff;
  border-bottom: 1px solid #ebeef5;
  .card-top {
    display: flex;
    align-items: center;
    justify-content: flex-start;
    color: #939aa3;
    font-size: 14px;
    margin-bottom: 10px;
    .logo {
      display: flex;
      align-items: center;
      img {
        width: 30px;
        height: auto;
        border-radius: 50%;
        margin-right: 10px;
      }
      .author {
        color: #282f38;
      }
    }
    .tap {
      margin: 0 10px;
    }
    .tag {
      border-radius: 3px;
      margin-right: 8px;
      padding: 3px 12px;
      font-size: 12px;
      background-color: rgba(5, 105, 204, 0.06);
    }
    .tag:hover {
      color: #004fc4;
      background-color: #e8f1fa;
    }
  }
  .card-center {
    display: flex;
    flex-direction: column;
    .title {
      color: #1d2129;
      font-size: 20px;
      font-weight: 700;
      font-family: "Hiragino Sans GB";
      margin-bottom: 10px;
      // "Segoe UI","PingFang SC","Hiragino Sans GB","Microsoft YaHei","Helvetica Neue",Helvetica,Arial,sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol"
    }
    .title:hover {
      color: #004fc4;
    }
    .info {
      color: #606a78;
      font-size: 15px;
      line-height: 28px;
      margin-bottom: 10px;
      overflow: hidden;
      text-overflow: ellipsis;
      display: -webkit-box;
      -webkit-box-orient: vertical;
      -webkit-line-clamp: 2; /*超出2行就显示省略号，可以填3或者其它正整数*/
    }
  }
  .card-bottom{
    color: #939aa3;
    font-size: 14px;
    display: flex;
    align-items: center;
    .icon{
        display: flex;
        .tap{
            margin: 0 10px;
        }
    }
  }
}
.article-card:hover{
    background-color: #F7FAFD;
}
</style>
