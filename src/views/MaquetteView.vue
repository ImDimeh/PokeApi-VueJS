<template>
<section class="poke-card">
  <div class="head">
    <div class="name-number">
      <a>#136</a>
      <a>Flareon</a>
    </div>
    <div>
      <img v-bind:src="'src/assets/logo-pokedex.png'">
    </div>
  </div>


</section>
</template>

<script>
export default {
  name: "MaquetteView"
}
</script>

<style lang="scss">
section.poke-card {
  background-color: #B22F30;
  height: 95vh;
  padding: 70px 60px;

  div.head {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
  }

  div.name-number {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: flex-start;
    padding: 0 1rem;
    a {
      font-size: 1.5rem;
      color: #fff;
    }

  }
  div img {
    width: 150px;
    height: 40px;

  }
}


</style>