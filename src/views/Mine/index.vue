<template>
    <div id="main">
        <Header title="我的喵喵"/>

        <MyLogin   />

        <TabBar/>
    </div>
</template>

<script>

import Header from '@/components/Header';
import TabBar from '@/components/TabBar';
import MyLogin from '@/components/MyLogin';

export default {
    name:'Mine',
    components:{
            Header,
            TabBar,
            MyLogin
        }
}
</script>

<style>

</style>