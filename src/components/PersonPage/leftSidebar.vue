<template>
  <div class="sidebar-box">
    <div class="sidebar-container">
      <!-- 侧边栏 logo -->
      <div class="header">
        <div class="logo">
          <img class="logo-icon" src="../../assets/avator.png" />
        </div>
        <div class="tag1">月色真美</div>
        <div class="tag2">减少信息输入，保持理智。</div>
      </div>
      <div class="sidebar-items">
        <!-- 侧边 导航栏 -->
      <div class="sidebar-nav">
        <!-- 分割线 -->
        <div class="line"></div>
        <!-- 导航区 -->
        <div class="nav-box1">
          <div class="nav-box-title">导航</div>
          <el-row class="tac">
            <el-col>
              <el-menu
                default-active="0"
                class="el-menu-vertical-demo"
                router="true"
                 unique-opened="true"
                @select="selectItem"
                @open="handleOpen"
                @close="handleClose"
              >
                <el-menu-item index="1">
                  <template #title>
                    <el-icon color="gray">
                      <House />
                    </el-icon>
                    <span>首页</span>
                  </template>
                </el-menu-item>
                <el-menu-item index="2">
                  <template #title>
                    <el-icon color="gray">
                      <Folder />
                    </el-icon>
                    <span>仓库</span>
                  </template>
                </el-menu-item>
                <el-menu-item index="3">
                  <template #title>
                    <el-icon color="gray">
                      <Ship />
                    </el-icon>
                    <span>朋友</span>
                  </template>
                </el-menu-item>
                <!-- <el-menu-item index="4">
                  <template #title>
                    <el-icon color="gray">
                      <Picture />
                    </el-icon>
                    <span>相册</span>
                  </template>
                </el-menu-item> -->
                <el-menu-item index="5">
                  <template #title>
                    <el-icon color="gray">
                      <Lock />
                    </el-icon>
                    <span>待办</span>
                  </template>
                </el-menu-item>
                <el-menu-item index="6">
                  <template #title>
                    <el-icon color="gray">
                      <TakeawayBox />
                    </el-icon>
                    <span>足迹</span>
                  </template>
                </el-menu-item>
                <el-sub-menu index="7">
                  <template #title>
                    <el-icon color="gray">
                      <Connection />
                    </el-icon>
                    <span>关于</span>
                  </template>
                   <el-menu-item index="7-1">item one</el-menu-item>
                </el-sub-menu>
              </el-menu>
            </el-col>
          </el-row>
        </div>
      </div>
      <!-- 导航分类 -->
        <div class="sidebar-nav">
          <!-- 分割线 -->
          <div class="line"></div>
          <!-- 分类区 -->
          <div class="nav-box2">
            <div class="nav-box-title">组成</div>
            
            <el-row class="tac">
            <el-col>
              <el-menu
                default-active="0"
                class="el-menu-vertical-demo"
                router="true"
                unique-opened="true"
                @select="selectItem"
                @open="handleOpen"
                @close="handleClose"
              >
                <el-sub-menu index="8">
                  <template #title>
                    <el-icon color="gray">
                        <Menu />
                    </el-icon>
                    <span>分类</span>
                  </template>
                   <el-menu-item index="8-1">item one</el-menu-item>
                </el-sub-menu>
                <el-sub-menu index="9">
                  <template #title>
                    <el-icon color="gray">
                     <Files />
                    </el-icon>
                    <span>页面</span>
                  </template>
                   <el-menu-item index="9-1">item one</el-menu-item>
                </el-sub-menu>
                <el-sub-menu index="10">
                  <template #title>
                    <el-icon color="gray">
                        <Share />
                    </el-icon>
                    <span>友联</span>
                  </template>
                   <el-menu-item index="10-1">item one</el-menu-item>
                </el-sub-menu>
              </el-menu>
            </el-col>
          </el-row>
          </div>
        </div>
      </div>
      
      <!-- 侧边 底部 -->
      <div class="footer">
        <div class="footer-items">
          <div class="footer-item">
            <div class="footer-item-icon">
              <el-icon>
                <Setting />
              </el-icon>
            </div>
            <div class="footer-item-title">管理</div>
          </div>
          <div class="footer-item">
            <div class="footer-item-icon">
              <el-icon>
                <ChatSquare />
              </el-icon>
            </div>
            <div class="footer-item-title">评论</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const handleOpen = (key: string, keyPath: string[]) => {
  console.log(key, keyPath);
};

const handleClose = (key: string, keyPath: string[]) => {
  console.log(key, keyPath);
};

const selectItem = (key: string, keyPath: string[], item: string) => {
  console.log(key, keyPath, "item:", item);
};
</script>

<style scoped lang="scss">
.sidebar-box {
  width: 100%;
  height: 100%;
  overflow: hidden;
  position: relative;
  .sidebar-container {
    width: 100%;
    height: 100%;
    top: 60px;
    padding-bottom: 41px;
    background-color: #f9f9f9;
  }
}
.sidebar-container {
  width: 100%;
  .header {
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    .logo {
      margin-top: 25px;
      margin-bottom: 15px;
      .logo-icon {
        width: 90px;
        height: auto;
        border-radius: 50%;
      }
    }
    .tag1 {
      margin-bottom: 5px;
      font-size: 14px;
      color: #777777;
    }
    .tag2 {
      margin-bottom: 15px;
      font-size: 12px;
      color: #98a6a7;
    }
  }
}
.nav1{
  padding-bottom: 0;
}
.sidebar-items{
  width: 100%;
  padding-bottom: 30px;
  .line {
    height: 1px;
    width: 100%;
    background-color: #fff;
  }
  .nav-box1{
     margin-top: 20px;
  }
  .nav-box1,.nav-box2 {
   .el-icon{
    font-size: 15px;
   }
    .tac{
     .el-menu-item{
      height: 40px;
      font-size: 12px;
      color: #777777;
      background-color: #F9F9F9 ;
     }
     .el-menu-item.is-active{
        background-color: #ECECEC 
     }
     .el-menu-item:hover{
        background-color: #ECECEC 
     }
     .el-sub-menu{
      font-size: 12px;
      color: #777777;
      background-color: #F9F9F9 ;
     }
     .el-sub-menu__title{
      height: 40px;
      line-height: 40px;
      font-size: 12px;
      color: #777777;
      background-color: #F9F9F9 ;
    }
    .el-sub-menu__title:hover{
      background-color: #ECECEC !important;
    }

    }

    .nav-box-title {
      font-size: 12px;
      padding: 0 15px;
      margin: 15px 0 10px;
      color: #98a6ad;
    }
  }
}



.nav-first {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.footer {
  position: absolute;
  width: calc(100% - 10px);
  bottom: 0;
  padding: 5px;
  background-color: #ffffff;
  .footer-items {
    display: flex;
    justify-content: space-around;
    align-items: center;
    .footer-item {
      font-size: 12px;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
    }
  }
}
</style>