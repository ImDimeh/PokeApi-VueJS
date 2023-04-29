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
  <section class="main_content">
    <h1 class="background-name"> Flareon</h1>
    <div>
      <a> taille</a>
      <a> poids</a>
    </div>
    
    <img v-bind:src="'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/136.png'">
    <div>
      <a> Bio</a>
      <a> Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi, beatae corporis et soluta
         repudiandae earum eum molestias ipsum laudantium ex, blanditiis ducimus incidunt alias rem
          expedita nihil doloremque veniam assumenda quibusdam, magnam accusamus necessitatibus nemo a
          d totam. Aliquam natus exercitationem illo fugiat dolorem harum quam veniam
        </a>
    </div>

  </section>

</section>
</template>

<script>
export default {
  name: "MaquetteView"
}
const flareon = await fetch('https://pokeapi.co/api/v2/pokemon/flareon').then(res => res.json())
console.log(flareon.sprites.front_default)


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
.background-name{
 color: #8A0917;
 font-weight: bold;
 font-size: 140px;
 text-align: center;
 letter-spacing: 10px;
}

</style>