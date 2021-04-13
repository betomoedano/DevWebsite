<template>
  <div id="appContainer" class="w-full h-screen">
      <header class="header text-gray-800 dark:text-gray-50">
        <Logo /> <span class="mr-4"></span>
        <div class="menu-item dark:text-gray-50"><a href="#">Hello!</a></div>
        <div class="menu-item dark:text-gray-50"><a href="#">Resume</a></div>
        <div class="menu-item dark:text-gray-50"><a href="#">Portafolio</a></div>
        <div class="menu-item dark:text-gray-50"><a href="#">Contact</a></div>    
        <switch-mode w-size="10" h-size="10" />
     
        
      </header>
      <div class="flex justify-center py-20">
          <div class="picture"></div>
          <div class="profile ">
            <h1 class="font-bold text-lg">
              Alberto Moedano
            </h1>
          
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate, placeat. Omnis nesciunt eaque non ipsa dicta excepturi impedit, illo recusandae harum molestiae dolore quibusdam repellat, facilis odio praesentium ea tenetur.
                </p>
            
            <br/>
          </div>
      </div>
      
  </div>
</template>

<script>
export default {
  computed: {
    getMode() {
      let nuxtLogo = '';
      if (this.$colorMode.preference === 'light') {
        nuxtLogo = 'nuxt-logo.svg';
      }
      if (this.$colorMode.preference === 'dark') {
        nuxtLogo = 'nuxt-logo-dark.svg';
      }
      return nuxtLogo;
    }
  },
  head: {
    title: 'Home Page',
    meta: [
      {
        hid: 'home',
        name: 'home',
        content: 'We are a studio that design and develop to the web'
      }
    ]
  }
};
</script>

<style>
  .header{
    width: 100vw;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: transparent;
   
  }

  .menu-item{
    color: gray 800;
    padding: 10px 30px;
    position: relative;
    text-align: center;
    border-bottom: 3px solid transparent;
    display: flex;
    transition: .4s;
  }
  .menu-item:hover
  {
    border-bottom-color: gray;
  }

  .profile{
    margin: auto;
    padding: 30px 30px;
    height: 10cm;
    width: 15cm;
    text-align: center;
    border-width: 5px;
    border-radius: 50px;
    border-color: gray;
  }

  .picture{
    margin: auto;
    height: 300px;
    width: 300px;
    background-color: #555;
    border-radius: 50%;
  }
</style>

