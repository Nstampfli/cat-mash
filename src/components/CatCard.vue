<template>
    <div class="cat-card-container" @click="$emit('vote')">
        <img :src="cat.url" :alt="'cat_img'" />
    </div>
</template>

<script>
export default {
    name: 'CatCard',
    props: {
        cat: {
            type: Object,
            required: true
        },
    }
}
</script>

<style scoped>
.cat-card-container{
    width: 320px;
    position: relative;
    transition: transform 4s ease-in;
    overflow: hidden;
    cursor: pointer;
}

img{
    width: 320px;
    transition: transform 1s ease-in;
}

img:hover{
    transform: scale(1.1);
}

.cat-card-container:before {
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left:0;
    content: "Vote me!";
    transform:translateY(-100%);
    font-size: 30px;
    font-weight: bold;
    color:#F5F5F5;
    display: block;
    background-color: rgba(188, 143, 143, 0.137);
    z-index: 1;
    display:flex;
    justify-content: center;
    align-items: center;
    transition: transform .4s ease-in;
    border:4px solid #2B59C3;
    justify-content: center;
    box-sizing: border-box;
}

.cat-card-container:after {
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left:0;
    content: "Vote me!";
    transform:translateY(100%);
    font-size: 30px;
    font-weight: bold;
    color:#F5F5F5;
    display: block;
    background-color: rgba(188, 143, 143, 0.137);
    z-index: 1;
    display:flex;
    justify-content: center;
    align-items: center;
    transition: transform .4s ease-in;
    border:4px solid #2B59C3;
    justify-content: center;
    box-sizing: border-box;
}
 .cat-card-container:hover::before{
    transform: translateY(0%); 
}
.cat-card-container:hover::after{
    transform: translateY(0%); 
}
</style>