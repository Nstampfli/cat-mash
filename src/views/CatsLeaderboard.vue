<template>
    <div class="cats-learderboard">
        <h1> Sort and watch the cutest cats leaderboard </h1>
        <div class="select-wrapper" v-if="catsLeaderbord.length">
            <select class="select" v-model="leaderBoardFilterType">
                <option selected value="vote">Vote</option>
                <option value="ratio">Ratio</option>
            </select>
        </div>
        <div class="cards" v-if="catsLeaderbord.length">
            <div class="card" v-for="(cat, index) in catsLeaderbord" :key="index">
                <img :src="cat.url" :alt="cat.url" />
                <p>{{ leaderDescription(cat) }}</p>
                <p>{{`# ${index + 1 }`}}</p>
            </div>
        </div>
        <p v-else>No vote, start voting to see the leaderboard :) </p>
    </div>
</template>

<script>
export default {
    name: 'CatCard',
    data() {
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

<style lang="scss" scoped>
.cats-learderboard {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 0 12px;
    .select-wrapper {
        position: relative;
        border: 1px solid black;
        width: 320px;
        &::after {
            color: black;
            content: '▾';
            margin-right: 10px;
            pointer-events: none;
            position: absolute;
            right: 10px;
            top: 7px;
            font-size: 20px;
        }
        .select {
            -moz-appearance: none;
            -webkit-appearance: none;
            background: white;
            border: none;
            border-radius: 0;
            cursor: pointer;
            padding: 12px;
            width: 100%;
            font-size: 18px;
                &:focus {
                    color: black;
                }
                &::-ms-expand {
                    display: none;
                }
        }
    }
    .cards {
        max-width: -webkit-fill-available;
        margin: 48px auto 0 auto;
        display: grid;
        gap: 1rem;
        grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
        .card {
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            border: 1px solid black;
            border-radius: 20px;
            padding: 16px;
        }
        .card:nth-child(1) {
            border: 3px solid #FFD700;
        }

        .card:nth-child(2) {
            border: 3px solid #C0C0C0;
        }

        .card:nth-child(3) {
            border: 3px solid #614e1a;
        }

        img{
            max-width: 300px;
            cursor: pointer;
            transition: all 0.3s ease;
        }
        img:hover {
            transform: scale(1.05);
        }
    }
}

</style>