<template>
  <div>
    <img
      :src="cat.url"
      :alt="cat.url"
      @click="$emit('vote')"
    />
    <span> {{ cat.id }}</span>
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
  width: 300px;
}
img:hover {
  cursor: pointer;
  opacity: 0.8;
}
</style>