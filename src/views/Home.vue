<template>
  <div class="border-2 rounded-lg min-h-screen max-w-md mx-auto  flex flex-col overflow-hidden">
  <div class="relative rounded-lg">
    <div class="fixed p-2 border-b-2 left-0 right-0 max-w-md mx-auto bg-opacity-100 bg-white border-2 rounded-t-lg">
      <div class="flex  justify-between items-center">
      <img src="https://upload.wikimedia.org/wikipedia/commons/4/4b/Allbirds_logo.png" class="h-10 w-auto" alt="">
      <div class="flex flex-row space-x-2">
        <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5.121 17.804A13.937 13.937 0 0112 16c2.5 0 4.847.655 6.879 1.804M15 10a3 3 0 11-6 0 3 3 0 016 0zm6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
        <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
        </svg>
      </div>
    </div>
    </div>
  </div>
  
  <div class="max-w-md h-48 m-3 mt-20">
    <img class="h-full w-full border rounded-lg object-cover" src="https://img.freepik.com/free-vector/online-shopping-banner-with-3d-shopping-cart-clouds-social-icons-vector-illustration_548887-100.jpg?w=1380" alt="">
  </div>
  <div class="max-w-md flex justify-center space-x-1">
    <div class="rounded-full h-2 w-2 bg-blue-600">
    </div>
    <div class="rounded-full h-2 w-2 bg-red-600">
    </div>
    <div class="rounded-full h-2 w-2 bg-blue-600">
    </div>
    <div class="rounded-full h-2 w-2 bg-blue-600">
    </div>
  </div>
  <p class="text-slate-500 m-3 ">What are you looking for today?</p>
  <div class="grid grid-cols-2 gap-3 m-4">

    <div class="h-44 rounded-xl shadow-md relative">
      <img class="h-full object-cover rounded-xl" src="https://img.freepik.com/free-psd/couple-texting-loving-message-each-other_53876-15434.jpg?w=826" alt="">
      <p class="absolute top-0 bg-black bg-opacity-10 hover:bg-opacity-50 w-full h-full rounded-xl"></p>
      <p class="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white text-2xl rounded-xl">Dating</p>
    </div>

    <router-link :to="{ name: 'Gifts' }">
    <div class="h-44 rounded-xl shadow-md relative">
      <img class="h-full object-cover rounded-xl" src="https://img.freepik.com/free-vector/festive-banner-with-new-year-merry-christmas_153074-151.jpg?w=1380" alt="">
      <p class="absolute top-0 bg-black bg-opacity-10 hover:bg-opacity-50 w-full h-full rounded-xl"></p>
      <p class="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white text-2xl rounded-xl">Gifts</p>
    </div>
    </router-link>

     

     <div class="h-44 rounded-xl shadow-md relative">
      <img class="h-full object-cover rounded-xl" src="https://img.freepik.com/free-photo/different-car-accessories-arrangement_23-2149030413.jpg?w=900" alt="">
      <p class="absolute top-0 bg-black bg-opacity-10 hover:bg-opacity-50 w-full h-full rounded-xl"></p>
      <p class="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white text-2xl rounded-xl">Spare Parts</p>
     </div>

  </div>
</div>
</template>

<script>

export default {
  name: 'Home',
  components: {
    
  }
}
</script>
