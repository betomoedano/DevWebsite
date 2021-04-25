<template>
  <div id="appContainer" class="w-full h-screen bg-black dark:bg-white">
    <header class="flex justify-end w-full text-gray-50  dark:text-gray-900  " > <!-- Header -->
      <div class="flex w-3/5 justify-between items-center -sm:w-full">
        <Logo class="-sm:hidden"></Logo>
        <div class="menu-item dark:text-gray-900 -sm:hidden"><a href="#">Hello!</a></div>
        <div class="menu-item dark:text-gray-900 -sm:hidden"><a href="#">Resume</a></div>
        <div class="menu-item dark:text-gray-900 -sm:hidden"><a href="#">Portafolio</a></div>
        <div class="menu-item dark:text-gray-900 -sm:hidden"><a href="#">Contact</a></div>
        <switch-mode class="menu-item p-2" />
      </div>
    </header>
    <div class="flex"> <!-- Profile -->
      <div  class="flex max-w-screen-xl mx-auto items-center -sm:w-full -sm:flex-col bg-white rounded-5xl my-20  -sm:mx-5 -sm:rounded-xl -sm:my-10 " >
        <div class="h-80 flex items-center -sm:h-50">
          <div class="picture w-65 h-65 bg-cover bg-no-repeat bg-center rounded-full -sm:w-30 -sm:h-30 ml-15 -sm:object-center -sm:ml-0"></div>
        </div>
        <div class="profile w-full ml-10 mr-15 -sm:m-0">
          <h1 class="font-semibold font-sans text-5xl -sm:text-2xl text-center mb-5 dark:text-gray-900" >
            Alberto Moedano
          </h1>
          <p class="w-80 mb-5 -sm:w-full -sm:text-center -sm:px-5 dark:text-gray-900">
            I'm a passionate game developer who likes to spend hours making fun
            games to play, fast learner, hard worker, problem-solving,
            self-starter with a positive attitude.
          </p>
          <div class=" -sm:px-10 -sm:mb-8">         
            <button class="px-4 py-1 flex items-center rounded-full border-2 border-myColor-600 dark:border-gray-300 dark:text-gray-900" >
              <a href="#">Download Resume</a>
            </button>
          </div>
 
        </div>
      </div>
    </div>
    <div class = ""><!-- Skills -->
        <div class = "? grid grid-cols-2 gap-4 bg-white rounded-5xl mx-auto"><!-- Container -->
            <h1 class=" text-5xl -sm:text-2xl text-center mb-5 text-gray-900 font-semibold col-span-2">Skills</h1>
            <div class= "bg-gray-50 ?"><!-- Unity -->
              <h1 class=" text-4xl text-center -sm:text-2xl mb-5 text-gray-900 font-semibold ">Unity</h1>
              <p class="text-center">
                I have been using unity since I was in college to make school proyects and a couple of personal games. 
                unity is my favorite game engine.
              </p>
              <div class="unityIcon w-20 h-20 bg-center mx-auto"> <!--  Unity icon --> </div>
            </div>

            <div class= "bg-gray-50 ?"><!-- c# -->
              <h1 class=" text-4xl text-center -sm:text-2xl mb-5 text-gray-900 font-semibold ">C#</h1>
              <p class="text-center">
                the OOP language  that I am most fluent with,  I use it to make the scripts of my games and proyects.
              </p>
              <div class="cIcon w-20 h-20 bg-center mx-auto"> <!--  c# icon --> </div>
            </div>
            
        </div>
    </div>

  </div>
</template>

<script>
export default {
  computed: {
    getMode() {
      let nuxtLogo = "";
      if (this.$colorMode.preference === "light") {
        nuxtLogo = "nuxt-logo.svg";
      }
      if (this.$colorMode.preference === "dark") {
        nuxtLogo = "nuxt-logo-dark.svg";
      }
      return nuxtLogo;
    },
  },
  head: {
    title: "Home Page",
    meta: [
      {
        hid: "home",
        name: "home",
        content: "We are a studio that design and develop to the web",
      },
    ],
  },
};
</script>

<style>
.picture {
  background-image: url("./static/my.png");
}

.unityIcon {
  background-image: url("./static/unity.png")
}

.cIcon {
  background-image: url("./static/c.png")
}
</style>