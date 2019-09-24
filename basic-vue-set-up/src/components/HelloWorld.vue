<template>
    <div class="container home">
      <div class="row">
        <div class="col-12">
          <h1>{{ msg }}</h1>
        </div>
       </div>
      <div class="row">
        <div class="col-12"></div>  
          <div class="col-12">
            <p>
              Add here static contents! If you have something which is dynamic then add it in the router view
              Now we have installed bootstrap.
              Let's see how we can import it in our project.
              Just go to the main.js, import the  bootstrap module,
              then import the bootstrap.css from ditributable file path.
              lets build a simple  header for hello world website
              Lets style the navbar.
            </p>
            <h3>Play with dynamic content update</h3>
            <p>
               Now lets add some dynamic content. We will implement something like, page will be updating as we click on different link in the navigation bar.  So when user is clicked on the home link it will show this content.
               Just  add another link in the menu, say about us.
            </p>

          </div>  
      </div>
        
    </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'Hello world! Let vuejs color your world'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
