<template>
    <nav class="header-app">
        <div class="logo-wrapper">
            <img src="../assets/logo.png"/>
            <router-link class="logo-name" to="/">cat mash</router-link>
        </div>
        <div>
            <router-link to="/">Vote</router-link>
            <router-link to="/leaderboard">Leaderboard</router-link>
        </div>
    </nav>
</template>

<style lang="scss" scoped>
.header-app {
    height: 9vh;
    background-color: #2B59C3;
    display: flex;
    justify-content: space-between;
    align-items: center;
    box-shadow: 0px 0px 8px rgba(0,0,0,.6);
    padding: 0 3%;

    .logo-wrapper {
        display: flex;
        justify-content: space-between;
        align-items: center;
        img {
            width: 24px;
        }

        .logo-name {
            font-weight: bold;
            font-size: 20px;
            text-transform: uppercase;
            padding-left: 8px;
            color: #F5F5F5;
        }
    }
}
</style>
