# vue3-ts-demo

This template should help get you started developing with Vue 3 in Vite.

# trouble
## import.meta不识别
`history: createWebHistory(import.meta.env.BASE_URL)` ，不识别import.meta
—— node版本问题，更新至16x即可

## git问题
`error:02FFF036:system library:func(4095):Connection reset by peer`
原因：一开始用的vscode集成的ui推送的仓库，导致 git remote的地址是 https的

解决：更换git remote地址为git@github.com

# polyfill
## vue-router的两种传参
query 相当于 get 请求，页面跳转的时候，可以在地址栏看到请求参数
params 相当于 post 请求，参数不会再地址栏中显示