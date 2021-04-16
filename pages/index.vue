<template>
  <div id="appContainer" class="w-full h-screen">
      <header class="flex justify-end w-full">
        <div class="flex w-3/5 justify-between items-center -sm:w-full">
          <Logo class="-sm:hidden"></Logo> 
          <div class="menu-item dark:text-gray-50"><a href="#">Hello!</a></div>
          <div class="menu-item dark:text-gray-50"><a href="#">Resume</a></div>
          <div class="menu-item dark:text-gray-50"><a href="#">Portafolio</a></div>
          <div class="menu-item dark:text-gray-50"><a href="#">Contact</a></div>    
          <switch-mode/> 
        </div>
      </header>
      <div class="flex">
      <div class=" flex max-w-screen-xl mx-auto items-center -sm:w-full -sm:flex-col">
          <div class=" h-80 flex items-center -sm:h-50">
            <div class="picture  w-65 h-65 bg-cover bg-no-repeat bg-center rounded-full -sm:w-30 -sm:h-30 border-5 border-gray-900 dark:border-gray-50 "></div>
          </div>
          <div class="profile w-full ml-10 -sm:m-0 ">
            <h1 class="font-semibold font-sans text-5xl -sm:text-4xl text-center mb-5 ">
              Alberto Moedano
            </h1>
                <p class=" w-80 mx-auto -sm:w-full mb-5">
                    I'm a passionate game developer who likes
                    to spend hours making fun games to play,
                    fast learner, hard worker, problem-solving,
                    self-starter with a positive attitude.                
                </p>
            <button class="px-4 py-1 flex items-center rounded-full border-2 border-myColor-600 dark:border-gray-50">
              <a href="#">Download Resume</a>
            </button>
          </div>
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
.picture{
  background-image: url('./static/my.png') 
}
</style>