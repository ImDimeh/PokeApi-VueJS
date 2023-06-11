<template>
  <div class="about">
    <h1>This is an about page</h1>
  </div>
</template>

<style>
@media (min-width: 1024px) {
  .about {
    min-height: 100vh;
    display: flex;
    align-items: center;
    background-color: black;
  }
}
</style>
<script>

export default {
  name: 'AboutView',

  
  data () {
    return {
      isOpen: false,
      type_list: []
    }
      
  },


  


    methods: {
      getStoreList() {
        return this.$store.state.firstTypeList
      },
    
    },
  
  async created() { 
    console.log('created')
   
    
    
  
  },

  mounted() {
    console.log('mounted')
    console.log(this.$store)
  },
}


</script>
