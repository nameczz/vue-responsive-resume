import Vue from 'vue'
import Router from 'vue-router'
// import Hello from '@/components/Hello'

Vue.use(Router)
let home = '';
// 判断手机还是电脑
if (/Android|webOS|iPhone|iPod|iPad/i.test(navigator.userAgent)) {
    home = 'home'
} else {
    home = 'pchome'
}
export default new Router({
    routes: [{
            path: '/',
            name: 'home',
            component: resolve => require(['pages/' + home], resolve),
            children: [{
                    path: '/resume',
                    name: 'resume',
                    component: resolve => require(['pages/resume/resume'], resolve)
                },
                {
                    path: '/demo',
                    name: 'demo',
                    component: resolve => require(['pages/demo/demo'], resolve)
                },
                {
                    path: '/game',
                    name: 'game',
                    component: resolve => require(['pages/game/game'], resolve)
                },
                {
                    path: '/elma',
                    name: 'elma',
                    component: resolve => require(['pages/elma/elma'], resolve)
                },
                {
                    path: '',
                    name: 'personal',
                    component: resolve => require(['pages/personal/personal'], resolve)
                }
            ]
        },

    ]
})