<template>
  <!--region 粒子效果的登录背景-->
  <div class="login-page">
    <vue-particles color="#fff" :particleOpacity="0.7" :particlesNumber="60" shapeType="circle" :particleSize="4"
                   linesColor="#fff" :linesWidth="1" :lineLinked="true" :lineOpacity="0.4" :linesDistance="150"
                   :moveSpeed="2" :hoverEffect="true" hoverMode="grab" :clickEffect="true" clickMode="push"
                   class="bg-lizi">
    </vue-particles>
    <!--region 登录表单-->
    <el-form :model="loginForm" class="login-form" label-position="left" size="large">
      <el-form-item>
        <el-input type="text" v-model="loginForm.phone" auto-complete="off" placeholder="注册时的手机号">
          <span v-html="icon.phone" class="axon-icon" slot="prefix"></span>
        </el-input>
      </el-form-item>
      <el-form-item>
        <el-input :type="passwordType" v-model="loginForm.password" size="large" auto-complete="off" placeholder="登录密码">
          <span v-html="icon.password" class="axon-icon" slot="prefix"></span>
          <span v-html="passwordType === 'password' ? icon.encryption : icon.decryption" class="axon-icon" slot="suffix"
                @click="showPwd()"></span>
        </el-input>
      </el-form-item>
      <el-button type="primary" @click="submitLogin" @enter="submitLogin()" :loading="loading">登&nbsp;&nbsp;&nbsp;&nbsp;录</el-button>
    </el-form>
    <!--endregion-->
  </div>
  <!--endregion-->
</template>
<script>
import BLL from './index.js'
import menusLisit from '../../../static/json/limit.json'

export default {
  components: {},
  data () {
    return {
      icon: {
        phone: '&#xe60d;',
        password: '&#xe61b;',
        encryption: '&#xe60c;',
        decryption: '&#xe620;'
      },
      loginForm: {
        phone: '13776626715',
        password: '123456'
      },
      loading: false,
      menus: menusLisit,
      passwordType: 'password' // 密码控件的类型
    }
  },
  created () {
    this.BLL = new BLL(this)
  },
  mounted () {
  },
  methods: {
    // 登录
    submitLogin () {
      this.BLL.login()
    },
    showPwd () {
      this.passwordType === 'password' ? this.passwordType = 'text' : this.passwordType = 'password'
    }
  }
}
</script>

<style lang="less">
@import "index.less";
</style>
