<template>
    <div>
        <img :src="cat.url" :alt="'cat_img'" @click="$emit('vote')"/>
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
img {
    width: 320px;
    cursor: pointer;
    transition: all 0.3s ease;
}
img:hover {
    transform: scale(1.05);
}
</style>