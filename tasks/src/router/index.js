import Vue from "vue"
import Router from "vue-router"
// <!--thod from '../components/05-05-2022/method'
// import Tab from '../components/06-05-2022/Tab'
// import tabdata from '../components/09-05-2022/tabdata'
// import fetchdata from '../components/09-05-2022/fetchdata'
// import task1 from  '../components/task1'
// import Que1 from '../components/Que1'
// import Crud from '../components/04-05-2022/Crud'
// //import mecomponents/09-05-2022/task1.vue'
// import qq1 from '../components/10-05-2022/qq1'-->
import watchh from '../components/11-05-2022/watchh'
import equall from '../components/11-05-2022/equall'
import remoove from '../components/11-05-2022/remoove'
import dupp from '../components/11-05-2022/dupp'
import stringg from '../components/11-05-2022/stringg'
import tring from '../components/12-05-2022/tring'
import nexttick from '../components/12-05-2022/nexttick'



Vue.use(Router)

const routes=[
// {
//      path:"/",
//      name:"HelloWorld",
//      component:HelloWorld
//  },
// {
//     path:"/test",
//     name:"Que1",
//     component:Que1
// },
// {
//     path:"/Que1",
//     name:"Que1",
//     component:Que1
// },
// {
//     path:"/Crud",
//     name:"Crud",
//     component:Crud
// },
//  {
//    path:"/method",
//      name:"method",
//      component:method
//  },
// {
//     path:"/Tab",
//     name:"Tab",
//     component:Tab
// },
// {
//     path:"/tabdata",
//     name:"tabdata",
//     component:tabdata
// },
//  {
//     path:"/fetchdata",
//     name:"fetchdata",
//     component:fetchdata
//  },
// {
//     path:"/task1",
//     name:"task1",
//     component:task1
// },
// {
//     path:"/qq1",
//     name:"qq1",
//     component:qq1
// },
{
 path:"/watchh",
    name:"watchh",
    component:watchh
},
{
    path:"/equall",
    name:"equall",
    component:equall
},
{
    path:"/remoove",
    name:"remoove",
    component:remoove
},
{
    path:"/dupp",
    name:"dupp",
    component:dupp
},
{
    path:"/stringg",
    name:"stringg",
    component:stringg
},

{
    path:"/tring",
    name:"tring",
    component:tring
},

{
    path:"/next",
    name:"nxt",
    component:nexttick
},




]


let router =new Router ({routes})
export default router