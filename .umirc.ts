import { defineConfig } from 'umi';
// import "./src/global"
export default defineConfig({
  nodeModulesTransform: {
    type: 'none',
  },
  routes: [
    { path: '/', redirect:'/layout/home'},
    {
      path:"/layout",component:'@/pages/LayOut/index',
      routes:[
        {
          path:'/layout/home',
          name:"首页",
          component:'@/pages/LayOut/Home/index',
        }, 
        {
          path:'/layout/my',
          name:"我的",
          component:'@/pages/LayOut/My/index',
          routes:[
            {
              path:'/layout/my/CreateVote',
             
              component:'@/pages/LayOut/My/CreateVote/index',
            }, 
          ]
        }, 
      ]
    },
     {path:"/Registry",component:'@/pages/Registry/index'},
     {path: '/login', component: '@/pages/Login/index' },
     {path:"/newVoid", titls:"创建单选投票",component:'@/pages/newVoid/index'},
     { component: '@/pages/404' },
  ],
  proxy: {
    '/api': {
      target: 'http://49.232.77.197:8888',
      pathRewrite: { '^/api': '' },
      changeOrigin: true
    }
  },
  

  
});
