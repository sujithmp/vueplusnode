import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import AboutUs from '@/components/AboutUs'

Vue.use(Router)
 console.log(Router);
export default new Router({
  routes: [
  	{
		path: '/aboutus',
		name: 'AboutUs',
		component: AboutUs
    },
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    }
    
  ]
})
