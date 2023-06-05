<script setup>

// console.log(route.params.id)
// const poke = await fetch('https://pokeapi.co/api/v2/pokemon/'+ route.params.id ).then(res => res.json())
// console.log(poke)


</script>
<template>
<section class="poke-card">
  <div class="head">
    <div class="name-number">
      <a>  # {{ this.poke.id }}</a>
      <a> {{ this.poke.name }}</a>
    </div>
    <div>
      <img v-bind:src="'src/assets/logo-pokedex.png'">
    </div>
  </div>
  <section class="main_content">
    <h1 class="background-name"> {{ this.poke.name }}</h1>
    <div class="main_infos">

      <div class="size_weight">
        <a> <strong>Taille</strong> : {{ this.poke.height }}</a><br>
        <a> <strong>Poids</strong>  :  {{ this.poke.weight }} </a>
        
      </div>
      
     <img  class="pokemon_sprite" v-bind:src="this.Image">
      <div class="bio_type">
        <div class="type-img-list">
          
          
        </div>
        <a> Bio</a><br>
        <a> {{ this.description  }}
          </a>
      </div>
    </div>

  </section>

</section>
</template>


<script>



import { useRoute } from 'vue-router'
const route = useRoute()
const pokemonColors = {
  normal: "#B8B1A9",
  fire: "#F08030",
  water: "#227EE7",
  electric: "#f5bf0b",
  grass: "#3da224",
  ice: "#77ddff",
  fighting: "#915B4A",
  poison: "#A040A0",
  ground: "#92501b",
  flying: "#4771c3",
  psychic: "#963270",
  bug: "#A8B820",
  rock: "#b0aa82",
  ghost: "#703F70",
  dragon: "#B0B3C9",
  dark: "#50413f",
  steel: "#5e9db2",
  fairy: "pink"
};
const pokemonTypeImage = {
  normal: "https://archives.bulbagarden.net/media/upload/archive/3/39/20090401225821%21NormalIC_Big.png",
  fire: "https://archives.bulbagarden.net/media/upload/thumb/a/a2/FireIC_SV.png/96px-FireIC_SV.png",
  water: "https://archives.bulbagarden.net/media/upload/thumb/d/de/WaterIC_SV.png/96px-WaterIC_SV.png",
  electric: "https://archives.bulbagarden.net/media/upload/thumb/7/77/ElectricIC_SV.png/96px-ElectricIC_SV.png",
  grass: "https://archives.bulbagarden.net/media/upload/thumb/7/7b/GrassIC_SV.png/96px-GrassIC_SV.png",
  ice: "https://archives.bulbagarden.net/media/upload/thumb/1/13/IceIC_SV.png/96px-IceIC_SV.png",
  fighting: "https://archives.bulbagarden.net/media/upload/thumb/0/0f/FightingIC_SV.png/96px-FightingIC_SV.png",
  poison: "https://archives.bulbagarden.net/media/upload/thumb/9/9d/PoisonIC_SV.png/96px-PoisonIC_SV.png",
  ground: "https://archives.bulbagarden.net/media/upload/thumb/f/f8/GroundIC_SV.png/96px-GroundIC_SV.png",
  flying: "https://archives.bulbagarden.net/media/upload/thumb/d/d7/FlyingIC_SV.png/96px-FlyingIC_SV.png",
  psychic: "https://archives.bulbagarden.net/media/upload/thumb/9/96/PsychicIC_SV.png/96px-PsychicIC_SV.png",
  bug: "https://archives.bulbagarden.net/media/upload/thumb/d/d1/BugIC_SV.png/96px-BugIC_SV.png",
  rock: "https://archives.bulbagarden.net/media/upload/thumb/3/32/RockIC_SV.png/96px-RockIC_SV.png",
  ghost: "https://archives.bulbagarden.net/media/upload/thumb/2/2c/GhostIC_SV.png/96px-GhostIC_SV.png",
  dragon: "https://archives.bulbagarden.net/media/upload/thumb/7/7f/DragonIC_SV.png/96px-DragonIC_SV.png",
  dark: "https://archives.bulbagarden.net/media/upload/thumb/3/30/DarkIC_SV.png/96px-DarkIC_SV.png",
  steel: "https://archives.bulbagarden.net/media/upload/thumb/b/b8/SteelIC_SV.png/96px-SteelIC_SV.png",
  fairy: "https://archives.bulbagarden.net/media/upload/thumb/c/c6/FairyIC_SV.png/96px-FairyIC_SV.png"
};

export default {
  name: "maquetteDynamiqueView",
  data() {
    return {
      id: null ,
      poke: null,
      description: null,
      Image: null,
      
    }
  },
  
methods: {
  async getPokemon() {
    const response = await fetch('https://pokeapi.co/api/v2/pokemon/'+ this.$route.params.id)
    const data = await response.json()
    
    return data
  },
  async getDescription() {
    const response = await fetch('https://pokeapi.co/api/v2/pokemon-species/'+ this.$route.params.id)
    const data = await response.json()
  
    
    const result = data.flavor_text_entries.filter(word => word.language.name == "en" &&  ( word.version.name == "sword" || word.version.name == "white-2"));
    console.log(result)
    return result[0].flavor_text
  },
  async gettypeImage() {
    const response = await fetch('https://pokeapi.co/api/v2/pokemon/'+ this.$route.params.id)
    const data = await response.json()
  
    console.log(data)
    
    
    return data.types
  },
  async GetbackgroundColor() {
    const response = await fetch('https://pokeapi.co/api/v2/pokemon-species/'+ this.$route.params.id)
    const data = await response.json()
  
    
    return data.color.name
  },
  
  },
  async created() {
    console.log(this.$route.params.id)
   
    this.poke = await this.getPokemon()
    this.description = await this.getDescription()
    this.Image = this.poke.sprites.other['official-artwork'].front_default
    
    const pokeCard = document.querySelector('section.poke-card')
    const color = await this.GetbackgroundColor()
    
    this.poke.types.forEach(type => {
      console.log(type.type.name)
      console.log(pokemonTypeImage[type.type.name])
      const typeImage = document.createElement('img')
      typeImage.src = pokemonTypeImage[type.type.name]
      typeImage.alt = type.type.name
      document.querySelector('.type-img-list').appendChild(typeImage)
      
    });
    console.log(color)
    pokeCard.style.backgroundColor = pokemonColors[this.poke.types[0].type.name]
    
    
   
  },


  
    
  
}





</script>

<style lang="scss">
strong{
  font-weight: bold;
}
div#app{
  //background-color: #B22F30;
}
section.poke-card {
  background-color: #B22F30;
  height: 95vh;
  padding: 70px 60px;
  width:100%;
  margin-left: auto;
  margin-right: auto;
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
      color: #000000;
    }
    a:hover{
        color: rgb(0, 0, 0);
        background-color: transparent;
        
      }
  }
  div img {
    width: 150px;
    height: 40px;
  }
}
section.main_content{
  
  width: 100%;
  height: 65vh;
  div.main_infos{
    height: 100%;
    widows: 100%;
    background-color: transparent;
    z-index: 2;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    .size_weight  {
      
      width: 25%;
      margin-top: 5%;
      
      margin-left: 20px;
      a{
        
      color: rgb(0, 0, 0);
      font-size: 30px;
 
      }
      a:hover{
        color: rgb(0, 0, 0);
        background-color: transparent;
        
      }
      
      
      
    }
    .pokemon_sprite{
      width: 60%;
      height: auto;
      
      background-repeat: no-repeat;
      background-size: cover;
      
     
      margin-top: 5%;
      
    }
    .bio_type{
      margin-left: 5%;
      width: 40%;
      
      display: flex;
      flex-direction: column;
      flex-wrap: nowrap;
      justify-content: space-around;
      align-items: center;
      text-align: center;
      
      height: 60%;
      div.type-img-list{ 
        display: flex;
        flex-direction: column;
        justify-content: space-around;
        align-items: center;
        flex-wrap: wrap;
        width: 100%;
        height: 100px;
        



        img{
        width: 100px;
        height: auto;
      margin: 10px 0;
      border: 1px solid black;
      }}
      a{
        color: rgb(0, 0, 0);
        font-size: 15px;
        font-weight: bold;
        
      }
      
      a:hover{
        color: rgb(0, 0, 0);
        background-color: transparent;
        
      }
      img{
        width: 50px;
        height: 50px;
      }
    }
  }
  .background-name{
    // je position mon background name
      position: absolute;
    
    left: 50%;
    transform: translate(-70%, -80%);
    color: #8A0917;
    font-weight: bold;
    font-size: 7.5vw;
    text-align: center;
    letter-spacing: 10px;
    z-index: 1;
  }
}

@media screen and (max-width: 768px) {
  
  section.main_content
  
  {
    .background-name {
   
    left: 55%;
    transform: translate(-70%, -80%);
    color: #8A0917;
    font-weight: bold;
    font-size: 9vw;
    text-align: center;
    letter-spacing: 10px;
    z-index: 1;
}
    div.main_infos 
    {
      .size_weight {
    width: 25%;
    margin-top: 5%;
     margin-left: 0; 
}
    .bio_type {

    div img {
      width: 70px;
      height: 70px;
      margin: 20px 0;
  }
  a {
    color: white;
    font-size: 10px;
    font-weight: bold;
}

  }

  
}}}


@media screen and (max-width: 640px) {
  section.main_content{
    height: auto;
    

    .background-name {
    left: 55%;
    transform: translate(-55%, 0%);
    
    font-weight: bold;
    font-size: 15vw;
    text-align: center;
    letter-spacing: 10px;
    z-index: 1;
}
div.main_infos {
    height: auto;
    widows: 100%;
    background-color: transparent;
    z-index: 2;
    display: flex;
    flex-direction: row;
   justify-content: space-around;
    align-items: center;
    flex-wrap: wrap;
    background-color: #B22F30;

    .bio_type{
      order: 3;
      a {
        text-align: left;
      }
    }
    .size_weight {
        width: 25%;
    margin-top: 5%;
    margin-left: 0;
    order: 2;
    
    height: 300px;
    padding-top: 25%;
   
    padding: auto;
   

}
.pokemon_sprite {
    width: 100%;
    
}
}
  
}

  section.poke-card {
    padding: 10px;

  }
}
      
</style>