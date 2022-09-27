<template>
  <div class="home">
    <CatCard :cat="cats[leftCatIndex]" @vote="addVote(leftCatIndex,rightCatIndex)"/>
    <CatCard :cat="cats[rightCatIndex]" @vote="addVote(rightCatIndex,leftCatIndex)"/>
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

  data: function() {
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
