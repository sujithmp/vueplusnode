<template>
  <div id="app" >
    <nav class="navbar bg-light">
      <div class="container-fluid">
        <div class="navbar-header">
          <a class="navbar-brand" href="#">
            <!-- <img alt="Brand" src="..."> -->
            Sample Navbar
          </a>
        </div>
      </div>
    </nav>
    <div class="container">
      <div class="row">
        <div class="col-12"></div>  
        <div class="col-12">
          <p>
            Add here static contents! If you have something which is dynamic then add it in the router view
            Now we have installed bootstrap
            Let's see how we can import it in our project
            Just go to the main.js, import the  bootstrap module
            then import the bootstrap.css from ditributable file path
            lets build a simple  header for hello world website
          </p>
        </div>  

      </div>  

    </div>
    
    
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  /*text-align: center;*/
  color: #2c3e50;
  /* margin-top: 60px; */ 
}
</style>
