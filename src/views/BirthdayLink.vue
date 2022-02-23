<template>
    <div class="border-2 rounded-lg min-h-screen max-w-md mx-auto  flex flex-col overflow-hidden">
  <div class="relative rounded-lg">
    <div class="fixed p-3 border-b-2 left-0 right-0 max-w-md mx-auto bg-opacity-100 bg-white border-2 rounded-t-lg shadow">
      <div class="flex  justify-start items-center space-x-7">
      <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7" />
      </svg>
      <div class="leading-3">
        <p class="text-sm font-semibold">0726765977</p>
        <p class="text-xs">2 days to the birthday | Birthday 11th Feb</p>
      </div>
      <div></div>
    </div>
    </div>
  </div>

  <div class="flex flex-col mt-16">
    
    <div id="display-birthday-deals" class="flex flex-col">

      <div id="categories" class="p-2">

        <!-- <ul class="flex  space-x-2 overflow-x-auto hide-scroll-bar">
          <li><p class="p-2 border rounded-full tracking-tighter flex-none"><span class="ml-2 mr-2 flex-none">Vacation Deals</span></p></li>
          <li><p class="p-2 border rounded-full tracking-tighter "><span class="ml-2 mr-2 ">Party Reservation Deals</span></p></li>
          <li><p class="p-2 border rounded-full tracking-tighter"><span class="ml-2 mr-2">RoadTrip Deals</span></p></li>
          <li><p class="p-2 border rounded-full tracking-tighter"><span class="ml-2 mr-2">Flowers</span></p></li>
          <li><p class="p-2 border rounded-full tracking-tighter"><span class="ml-2 mr-2">Drinks</span></p></li>
          <li><p class="p-2 border rounded-full tracking-tighter "><span class="ml-2 mr-2">Fast Foods</span></p></li>
          <li><p class="p-2 border rounded-full tracking-tighter"><span class="ml-2 mr-2">Vacation Deals</span></p></li>
          <li><p class="p-2 border rounded-full tracking-tighter "><span class="ml-2 mr-2">Fast Foods</span></p></li>
          <li><p class="p-2 border rounded-full tracking-tighter"><span class="ml-2 mr-2">Vacation Deals</span></p></li>
          <li><p class="p-2 border rounded-full tracking-tighter "><span class="ml-2 mr-2">Fast Foods</span></p></li>
          <li><p class="p-2 border rounded-full tracking-tighter"><span class="ml-2 mr-2">Vacation Deals</span></p></li>
        </ul>  -->

        <div class="flex flex-row overflow-x-auto hide-scroll-bar space-x-2">
          <p class="flex-none rounded-full border p-2">Party Reservations</p>
          <p class="flex-none rounded-full border p-2">Order Foods</p>
          <p class="flex-none rounded-full border p-2">Drinks</p>
          <p class="flex-none rounded-full border p-2">Vacation Deals</p>
          <p class="flex-none rounded-full border p-2">Reservations</p>
          <p class="flex-none rounded-full border p-2">Flowers</p>
        </div>

        
        
        
        
        
        
      </div>

    </div>

  </div>
</div>
</template>
<style>
.hide-scroll-bar {
  -ms-overflow-style: none;
  scrollbar-width: none;
}
.hide-scroll-bar::-webkit-scrollbar {
  display: none;
}
</style>