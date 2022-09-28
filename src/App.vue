<template>
    <div id="app">
        <HeaderApp/>
        <router-view class="content-wrapper"/>
        <FooterApp/>
    </div>
</template>

<script>
import HeaderApp from '@/components/HeaderApp'
import FooterApp from '@/components/FooterApp'
export default {
    name: 'App',
    components: {
        HeaderApp,
        FooterApp
    }
}
</script>

<style lang="scss">

body {
    margin: 0;
}

#app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    min-height: 100vh;
    position: relative;
    .content-wrapper {
        padding-bottom: 60px;
    }

}

a {
    text-decoration: none;
    color: inherit;
}

nav a {
    color: #f5f5f5;
    font-weight: bold;
}

nav a:not(:last-child) {
    padding-right: 32px;
}

nav a.router-link-exact-active {
    color: #fa8638;
    transition: all 0.6s ease;
}

nav a:hover {
    color: #fa8638;
    text-decoration: underline;
    opacity: .7;
}
</style>
