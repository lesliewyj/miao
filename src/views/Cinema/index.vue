<template>
    <div id="main">
        <Header title="喵喵影院"/>

        <div id="content">
            <div class="cinema_menu">
				<router-link tag="div" to="/cinema/allcity" class="city_switch">
					全城 <i class="iconfont icon-lower-triangle"></i>
				</router-link>
				<router-link  tag="div" to="/cinema/cinemaList" class="brand_swtich">
					品牌 <i class="iconfont icon-lower-triangle"></i>
				</router-link>
				<router-link tag="div" to="/cinema/specally"  class="feature_switch">
					特色 <i class="iconfont icon-lower-triangle">
                    </i>
				</router-link>
			</div>

            <!-- <CinemaList />  -->

             <!-- 二级路由渲染 -->
            <keep-alive>
                <router-view />
            </keep-alive>
        </div> 

        <TabBar/>
    </div>

</template>

<script>

import Header from '@/components/Header';
import TabBar from '@/components/TabBar';

// 影院上面三个全城---那里除了可以做成二级路由之外，也可以直接用类似
//Heaer,TabBar那样直接引入组件使用，渲染出来就行了：
//首先import,在下面写入CinemaList然后在需要的位置写<CinemaList />即可
// import CinemaList from '@/components/CinemaList';

export default {
    name : 'Cinema',
    components:{
        Header,
        TabBar,
        //CinemaList
    }
}
</script>

<style scoped>
#content .cinema_menu{ width: 100%; height: 45px; border-bottom:1px solid #e6e6e6; display: flex; justify-content:space-around; align-items:center; background:white;}

</style>
