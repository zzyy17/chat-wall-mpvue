import App from './index'
import Vue from 'vue'

const app = new Vue( App )

app.$mount()

export default {
  config: {
    navigationBarTitleText: '首页授权',
    usingComponents: {
	   "van-button": "/modules/vant-ui/button/index"
	},
  },
}
