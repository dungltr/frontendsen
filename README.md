# frontendsen
sudo npm install --global vue-cli
vue init webpack frontend

? Project name frontend
? Project description A Vue.js project
? Author LE Trung Dung <trung-dung.le@irisa.fr>
? Vue build standalone
? Install vue-router? Yes
? Use ESLint to lint your code? Yes
? Pick an ESLint preset Standard
? Set up unit tests Yes
? Pick a test runner karma
? Setup e2e tests with Nightwatch? Yes
? Should we run `npm install` for you after the project has been created? (recommended) (Use arrow keys)
❯ Yes, use NPM 
  Yes, use Yarn 
  No, I will handle that myself 

cd frontend
npm install --save axios vue-axios vuex bootstrap-vue

edit frontend/config/index.js

replace
index: path.resolve(__dirname, '../dist/index.html'),
assetsRoot: path.resolve(__dirname, '../dist'),
with

index: path.resolve(__dirname, '../target/dist/index.html'),
assetsRoot: path.resolve(__dirname, '../target/dist'),

edit 
 proxyTable: {
      '/api': {
      target: 'http://localhost:8098',
      changeOrigin: true
      }
    },

edit frontend/main.js
import BootstrapVue from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
Vue.config.productionTip = false
Vue.use(BootstrapVue)

npm run dev


