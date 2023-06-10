<template>
    <nav id="vue">
        <div class="menu-item"><router-link to="/">Home</router-link></div>
        <div class="menu-item"><router-link to="/about">About</router-link></div>
        <div class="menu-item"><router-link to="/contacts">Contact</router-link></div>
        <Services title="liste des type" /> 
    </nav>
</template>

<script>
import Services from './ServicesView.vue'
export default {
  name: 'NavBarVue',
  components: {
    Services
  },
}
</script>
