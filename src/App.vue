<script setup>
import { RouterLink, RouterView } from 'vue-router'
import NavBarVue from './components/NavBarVue.vue'

  
</script>

<template>
  <div id="app">
      <NavBarVue/>
    <router-view/>
  </div>
</template>

<script>

export default {
  name: 'App',
  components: {
    NavBarVue
  }
}


//   methods: {
//     async GetAllTypes() {
//       const response = await fetch('https://pokeapi.co/api/v2/type/')
//       const data = await response.json()

//       return data.results
//     },
//   },
//   async created() { 
//     const data = await this.GetAllTypes()
//     console.log(data)
//   }
// }
</script>

<style lang="scss">

:root{
  box-sizing: border-box;
  --main-bg-color: #012A4A;
  --light-blue: #A9D6E5;
  --nav-dark-blue : #2C7DA0;
  --color-text : #2A6F97;
  --blue-button:#01497C;
  --white-blue:#A9D6E5;
  --light-blue-2: #89C2D9 ;
  --blue-button: #2A6F97;
  --blue : #013A63;
  --nav-color : #436ef0;
  --nav-background : #83c730;
}
body {
  background-color: var(--main-bg-color);
}

nav {
  margin-top: 0;

  width: 100%;

  background-color: var(--nav-background);
  display: flex;
  flex-direction: row;

  justify-content: space-around;
  align-items: center;

  a {
    font-weight: bold;
    font-size: 1.5rem;
    color: var(--nav-color);
    &.router-link-exact-active {
      color: var(--light-blue);
    }
  }
}
</style>


