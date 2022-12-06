<template>
  <div class="login">
    <div class="form-cls">
      <el-form
        ref="ruleFormRef"
        :model="ruleForm"
        status-icon
        :rules="rules"
        label-width="82px"
      >
        <h2>后台管理系统</h2>
        <el-form-item label="用户名：" prop="username">
          <el-input v-model="ruleForm.username" type="text" autocomplete="off"></el-input>
        </el-form-item>

        <el-form-item label="密码：" prop="password">
          <el-input v-model="ruleForm.password" type="text" autocomplete="off"></el-input>
        </el-form-item>

        <el-form-item>
          <el-button class="login-btn" type="primary" @click="submitForm(ruleFormRef)">登录</el-button>
          <el-button class="login-btn" @click="resetForm()">重置</el-button>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>

<script lang="ts">
import { login } from '@/api/request';
import { LoginData } from '@/types/login';
import type { FormInstance } from 'element-plus';
import { defineComponent, reactive, ref, toRefs } from 'vue';
import { useRouter } from 'vue-router';
export default defineComponent({
  setup() {
    const data = reactive(new LoginData)

    const router = useRouter()
    const rules = {
      username: [
        {
          required: true,
          message: '请输入用户名',
          trigger: 'blur' // 触发时机在 blur 事件的回调
        },
        {
          min: 3,
          max: 5,
          message: '用户名必须在3-5个字符之间',
          trigger: 'blur'
        }
      ],
      password: [
        {
          required: true,
          message: '请输入密码',
          trigger: 'blur'
        },
        {
          min: 3,
          max: 6,
          message: '密码必须在3-5个字符之间',
          trigger: 'blur'
        }
      ]
    }
    
    const ruleFormRef = ref<FormInstance>()

    const resetForm = () => {
      data.ruleForm.username = ''
      data.ruleForm.password = ''
    }

    const submitForm = (formEl: FormInstance | undefined) => {
      if (!formEl) return
      formEl.validate((valid) => {
        if (valid) {
          login(data.ruleForm).then((res) => {
            console.log('登录结果---', res)
            localStorage.setItem('token', res.data.token)
            router.push('/')
          })
        } else {
          window.alert('login error')
          return false
        }
      })
    }

    return {
      ...toRefs(data),
      ruleFormRef,
      rules,
      resetForm,
      submitForm
    }

  }
})
</script>

<style scoped>

  .login{
    width: 100%;
    height: 100vh;
    background-image: url("../assets/bg.jpg");
  }

  .form-cls{
    padding: 50px;
    width: 400px;
    margin: 0 auto;
    background-color: white;
    position: relative;
    top:200px;
    border-radius: 4px;
  }

  .login-btn{
    width: 48%;
  }

  h2{
    text-align: center;
    margin-bottom: 20px;
  }
</style>