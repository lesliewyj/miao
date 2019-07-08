module.exports ={
    devServer:{
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
