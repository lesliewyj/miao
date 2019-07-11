module.exports ={
    //设置静态资源的访问路径为文件名
    // publicPath:'/miao',
    devServer:{
        // host: "192.168.9.27",
        // port: 8080,
        // https:false,
        // open:true,
        proxy:{
            '/api':{
                target:'http://39.97.33.178',
                changeOrigin:true
            }
        }
    }
}


//下载axios库用其做真实数据的获取:cnpm i -S axios
// 处理数据接口,cmd里重启脚本架使其生效
//export default不支持使用传统的方法module.exports
