<template>
  <div :class="{ 'has-logo': showLogo }">
    <logo v-if="showLogo" :collapse="isCollapse" />
    <el-scrollbar wrap-class="scrollbar-wrapper">
      <el-menu
        :default-active="activeMenu"
        :collapse="isCollapse"
        :background-color="variables.menuBg"
        :text-color="variables.menuText"
        :unique-opened="true"
        :active-text-color="settings.theme"
        :collapse-transition="false"
        mode="vertical"
      >
        <sidebar-item
          v-for="(route, index) in permission_routes"
          :key="route.path + index"
          :item="route"
          :base-path="route.path"
        />
      </el-menu>
    </el-scrollbar>
  </div>
</template>

<script>
import { mapGetters, mapState } from 'vuex'
import Logo from './Logo'
import SidebarItem from './SidebarItem'
import variables from '@/assets/styles/variables.scss'
import Push from 'push.js'

export default {
  components: { SidebarItem, Logo },
  computed: {
    ...mapState(['settings']),
    ...mapGetters(['permission_routes', 'sidebar']),
    activeMenu() {
      const route = this.$route
      const { meta, path } = route
      // if set path, the sidebar will highlight the path you set
      if (meta.activeMenu) {
        return meta.activeMenu
      }
      return path
    },
    showLogo() {
      return this.$store.state.settings.sidebarLogo
    },
    variables() {
      return variables
    },
    isCollapse() {
      return !this.sidebar.opened
    },
  },
  methods: {
    //推送弹框消息
    pushMessage(message) {
      Push.create('中豫金融后台管理系统', {
        body: message,
        requireInteraction: true,
        //icon: '/icon.png',
        timeout: 600000,
      })
    },
  },
  // created() {
  //   Push.Permission.request()
  //   console.log(Push.Permission.has())
  //   console.log(Push.Permission.get())
  //   var websocket = null
  //   let role = this.$store.state.user.roleName
  //   let pushMessage = this.pushMessage
  //   if ('WebSocket' in window) {
  //     websocket = new WebSocket('ws://114.215.186.186:8080/webSocket')
  //   } else {
  //     pushMessage('该浏览器不支持websocket')
  //   }
  //   websocket.onopen = function (ev) {
  //     console.log('建立连接')
  //   }
  //   websocket.onclose = function (ev) {
  //     console.log('连接关闭')
  //   }
  //   websocket.onmessage = function (ev) {
  //     console.log(ev)
  //     // var titleInit = document.title,
  //     //   isShine = true
  //     // setInterval(function () {
  //     //   var title = document.title
  //     //   if (isShine == true) {
  //     //     if (/新/.test(title) == false) {
  //     //       document.title = '【你有新消息】'
  //     //     } else {
  //     //       document.title = '【　　　　　】'
  //     //     }
  //     //   } else {
  //     //     document.title = titleInit
  //     //   }
  //     // }, 500)
  //     // window.onfocus = function () {
  //     //   isShine = false
  //     // }
  //     // window.onblur = function () {
  //     //   isShine = true
  //     // }
  //     // // for IE
  //     // document.onfocusin = function () {
  //     //   isShine = false
  //     // }
  //     // document.onfocusout = function () {
  //     //   isShine = true
  //     // }
  //     //弹窗提醒，播放消息
  //     role.forEach((item) => {
  //       if (ev.data.split(',')[2] === item.roleName) {
  //         pushMessage(
  //           ev.data.split(',')[0] +
  //             '，时间' +
  //             ev.data.split(',')[1] +
  //             ',订单号' +
  //             ev.data.split(',')[3]
  //         )
  //       } else if (
  //         ev.data.split(',')[2] == '初终' &&
  //         (item.roleName == '初审' || item.roleName == '终审')
  //       ) {
  //         pushMessage(
  //           ev.data.split(',')[0] +
  //             '，时间' +
  //             ev.data.split(',')[1] +
  //             ',订单号' +
  //             ev.data.split(',')[3]
  //         )
  //       } else if (
  //         ev.data.split(',')[2] == '贷前' &&
  //         (item.roleName == '贷前资料审核' || item.roleName == 'GPS审核')
  //       ) {
  //         pushMessage(
  //           ev.data.split(',')[0] +
  //             '，时间' +
  //             ev.data.split(',')[1] +
  //             ',订单号' +
  //             ev.data.split(',')[3]
  //         )
  //       }
  //     })
  //   }
  //   window.onbeforeunload = function (ev) {
  //     websocket.close()
  //   }
  // },
  mounted() {},
}
</script>
