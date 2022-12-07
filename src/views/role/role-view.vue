<template>
  <div>
    <el-form :inline="true" class="search-form">
      <el-form-item>
        <el-button type="primary" @click="onAddRole()">
          添加角色
        </el-button>
      </el-form-item>

      <el-table :data="role_list" border style="width: 100%;">
        <el-table-column prop="roleId" label="编号" width="180"></el-table-column>
        <el-table-column prop="roleName" label="角色名称" width="180"></el-table-column>
        <el-table-column label="操作">
          <template #default="scope">
            <el-button
              link
              type="primary"
              size="small"
              @click="onChangeRole(scope.row)"
            >
              修改权限
            </el-button>
          </template>
        </el-table-column>
      </el-table>
    </el-form>
  </div>
</template>

<script lang="ts">
import { defineComponent, onMounted, reactive, toRefs } from 'vue';
import { getRoleList } from '@/api/request'
import { RolePages } from '@/types/role';
import type { IRoleWithAuth } from '@/types/role';
import { useRouter } from 'vue-router';
import { ElMessage, ElMessageBox } from 'element-plus';

export default defineComponent({
  setup () {
    const role_data = reactive(new RolePages())

    const router = useRouter()

    onMounted(() => {
      getRoleList().then(res => {
        console.log(res)
        role_data.role_list = res.data.data
      })
    })

    const onAddRole = () => {
      ElMessageBox.prompt('请输入角色名称', '添加角色', {
        confirmButtonText: '添加',
        cancelButtonText: '取消'
      }).then(({ value }) => {
        if (value) {
          role_data.role_list.push({
            roleId: role_data.role_list.length + 1,
            authority: [],
            roleName: value
          })
        }
        ElMessage({
          type: 'success',
          message: '${value}角色添加成功'
        })
      }).catch(e => {
        ElMessage({
          type: 'info',
          message: e || 'Input canceled'
        })
      })
    }

    const onChangeRole = (row: IRoleWithAuth) => {
      console.log('row--', row)
      router.push({
        name: 'AuthorityView',
        params: {
          id: row.roleId,
          authority: row.authority
        }
      })
    }

    return {
      ...toRefs(role_data),
      onAddRole,
      onChangeRole
    }
  }
})
</script>

<style>

</style>