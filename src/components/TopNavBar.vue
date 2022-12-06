<template>
  <el-menu
    class="el-menu-demo"
    mode="horizontal"
    :ellipsis="false"
    background-color="#545c64"
    text-color="#fff"
    active-text-color="#ffd04b"
  >
  <el-menu-item index="0">
    <h2>后台管理系统</h2>
  </el-menu-item>
  <div class="flex-grow" />
  <span style="line-height: 58px; margin-right: 10px;">
    <el-popconfirm
      title="确定要退出吗？"
      confirm-button-text="退出"
      cancel-button-text="取消"
      @confirm="handleExit"
    >
      <template #reference>
        <el-button type="primary" link>
          退出登录
        </el-button>
      </template>
    </el-popconfirm>
  </span>
  </el-menu>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import router from '@/router'; // 与useRouter的区别

export default defineComponent({
  setup() {
    const handleExit = () => {
      localStorage.removeItem('token')
      router.push('login')
    }
    return {
      handleExit
    }
  }
})
</script>

<style scoped>
  .flex-grow {
    flex-grow: 1;
  }
</style>