<template>
    <div class="home">
        <h1> Choose which cat is the cutest </h1>
        <div class="vote-container">
            <CatCard :cat="cats[leftCatIndex]" @vote="addVote(leftCatIndex,rightCatIndex)"/>
            <span class="or-separator">OR</span>
            <CatCard :cat="cats[rightCatIndex]" @vote="addVote(rightCatIndex,leftCatIndex)"/>
        </div>
    </div>
</template>

<script>
import CatCard from '@/components/CatCard.vue'
import json from "../assets/cats.json";

export default {
    name: 'HomeView',
    components: {
        CatCard
    },

    data() {
        return {
            cats: json.images,
            leftCatIndex: null,
            rightCatIndex: null
        };
    },

    methods: {
        addVote(votedCatIndex, notVotedCatIndex) {
            let voteCats = []

            if (localStorage.cats) voteCats = JSON.parse(localStorage.getItem('cats'))

            let findVotedCatIndex = voteCats.findIndex(cat => cat.id === this.cats[votedCatIndex].id)
            let findNotVotedCatIndex = voteCats.findIndex(cat => cat.id === this.cats[notVotedCatIndex].id)

            if (findVotedCatIndex !== -1) { //if voted cat are in localStorage
                voteCats[findVotedCatIndex].vote +=1
                voteCats[findVotedCatIndex].appear +=1
            } else {
                voteCats.push(Object.assign(this.cats[votedCatIndex], {vote: 1, appear: 1}))
            }

            if (findNotVotedCatIndex !== -1) { //if not voted cat are in localStorage
                voteCats[findNotVotedCatIndex].appear +=1
            } else {
                voteCats.push(Object.assign(this.cats[notVotedCatIndex], {vote: 0, appear: 1}))
            }

            localStorage.setItem("cats", JSON.stringify(voteCats));

            this.random()
        }, 

        random() {
            this.leftCatIndex = Math.floor(Math.random() * this.cats.length);
            this.rightCatIndex = Math.floor(Math.random() * this.cats.length);

            if (this.leftCatIndex === this.rightCatIndex) this.random()
        }
    },

    created () {
        this.random();
    },
}
</script>

<style lang="scss" scoped>
.vote-container {
    padding-top: 60px;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;

    @media screen and (max-width: 800px) {
        flex-direction: column;
    }

    .or-separator {
        padding: 40px;
    }
}
</style>

