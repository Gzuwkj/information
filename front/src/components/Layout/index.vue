<template>
  <div class="layout">
    <Menu mode="horizontal" active-name="1" class="menu">
      <div class="layout-logo">
        <img :src="logo" style="height: 80%" alt="">
        <h3 style="margin-left: 1rem">信息抽取平台</h3>
      </div>
      <div class="menu-items">
        <Menu-item name="1" >
          <Icon type="ios-paper"></Icon>
          主页
        </Menu-item>
        <Menu-item name="2">
          <Icon type="ios-paper"></Icon>
          科研团队
        </Menu-item>
        <Menu-item name="3">
          <Icon type="ios-people"></Icon>
          分析
        </Menu-item>
        <Submenu name="4">
          <template slot="title">
            <Icon type="stats-bars"></Icon>
            关于
          </template>
          <Menu-group title="使用">
            <Menu-item name="3-1">新增和启动</Menu-item>
            <Menu-item name="3-2">活跃分析</Menu-item>
            <Menu-item name="3-3">时段分析</Menu-item>
          </Menu-group>
          <Menu-group title="留存">
            <Menu-item name="3-4">用户留存</Menu-item>
            <Menu-item name="3-5">流失用户</Menu-item>
          </Menu-group>
        </Submenu>
      </div>
    </Menu>
    <div style="height: 0;flex-grow: 1;flex-shrink: 1;overflow: auto">
      <div class="layout-content" v-if="">
        <router-view/>
      </div>

      <div class="layout-copy">
        2011-2016 &copy; TalkingData
      </div>
    </div>
  </div>
</template>
<script>
import img from '@/assets/logo.png'
export default {
  name: "index",
  data(){
    return {
      logo: img
    }
  }
}
</script>

<style scoped>
.layout{
  border: 1px solid #d7dde4;
  background: #f5f7f9;
  height: 100vh;
  overflow: hidden;
  display: flex;
  flex-direction: column;
}
.layout-content{
  width: 100%;
  padding: 2rem 4rem;
  border-radius: 4px;
  flex-grow: 1;
}
.layout-copy{
  text-align: center;
  padding: 10px 0 20px;
  color: #9ea7b4;
}

.menu{
  display: flex;
  justify-content: space-between;
}
.layout-logo{
  width: 40rem;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}
.menu-items{
  padding-right: 4rem;
}
</style>
