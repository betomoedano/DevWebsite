<template>
  <div id="appContainer" class="w-full h-screen">
    <header class="flex justify-end w-full" > <!-- Header -->
      <div class="flex w-3/5 justify-between items-center -sm:w-full">
        <Logo class="-sm:hidden"></Logo>
        <div class="menu-item -sm:hidden"><a href="#">Hello!</a></div>
        <div class="menu-item -sm:hidden"><a href="#">Resume</a></div>
        <div class="menu-item -sm:hidden"><a href="#">Portafolio</a></div>
        <div class="menu-item -sm:hidden"><a href="#">Contact</a></div>
        <switch-mode class="pr-12 pt-2 -sm:p-4" />
      </div>
    </header>
    <div class="flex"> <!-- Profile -->
      <div  class="flex max-w-screen-xl mx-auto items-center -sm:w-full -sm:flex-col  rounded-5xl my-20  -sm:mx-5 -sm:rounded-xl -sm:my-10 " >
        <div class="h-80 flex items-center -sm:h-50">
          <div class="picture w-65 h-65 bg-cover bg-no-repeat bg-center rounded-full -sm:w-30 -sm:h-30 ml-15 -sm:object-center -sm:ml-0"></div>
        </div>
        <div class="profile w-full ml-10 mr-15 -sm:m-0">
          <h1 class="font-semibold font-sans text-5xl -sm:text-xl text-center mb-5" >
            Alberto Moedano
          </h1>
          <p class="w-80 mb-5 -sm:w-full -sm:text-center -sm:px-5">
            I'm a passionate game developer who likes to spend hours making fun
            games to play, fast learner, hard worker, problem-solving,
            self-starter with a positive attitude.
          </p>
          <div class=" -sm:px-10 -sm:mb-8">         
            <button class="px-4 py-1 flex items-center rounded-full border-2 border-myColor-600 animate-pulse" >
              <a href="#">Download Resume</a>
            </button>
          </div>
 
        </div>
      </div>
    </div>
    <div class = ""><!-- Skills -->
        <div class = "grid grid-cols-2 gap-6  -sm:auto-cols-1 -sm:gap-y-16 -sm:p-0 -sm:m-0 rounded-5xl mx-auto mx-43 py-10 px-2 -sm:mx-5 -sm:rounded-xl -sm:my-10"><!-- Container -->
            <h1 class=" text-5xl -sm:text-5xl text-center mb-5 font-semibold col-span-2 ">Skills</h1>

            <div class= " shadow-2xl  rounded-lg py-7 px-20 -sm:p-3 -sm:m-3 -md:col-span-2 "><!-- Unity -->
              <h1 class=" text-3xl text-center -sm:text-2xl mb-5 font-semibold  ">Unity</h1>
              <p class="text-center">
                I have been using unity since I was in college to make school proyects and a couple of personal games. 
                unity is my favorite game engine.
              </p>
              <UnityLogoSvg class="w-15 h15 mx-auto mt-5"></UnityLogoSvg> <!--  Unity icon --> 
            </div>

            <div class= " shadow-2xl rounded-lg py-7 px-20 -sm:p-3 -sm:m-3 -sm:col-span-2"><!-- c# -->
              <h1 class=" text-3xl text-center -sm:text-2xl mb-5 font-semibold">C#</h1>
              <p class="text-center ">
                the OOP language  that I am most fluent with,  I use it to make the scripts of my games and proyects.                               
              </p>
              <cLogoSvg class="w-15 h15 mx-auto mt-5"> </cLogoSvg> <!--  c# icon --> 
            </div>
            
            <div class= " shadow-2xl rounded-lg py-7 px-20 -sm:p-3 -sm:m-3  -sm:col-span-2"><!-- IOS -->
              <h1 class=" text-3xl text-center -sm:text-2xl mb-5  font-semibold">IOS</h1>
              <p class="text-center ">
                As a fan of apple products, I like to develop for IOS. some of my proyects are available in the appstore.
              </p>
              <IOSLogoSvg class="w-15 h15 mx-auto mt-5"></IOSLogoSvg>
            </div>

            <div class= " shadow-2xl rounded-lg py-7 px-20 -sm:p-3 -sm:m-3  -sm:col-span-2"><!-- Android -->
              <h1 class=" text-3xl text-center -sm:text-2xl mb-5  font-semibold">Android</h1>
              <p class="text-center ">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam itaque quisquam magni. </p>
              <div class="androidIcon w-15 h-15 bg-cover bg-center mx-auto mt-5"> <!--  Android icon --> </div>
            </div>
            
            <div class= " shadow-2xl rounded-lg py-7 px-20 -sm:p-3 -sm:m-3  -sm:col-span-2"><!-- Figma -->
              <h1 class=" text-3xl text-center -sm:text-2xl mb-5  font-semibold">Figma</h1>
              <p class="text-center ">
                Since my brother introduce me to Figma, I have been amazed to the capacity and portability that it offers.</p>
              <figmaSvg class="w-15 h15 mx-auto mt-5 "></figmaSvg>
            </div>
        </div>
    </div>

    <div> <!-- Portfolio -->
      <h1 class=" text-5xl -sm:text-5xl text-center mb-5 font-semibold  ">Portfolio</h1>
      <div class="flex -sm:p-1 px-40 ">
          <h1 class=" text-3xl -sm:text-2xl -sm:pl-4 text-left mb-5 font-semibold mr-10 pt-3">Rockets X</h1>
          <div class="rocketsIcon w-15 h-15  bg-cover bg-no-repeat bg-center shadow-2xl "></div>
      </div>
      <div class="screen1 w-680px h-329px -sm:w-346px -sm:h-167px -sm:mx-auto bg-cover bg-no-repeat bg-center mx-auto mt-5"></div>
      <p class="text-center dark:text-gray-400 px-100 -sm:px-2 pt-4 -sm:text-sm">
        Rockets X is a cassual fun game with a friendly UI
        it has  many features like;
        Leaderboards, Achievements, In game currency, In-App Purchasses, Adds
      </p>
      <div class="screen2 w-680px h-329px -sm:w-346px -sm:h-167px -sm:mx-auto bg-cover bg-no-repeat bg-center mx-auto mt-5 "></div>
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

.iosIcon {
  background-image: url("./static/ios.png")
}

.androidIcon {
  background-image: url("./static/android.png")
}

.figmaIcon {
    background-image: url("./static/figma.png")
}

.rocketsIcon{
  background-image: url("./static/rocketsIcon.png")
}

.screen1{
  background-image: url("./static/screen1.png")
}

.screen2{
  background-image: url("./static/screen2.png")
}
</style>