<script setup>
import { RouterLink, RouterView } from 'vue-router'

</script>

<template>



      <nav>
        <RouterLink to="/">Liste des Pokémon</RouterLink>
        <RouterLink to="/type">TYPE</RouterLink>
        <RouterLink to="/gen">génération</RouterLink>
        <RouterLink to="/maquette">maquette de base </RouterLink>


      </nav>
    <router-view/>



</template>

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


