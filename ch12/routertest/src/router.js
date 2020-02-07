import Home from './components/Home'
import About from './components/About'
import Contact from './components/Contact'
import ContactByNo from './components/ContactByNo'
import NotFound from './components/NotFound'

import VueRouter from 'vue-router'

const router = new VueRouter({
    mode: 'history',
    // routes를 순서대로 탐방해서 매칭하는 결과를 리턴함
    // -> notfound는 마지막에 위치
    routes:[
        {path:'/', component:Home},
        {path:'/home', name:'home',component:Home},
        {path:'/about', name:'about',component:About},
        {path:'/contact',name:'contact', component:Contact,
            children:[
                {
                    path:':no', name:'contact_:no',component:ContactByNo,
                    // beforeEnter(to, from, next){
                    //     if(from.name === 'contact' || from.name === 'contact_:no'){
                    //         next()
                    //     }else{
                    //         next({name:from.name})
                    //     }
                    // }
                    props: true,
                },
            ]
        },
        {path:'*',component:NotFound}
        
    ]
})

export default router