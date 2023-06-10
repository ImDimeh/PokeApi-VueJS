<template>
  <div class="container">
    

 
  <div class="wrapper"  v-for="(poke) in pokeOfType" :key="poke.name" >
    
    <img class="banner-image" src="https://images.unsplash.com/photo-1641326201918-3cafc641038e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1887&q=80" alt="">
    <h1> {{ poke.pokemon.name }}</h1>
    <p>Lorem ipsum dolor sit amet, <br/>
      consectetur adipiscing elit.</p>

      <div class="button-wrapper"> 
    
      <button class="btn fill">DETAILS</button>
    </div>
    </div>
    
      </div>
  

    
 

    
  

    
 

</template>

<script>
export default {
  name: "TypePageView",
  data() {
    return {
      type: [this.$route.params.name] ,
      URL: null ,
      pokeOfType: []
    }
  },
  methods: {

    async GetAllTypes() {
      const response = await fetch('https://pokeapi.co/api/v2/type/')
      const data = await response.json()
      
      return data.filters = data.results.filter(type => type.name === this.$route.params.name)
    },
    async GetPokemonOfType() {
      const response = await fetch(this.URL)
      const data = await response.json()
      return data.pokemon
    }
  },
  async created() {
    this.type = await this.GetAllTypes()
    this.URL = this.type[0].url
    this.pokeOfType = await this.GetPokemonOfType()
    console.log(this.pokeOfType)

    // get background image of .banner_image
    const bannerImage = document.querySelector('.banner-image')
    const img = bannerImage.style.backgroundImage 
    console.log(img)

  }
}


</script>

<style lang="scss">
.container {
  backdrop-filter: blur(16px) saturate(180%);
  -webkit-backdrop-filter: blur(16px) saturate(180%);
  background-color: rgba(17, 25, 40, 0.25);
  border-radius: 12px;
  border: 1px solid rgba(255, 255, 255, 0.125);  
  padding: 38px;  
  filter: drop-shadow(0 30px 10px rgba(0,0,0,0.125));
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content:center;
  text-align: center;
  background-color: rebeccapurple;
  flex-wrap: wrap ;
 gap: 15px;
  
  
}

.wrapper {
   width: 30%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content:center;
  text-align: center;
  margin-bottom: 15px;
}

.banner-image {
  background-image: url(https://images.unsplash.com/photo-1641326201918-3cafc641038e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1887&q=80);
  background-position: center;
  background-size: cover;
      height: 213px;
  width: 80%;
  border-radius: 12px;
  border: 1px solid rgba(255,255,255, 0.255)
}

h1{
  font-family: 'Righteous', sans-serif;
  color: rgba(255,255,255,0.98);
  text-transform: uppercase;
  font-size: 2.4rem;
}

p {
  color: #fff;
  font-family: 'Lato', sans-serif;
  text-align: center;
  font-size: 0.8rem;
  line-height: 150%;
  letter-spacing: 2px;
  text-transform: uppercase;
}

.button-wrapper{
  margin-top: 18px;
}

.btn {
  border: none;
  padding: 12px 24px;
  border-radius: 24px;
  font-size: 12px;
  font-size: 0.8rem;  
  letter-spacing: 2px;  
  cursor: pointer;
}

.btn + .btn {
  margin-left: 10px;
}

.outline {
  background: transparent;
  color: rgba(0, 212, 255, 0.9);
  border: 1px solid rgba(0, 212, 255, 0.6);
  transition: all .3s ease;
  
}

.outline:hover{
  transform: scale(1.125);
  color: rgba(255, 255, 255, 0.9);
  border-color: rgba(255, 255, 255, 0.9);
  transition: all .3s ease;  
}

.fill {
  background: rgba(0, 212, 255, 0.9);
  color: rgba(255,255,255,0.95);
  filter: drop-shadow(0);
  font-weight: bold;
  transition: all .3s ease; 
}

.fill:hover{
  transform: scale(1.125);  
  border-color: rgba(255, 255, 255, 0.9);
  filter: drop-shadow(0 10px 5px rgba(0,0,0,0.125));
  transition: all .3s ease;    
}
      
      
</style>