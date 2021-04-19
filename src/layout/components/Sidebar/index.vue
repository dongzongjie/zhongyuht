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
        @select="handleselect"
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
// import Push from 'push.js'

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
    handleselect(key, keyPath) {
      if (key === this.$route.path) {
        // this.$router.go(0)
        // this.$router.push(key)
        this.$router.push({
          path: key,
          query: key,
        })
      }
    },
  },
  created() {
    // Push.Permission.request()
    var websocket = null
    let role = this.$store.state.user.roleName
    let notify = this.$notify
    if ('WebSocket' in window) {
      websocket = new WebSocket('ws://114.215.186.186:8080/webSocket')
    } else {
      notify.error({
        title: '错误',
        message: '该浏览器不支持websocket',
      })
    }
    // websocket.onopen = function (ev) {
    //   console.log('建立连接')
    // }
    // websocket.onclose = function (ev) {
    //   console.log('连接关闭')
    // }
    websocket.onmessage = function (ev) {
      //  console.log(ev)
      //弹窗提醒，播放消息
      role.forEach((item) => {
        if (ev.data.split(',')[2] === item.roleName) {
          notify({
            title: '消息',
            message:
              ev.data.split(',')[0] +
              '，时间' +
              ev.data.split(',')[1] +
              ',订单号' +
              ev.data.split(',')[3],
            duration: 0,
            type: 'warning',
          })
        } else if (
          ev.data.split(',')[2] == '初终' &&
          (item.roleName == '初审' || item.roleName == '终审')
        ) {
          notify({
            title: '消息',
            message:
              ev.data.split(',')[0] +
              '，时间' +
              ev.data.split(',')[1] +
              ',订单号' +
              ev.data.split(',')[3],
            duration: 0,
            type: 'warning',
          })
        } else if (
          ev.data.split(',')[2] == '贷前' &&
          (item.roleName == '贷前资料审核' || item.roleName == 'GPS审核')
        ) {
          notify({
            title: '消息',
            message:
              ev.data.split(',')[0] +
              '，时间' +
              ev.data.split(',')[1] +
              ',订单号' +
              ev.data.split(',')[3],
            duration: 0,
            type: 'warning',
          })
        } else if (
          (ev.data.split('&')[0] === 'JZG') &
          (item.roleName == '初审')
        ) {
          let JZGdata = JSON.parse(ev.data.split('&')[1])
          if (JZGdata.JZGState === '1') {
            notify({
              title: '消息',
              message: `您的订单${JZGdata.data.orderNum}精真估查询成功`,
              duration: 0,
              type: 'success',
            })
          } else if (JZGdata.JZGState === '2') {
            let JZGmsg = ``
            JZGdata.data.rejectReasons.forEach((item, index) => {
              JZGmsg += `<br/>${index}.${item.itemDes}---${item.reason}`
            })
            notify.errro({
              title: '消息',
              dangerouslyUseHTMLString: true,
              message: `您的订单${JZGdata.data.orderNum}精真估查询被退回：${JZGmsg}`,
              duration: 0,
            })
          } else if (JZGdata.JZGState === '3') {
            notify({
              title: '消息',
              message: `您的订单${JZGdata.data.orderNum}精真估查询被拒评`,
              duration: 0,
              type: 'warning',
            })
          }
        }
      })
    }
    window.onbeforeunload = function (ev) {
      websocket.close()
    }
  },
  mounted() {},
}
</script>
