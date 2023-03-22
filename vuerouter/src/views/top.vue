<template>
  <div>
    <b-card style="font-family: Meiryo; background-color: #eeffff"
      >クレジットカードの申込</b-card
    >
    <!-- <img src="..\..\vuerouter\src\assets\img\img1.jpg" /> -->
    <div class="sampleImg" style="display: flex">
      <div
        class="sampleImg"
        @click="showCardApply()"
        v-for="card in cards"
        :key="card.id"
      >
        <b-img :src="card.image" style="width: 20vw; margin-left: 3vw" />
        <div style="margin-left: 8vw; margin-top: 5vh; cursor: pointer">
          <span style="font-family: Meiryo">{{ card.cardName }}</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  // name: "三菱UFJカード",
  data() {
    return {
      //   img: require("@/assets/img/img1.jpg"),
      cards: [
        {
          id: 1,
          cardName: "クレジットカード",
          image: require("@/assets/img/img1.jpg"),
        },
        {
          id: 2,
          cardName: "ゴールドカード",
          image: require("@/assets/img/img1.jpg"),
        },
        {
          id: 3,
          cardName: "プラチナカード",
          image: require("@/assets/img/img1.jpg"),
        },
      ],
    };
  },
  methods: {
    showCardApply() {
      this.$router.push({
        name: "ApplyCard",
      });
    },
  },
};
</script>

<style>
.sampleImg {
  margin: 20px 0px 0px 70px;
}

.sampleImg :hover img {
  transform: scale(1.1);
  transition: transform 0.6s ease;
  cursor: pointer;
}
</style>
