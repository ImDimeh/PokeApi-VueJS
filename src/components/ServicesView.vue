
<template>
    <div class="menu-item" @click="isOpen = !isOpen" >
        <a href ='#'>
            {{ title }}
        </a>
        <svg viewBox="0 0 1030 638" width="10">
            <path d="M1017 68L541 626q-11 12-26 12t-26-12L13 68Q-3 49 6 24.5T39 0h952q24 0 33 24.5t-7 43.5z" fill="#FFF"></path>
        </svg>
        <transition name="fade" apear>
         <div class="sub-menu" v-if="isOpen">
         
            
          <div class="menu-item" v-for="(type) in type_list" :key="type.name">
            
            <a :href="'/type/' + type.name">{{ type.name }}</a>
          </div>
          
           
        </div>
        </transition>
    </div>
</template>

<script>
export default {
  name: 'ServicesView',
  props: ['title'],
  data () {
    return {
      isOpen: false,
      type_list: []
    }
      
  },
    methods: {
         
    async GetAllTypes() {
      const response = await fetch('https://pokeapi.co/api/v2/type/')
      const data = await response.json()

      return data.results
    },
  },
  async created() { 
    this.type_list = await this.GetAllTypes()
    console.log(this.type_list)
  
    }
}


</script>
<style lang="scss">

nav {
  .menu-item {
  .sub-menu {
      position: absolute;
    background: #392ba2;
    top: 100%;
    left: -219px;
    width: 100%;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
    z-index: 10;
    transform: translateX(50%);
    width: max-content;
    transition: all 0.3s ease;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    text-align: center;
    padding: 10px;
    flex-wrap: wrap;
    height: 428px;
    width: 312px;
}
  
}
  
}


.fade-enter-active, .fade-leave-active {
  transition: all 0.3s ease;
}
.fade-enter ,
.fade-leave-to {
  opacity: 0;
  transform: translateY(-10px);
}
</style>