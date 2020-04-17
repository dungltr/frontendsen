# frontendsen
Make sure that your system is already install:
+ npm
+ nodejs
+ node

Install vuejs
+sudo npm install --global vue-cli

Install frontendsen
+ cd .. // to go to the parent folder of frontendsen
+ vue init webpack frontend

Following these steps:

+ Project name frontendsen
+ Project description A Vue.js project
+ Author LE Trung Dung <trung-dung.le@irisa.fr>
+ Vue build standalone
+ Install vue-router? Yes
+ Use ESLint to lint your code? Yes
+ Pick an ESLint preset Standard
+ Set up unit tests Yes
+ Pick a test runner karma
+ Setup e2e tests with Nightwatch? Yes
+ Should we run `npm install` for you after the project has been created? (recommended) (Use arrow keys)
❯ Yes, use NPM 

Go in frontendsen folder and install some libraries:
cd frontendsen
npm install --save axios vue-axios vuex bootstrap-vue

Edit configuration of the project:

+ nano config/index.js

++ Replace

index: path.resolve(__dirname, '../dist/index.html'),

assetsRoot: path.resolve(__dirname, '../dist'),

With

index: path.resolve(__dirname, '../target/dist/index.html'),

assetsRoot: path.resolve(__dirname, '../target/dist'),

++ edit 

 proxyTable: {
 
      '/api': {
      
      target: 'http://localhost:8098',
      
      changeOrigin: true
      
      }
      
    },

Edit main.js

+ nano src/main.js

+ these lines:

  import BootstrapVue from 'bootstrap-vue'
  import 'bootstrap/dist/css/bootstrap.css'
  import 'bootstrap-vue/dist/bootstrap-vue.css'
  Vue.config.productionTip = false
  Vue.use(BootstrapVue)
  
Finally, run frontend by terminal:

+ npm run dev

That all, open chrome browser and access to localhost:8080
