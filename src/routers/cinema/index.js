export default {
    path : '/cinema',
    component : () => import('@/views/Cinema'),
    children:[
        {
            path:'allcity',
            component:()=>import('@/components/AllCity'),
        },
        {
            path:'cinemaList',
            component:()=>import('@/components/CinemaList'),
        },
        {
            path:'specally',
            component:()=>import('@/components/Specally'),
        },
        
        {
            path:'/cinema',
            redirect:'/cinema/cinemaList'
          }
    ]
}