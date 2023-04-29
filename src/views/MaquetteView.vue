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
    <div class="main_infos">

      <div class="size_weight">
        <a> <strong>Taille</strong> : 90cm</a><br>
        <a> <strong>Poids</strong>  :  25kg</a>
        
      </div>
      
      <img v-bind:src="'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/136.png'">
      <div>
        <div>
          <img v-bind:src="'https://www.pokepedia.fr/images/7/76/Ic%C3%B4ne_Type_Feu_EV.png'" alt="">
          
        </div>
        <a> Bio</a><br>
        <a> Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi, beatae corporis et soluta
           repudiandae earum eum molestias ipsum laudantium ex, blanditiis ducimus incidunt alias rem
            expedita nihil doloremque veniam assumenda quibusdam, magnam accusamus necessitatibus nemo a
            d totam. Aliquam natus exercitationem illo fugiat dolorem harum quam veniam
          </a>
      </div>
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
strong{
  font-weight: bold;
}
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
section.main_content{
  background-color: #00000020;
  width: 90vw;
  height: 60vh;

  div.main_infos{
    height: 70%;
    widows: 100%;
    background-color: transparent;
    z-index: 2;

    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;

    .size_weight  {
      
      width: 25%;
      margin-top: 20%;
      margin-right: 70px;
      margin-left: 20px;
      a{
        
      color: white;
      font-size: 15px;
 
      }
      
      
      
    }
  }
  .background-name{
    // je position mon background name
    position: absolute;
    top: 30%;
    left: 50%;
    transform: translate(-50%, -50%);

   color: #8A0917;
   font-weight: bold;
   font-size: 140px;
   text-align: center;
   letter-spacing: 10px;
   z-index: 1;
  }
}

</style>