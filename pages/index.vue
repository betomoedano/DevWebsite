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
    <div class="flex "> <!-- Profile -->
      <div  class=" -sm:mt-0 flex max-w-screen-xl mx-auto items-center -sm:w-full -sm:flex-col  rounded-5xl my-20  -sm:mx-5 -sm:rounded-xl -sm:my-10 " >
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
            <h1 class=" text-5xl -sm:text-5xl text-center mb-3 font-semibold col-span-2 ">Skills</h1>

            <div class= " shadow-2xl  rounded-lg py-7 -sm:py-0 px-20 -sm:p-3 -sm:m-3 -md:col-span-2 "><!-- Unity -->
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
      <div class="flex -sm:p-1 px-40 "> <!-- Rockets X -->
          <h1 class=" text-3xl -sm:text-2xl -sm:pl-4 text-left mb-5 font-semibold mr-10 pt-3">Rockets X</h1>
          <div class="rocketsIcon w-12 h-12  bg-cover bg-no-repeat bg-center shadow-2xl "></div>
      </div>
      <div class="screen1 w-680px h-329px -sm:w-346px -sm:h-167px -sm:mx-auto bg-cover bg-no-repeat bg-center mx-auto mt-5"></div>
      <p class="-sm:leading-tight leading-tight text-center dark:text-gray-400 px-100 -sm:px-2 pt-4 -sm:text-sm">
        <span class="font-semibold dark:text-gray-200"> Rockets X </span>  is a cassual fun game with a friendly UI
        it has  many features like;
        Leaderboards, Achievements, In game currency, In-App Purchasses, Adds
      </p>
      <div class="screen2 w-680px h-329px -sm:w-346px -sm:h-167px -sm:mx-auto bg-cover bg-no-repeat bg-center mx-auto mt-5 mb-20 -sm:mb-18"></div>

      <div class="flex -sm:p-1 px-40 "><!-- Souls -->
          <h1 class=" text-3xl -sm:text-2xl -sm:pl-4 text-left mb-5 font-semibold mr-10 -sm:mr-3 pt-3">Souls <span class="text-sm">(coming soon...)</span></h1>
          <svg class="fill-current"
          width="57" 
          height="57" 
          viewBox="0 0 57 57" 
          xmlns="http://www.w3.org/2000/svg">
          <path d="M52.6102 4.37554C49.5069 1.30208 45.3294 0.585935 39.5704 0.585935H17.3699C11.7004 0.585935 7.46321 1.30208 4.38975 4.37554C1.3163 7.449 0.629989 11.6265 0.629989 17.3258V39.5264C0.629989 45.3152 1.28646 49.4629 4.38975 52.5363C7.49305 55.6098 11.6706 56.326 17.4296 56.326H39.5704C45.3294 56.326 49.5368 55.6098 52.6102 52.5363C55.6837 49.4629 56.37 45.3152 56.37 39.5264V17.3855C56.37 11.5967 55.6837 7.449 52.6102 4.37554Z" />
          </svg>
      </div>
      <div class="grid grid-cols-2 gap-x-0"><!-- Souls screens container -->
        <div class="-sm:col-span-2 ml-50 -sm:ml-0 ">
          <div class=" row-span-1 screen4 h-680px w-329px -sm:h-600px -sm:w-289px -sm:mx-auto bg-cover bg-no-repeat bg-center mx-auto mt-5"></div>
          <p class="-sm:leading-tight leading-tight -sm:col-span-2 row-span-1 -sm:mx-3 text-center px-5 dark:text-gray-400 -sm:px-2 pt-4 -sm:text-sm">
            <span class=" font-semibold dark:text-gray-200">Souls </span> 
            Souls is the cuurent proyect that I am working on rigth now, as well as Rockets X, Souls is going to have features like;  
            Leaderboards, Achievements, In game currency, In-App Purchasses, Adds
          </p>
        </div>

        <div class="-sm:col-span-2 mr-50 -sm:mr-0 ">
          <div class="-sm:col-span-2 row-span-2 col-span-1 screen3 h-680px w-329px -sm:h-600px -sm:w-289px -sm:mx-auto bg-cover bg-no-repeat bg-center mx-auto mt-5 "></div>
          <p class="-sm:leading-tight leading-tight -sm:col-span-2 text-center dark:text-gray-400 mx-5 -sm:mx-3 -sm:px-2 pt-4 -sm:text-sm">
            <span class="font-semibold dark:text-gray-200">Souls </span>
            going to  be a casual fun game, with more than 50 levels, you could make 
            challenges and get in game curency that you can change for skins.
          </p>
        </div>
      </div>
    </div>

    <div class="mt-20"> <!-- Contact -->
      <h1 class=" text-5xl -sm:text-5xl text-center mb-5 font-semibold  ">Contact</h1>
      <div class="grid grid-cols-3 gap-3 -sm:grid-cols-1" > <!-- Grid -->
        <div class="h-30 w-50  mx-auto ">
          <svg class="fill-current mx-auto mt-3" width="52" height="52" viewBox="0 0 52 52" xmlns="http://www.w3.org/2000/svg">
            <path d="M5.20779 15.2983L26 25.6931L46.7922 15.2983C46.7152 13.9735 46.1346 12.7282 45.1693 11.8175C44.204 10.9068 42.9271 10.3997 41.6 10.3999H10.4C9.07291 10.3997 7.79596 10.9068 6.83066 11.8175C5.86536 12.7282 5.28476 13.9735 5.20779 15.2983Z" fill=""/>
            <path d="M46.8 21.1069L26 31.5069L5.19998 21.1069V36.4001C5.19998 37.7793 5.74784 39.1019 6.72303 40.0771C7.69822 41.0523 9.02086 41.6001 10.4 41.6001H41.6C42.9791 41.6001 44.3018 41.0523 45.2769 40.0771C46.2521 39.1019 46.8 37.7793 46.8 36.4001V21.1069Z" fill=""/>
          </svg>
        <h1 class="font-semibold mt-3">betomoedano@outlook.com</h1>
        </div>

        <div class="h-30 w-50  mx-auto ">
          <svg class="w-10 h-10 mx-auto mt-3" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z"></path>
          </svg>
        <h1 class="font-semibold mt-3 text-center">+1 (423) 994 59 60</h1>
        </div>

        <div class="h-30 w-50  mx-auto ">
          <svg class="w-10 h-10 mx-auto mt-3" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path>
          </svg>
          <h1 class="font-semibold mt-3 text-center">Chattanooga Tennessee</h1>
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

.screen3{
  background-image: url("./static/screen3.png")
}

.screen4{
  background-image: url("./static/screen4.png")
}
</style>