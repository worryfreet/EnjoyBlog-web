<template>
  <div class="rightSidebar">
    <!-- 标签栏 -->
    <el-tabs v-model="activeName" class="demo-tabs" stretch="true" @tab-click="handleClick">
      <el-tab-pane label="User" name="first">
        <template #label>
          <span class="custom-tabs-label tab1">
            <el-icon>
              <Star />
            </el-icon>
          </span>
        </template>
        <!-- 点赞 -->
        <div class="fav">
          <div class="fav-title">热门文章</div>
          <div class="fav-box">
            <div class="fav-item" v-for="(item,index) in favList" key="{{item.id}}">
              <div class="fav-item-img">
                <img :src="item.imgUrl" />
              </div>
              <div class="fav-item-info">
                <span class="fav-info-title">{{item.title}}</span>
                <div class="fav-info-tag">
                  <el-icon class="fav-info-icon">
                    <ChatRound />
                  </el-icon>
                  <span class="fav-info-num">{{item.num}}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </el-tab-pane>
      <el-tab-pane label="Config" name="second">
        <template #label>
          <span class="custom-tabs-label">
            <el-icon>
              <ChatSquare />
            </el-icon>
          </span>
        </template>
        <!-- 评论 -->
        <div class="fav">
          <div class="fav-title">最新评论</div>
          <div class="fav-item" v-for="(item,index) in commentList" key="{{item.id}}">
            <div class="fav-item-img">
              <img :src="item.imgUrl" />
            </div>
            <div class="fav-item-info">
              <span class="fav-info-name">{{item.name}}</span>
              <div class="fav-info-com">{{item.comment}}</div>
            </div>
          </div>
        </div>
      </el-tab-pane>
      <el-tab-pane label="Role" name="third">
        <template #label>
          <span class="custom-tabs-label">
            <el-icon>
              <Present />
            </el-icon>
          </span>
        </template>
        <!-- 随机文章 -->
        <div class="fav">
          <div class="fav-title">随机文章</div>
          <div class="fav-box">
            <div class="fav-item" v-for="(item,index) in articleLst" key="{{item.id}}">
              <div class="fav-item-img">
                <img :src="item.imgUrl" />
              </div>
              <div class="fav-item-info">
                <span class="fav-info-title">{{item.title}}</span>
                <div class="fav-info-tag">
                  <el-icon class="fav-info-icon">
                    <ChatRound />
                  </el-icon>
                  <span class="fav-info-num">{{item.num}}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </el-tab-pane>
    </el-tabs>
    <!-- 博客信息 -->
    <div class="blog-info">
      <div class="blog-info-title">博客信息</div>
      <div class="blog-info-box">
        <div class="blog-info-item">
          <div class="left">
            <el-icon class="blog-info-icon">
              <CollectionTag />
            </el-icon>
            <span class="blog-info-tip">文章数量</span>
          </div>
          <span class="blog-info-tag">255</span>
        </div>
        <div class="blog-info-item">
          <div class="left">
            <el-icon class="blog-info-icon">
              <ChatRound />
            </el-icon>
            <span class="blog-info-tip">评论数量</span>
          </div>

          <span class="blog-info-tag">4563</span>
        </div>
        <div class="blog-info-item">
          <div class="left">
            <el-icon class="blog-info-icon">
              <Timer />
            </el-icon>
            <span class="blog-info-tip">运行天数</span>
          </div>

          <span class="blog-info-tag">6年81天</span>
        </div>
        <div class="blog-info-item">
          <div class="left">
            <el-icon class="blog-info-icon">
              <Guide />
            </el-icon>
            <span class="blog-info-tip">最后活动</span>
          </div>
          <span class="blog-info-tag">一个月前</span>
        </div>
      </div>
    </div>
    <!-- 标签云 -->
    <div class="tag-box">
      <!-- <div class="tag-box-title">标签云</div>
        <div class="tag-items" v-for="(item,index) in tagList" :key="item.id">
            <span class="tag-item">{{item.tag}}</span>
      </div>-->
      <div class="tag-box-title">标签云</div>
      <el-tag
        v-for="tag in tagList"
        :key="tag"
        type="info"
        class="mx-1"
        closable
        :disable-transitions="false"
        @close="handleClose(tag)"
      >{{ tag }}</el-tag>
      <el-input
        v-if="inputVisible"
        ref="InputRef"
        v-model="inputValue"
        class="ml-1 w-20"
        size="small"
        @keyup.enter="handleInputConfirm"
        @blur="handleInputConfirm"
      />
      <el-button v-else class="button-new-tag ml-1" size="small" @click="showInput">+ New Tag</el-button>
    </div>
  </div>
</template>

<script setup lang="ts">
import {ref,reactive,nextTick} from  'vue'
import type { TabsPaneContext } from 'element-plus'
import { ElInput } from 'element-plus'

// 点赞
const favList = reactive([
    {
        id:1,
        imgUrl:'https://www.ihewro.com/usr/themes/handsome/assets/img/sj2/5.jpg',
        title:'handsome -- 一款typcho主题',
        num:'123'
    },
    {
        id:2,
        imgUrl:'https://www.ihewro.com/usr/themes/handsome/assets/img/sj2/5.jpg',
        title:'Focus——不只是RSS订阅器',
        num:'1145'
    },
    {
        id:3,
        imgUrl:'https://www.ihewro.com/usr/themes/handsome/assets/img/sj2/5.jpg',
        title:'2019北邮考研我的个人经历',
        num:'1342'
    },
    {
        id:4,
        imgUrl:'https://www.ihewro.com/usr/themes/handsome/assets/img/sj2/5.jpg',
        title:'再见，2020',
        num:'76'
    },
    {
        id:5,
        imgUrl:'https://www.ihewro.com/usr/themes/handsome/assets/img/sj2/5.jpg',
        title:'Leaf — A Typecho Theme',
        num:'34'
    },
])
// 评论
const commentList = reactive([
     {
        id:1,
        imgUrl:'https://cdn.helingqi.com/wavatar/22880e47ba410331d4fdce388d450ff3?s=65&r=G&d=',
        name:'smallan',
        comment:'生活就是生动的活着',
        num:'123'
    },
    {
        id:2,
        imgUrl:'https://cdn.helingqi.com/wavatar/22880e47ba410331d4fdce388d450ff3?s=65&r=G&d=',
        name:'黑桃三',
        comment:'chrome第一次访问你的博客会蹦出个传奇页游的广告',
        num:'1145'
    },
    {
        id:3,
        imgUrl:'https://cdn.helingqi.com/wavatar/22880e47ba410331d4fdce388d450ff3?s=65&r=G&d=',
        name:'airsado',
        comment:'考古哈哈',
        num:'1342'
    },
    {
        id:4,
        imgUrl:'https://cdn.helingqi.com/wavatar/22880e47ba410331d4fdce388d450ff3?s=65&r=G&d=',
        name:'贫僧',
        comment:'大佬你这个表情真的太狠了哈哈哈୧(๑•̀⌄•́๑)૭',
        num:'76'
    },
    {
        id:5,
        imgUrl:'https://cdn.helingqi.com/wavatar/22880e47ba410331d4fdce388d450ff3?s=65&r=G&d=',
        name:'豆花',
        comment:'该评论仅登录用户及评论双方可见',
        num:'34'
    },
])
// 随机文章
const articleLst = reactive([
    {
        id:1,
        imgUrl:'https://www.ihewro.com/usr/themes/handsome/assets/img/sj2/5.jpg',
        title:'下辈子我愿做一座风车，永远面向你',
        num:'123'
    },
    {
        id:2,
        imgUrl:'https://www.ihewro.com/usr/themes/handsome/assets/img/sj2/5.jpg',
        title:'关于2019的一些小事',
        num:'1145'
    },
    {
        id:3,
        imgUrl:'https://www.ihewro.com/usr/themes/handsome/assets/img/sj2/5.jpg',
        title:'利用PHP给typecho添加一个“百度是否收录”判断',
        num:'1342'
    },
    {
        id:4,
        imgUrl:'https://www.ihewro.com/usr/themes/handsome/assets/img/sj2/5.jpg',
        title:'机试 java 基础笔记',
        num:'76'
    },
    {
        id:5,
        imgUrl:'https://www.ihewro.com/usr/themes/handsome/assets/img/sj2/5.jpg',
        title:'此内容被密码保护',
        num:'34'
    },
])
// 标签云
const tagList = ref(['时候','喜欢','生活','事情','代码','内容','文章','博客'])

const activeName = ref('first')

const handleClick = (tab: TabsPaneContext, event: Event) => {
  console.log(tab, event)
}

const inputValue = ref('')
const inputVisible = ref(false)
const InputRef = ref<InstanceType<typeof ElInput>>()

const handleClose = (tag: string) => {
  tagList.value.splice(tagList.value.indexOf(tag), 1)
}

const showInput = () => {
  inputVisible.value = true
  nextTick(() => {
    InputRef.value!.input!.focus()
  })
}

const handleInputConfirm = () => {
  if (inputValue.value) {
    tagList.value.push(inputValue.value)
  }
  inputVisible.value = false
  inputValue.value = ''
}



</script>

<style scoped lang="scss">
.rightSidebar {
  width: 100%;
  flex: 1;
  background-color: #f9f9f9;
}

.demo-tabs > .el-tabs__content {
  width: 100%;
  padding: 32px;
  color: #6b778c;
  font-size: 38px;
  font-weight: 600;
}
.demo-tabs .custom-tabs-label .el-icon {
  vertical-align: middle;
  font-size: 18px;
}

.demo-tabs .el-tabs__active-bar {
  background-color: #000000 !important;
}
.demo-tabs .el-tabs__nav-scroll .el-tabs__item.is-active {
  color: #6b778c;
}
.demo-tabs .el-tabs__item:hover {
  color: #6b778c;
}

// 点赞
.fav {
  padding: 20px;
  .fav-title {
    color: #777777;
    font-size: 16px;
    margin-bottom: 15px;
  }
  .fav-item {
    padding: 5px 10px;
    margin-bottom: -1px;
    display: flex;
    align-items: center;
    .fav-item-img img {
      width: 30px;
      height: auto;
      border-radius: 20%;
      box-shadow: 2px 2px 3px #e1e1e1;
    }
    .fav-item-info {
      color: #777777;
      margin-left: 10px;
    }
  }
}
.fav-item-info {
  .fav-info-title {
    font-size: 14px;
  }
  .fav-info-tag {
    margin-top: 5px;
    font-size: 10px;
    .fav-info-icon {
      margin-right: 5px;
    }
  }
}
.fav-item-info {
  .fav-info-name {
    font-size: 14px;
  }
  .fav-info-com {
    color: #a0a0a0;
    margin-top: 5px;
    font-size: 12px;
  }
}

// 博客信息
.blog-info {
  padding: 20px;
  color: #777777;
  .blog-info-title {
    margin-bottom: 10px;
    font-size: 16px;
  }
  .blog-info-box {
    background-color: #fff;
    .blog-info-item {
      font-size: 14px;
      padding: 10px;
      display: flex;
      justify-content: space-between;
      align-items: center;
      .blog-info-icon {
        margin-right: 10px;
      }
      .blog-info-tag {
        font-size: 10px;
        color: #fff;
        padding: 1px 4px;
        border-radius: 10px;
        border: 1px solid #d7e0e3;
        background-color: #d7e0e3;
      }
    }
  }
}
// 标签云
.tag-box {
  padding: 20px;
  color: #777777;
  .tag-box-title {
    margin-bottom: 10px;
    font-size: 16px;
  }
  .tag-items {
    font-size: 10px;
    color: #fff;
    display: inline-block;
    .tag-item {
      display: inline-block;
      margin-top: 5px;
      margin-left: 5px;
      padding: 2px 5px;
      border-radius: 10px;
      border: 1px solid #cfdadd;
      background-color: #cfdadd;
    }
  }
}
.el-tag.is-closable{
  cursor: pointer;
  margin: 5px;
}
.el-tag{
.el-button:hover{
  background-color: #efefef;
  color: #777777;
}
}
.el-tag.el-input{
  outline: 0;
}
</style>