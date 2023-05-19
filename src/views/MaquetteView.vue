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
      
     <img  class="pokemon_sprite" v-bind:src="'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/136.png'">
      <div class="bio_type">
        <div>
          <img v-bind:src="'src/assets/Miniature_Type_Feu_GO-removebg-preview.png'" alt="">
          
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
const flareon = await fetch('https://pokeapi.co/api/v2/pokemon/ditto').then(res => res.json())
console.log(flareon.sprites.other['official-artwork'].front_default
)


</script>

<style lang="scss">
strong{
  font-weight: bold;
}
div#app{
  background-color: #B22F30;
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
      color: #fff;
    }
    a:hover{
        color: white;
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
        
      color: white;
      font-size: 15px;
 
      }
      a:hover{
        color: white;
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
      div img{
        width: 100px;
        height: 100px;
      margin: 20px 0;
      }
      a{
        color: white;
        font-size: 13px;
        font-weight: bold;
        
      }
      
      a:hover{
        color: white;
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
    font-size: 9vw;
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