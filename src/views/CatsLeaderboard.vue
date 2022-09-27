<template>
    <div>
        <select v-model="leaderBoardFilterType">
            <option selected value="vote">Vote</option>
            <option value="ratio">Ratio</option>
        </select>
        <div v-for="(cat, index) in catsLeaderbord" :key="index">
            <img :src="cat.url" :alt="cat.url" />
            <p>{{ leaderDescription(cat) }}</p>
            <p>{{`# ${index + 1 }`}}</p>
        </div>
    </div>
</template>

<script>
export default {
    name: 'CatCard',
    data: function() {
        return {
            cats: [],
            leaderBoardFilterType: 'vote'
        };
    },

    methods: {
        leaderDescription(cat) {
            return `${cat.vote} / ${cat.appear} (${(cat.vote / cat.appear * 100).toFixed(1)} %)`
        }
    },

    computed: {
        catsLeaderbord() {
            const catsAppeared = this.cats.filter(cat => cat.appear > 0)
            return this.leaderBoardFilterType === 'vote' ?
            catsAppeared.sort((a, b) =>  b.vote - a.vote ) : //sort by vote 
            catsAppeared.sort((a, b) =>  (b.vote / b.appear) - (a.vote / a.appear) ) //sort by ratio (vote/appeau)
        }
    },

    mounted() {
        if (localStorage.cats) this.cats = JSON.parse(localStorage.getItem('cats'))
    }
}
</script>

<style scoped>
img {
    width: 300px;
}
</style>