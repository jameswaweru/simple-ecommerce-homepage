<template>
<div class="border-2 rounded-lg min-h-screen max-w-md mx-auto  flex flex-col overflow-hidden">
  <div class="relative rounded-lg">
    <div class="fixed p-3 border-b-2 left-0 right-0 max-w-md mx-auto bg-opacity-100 bg-white border-2 rounded-t-lg shadow">
      <div class="flex  justify-start items-center space-x-7">
      <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7" />
      </svg>
      <p class="text-sm">Activate App</p>
      <div></div>
    </div>
    </div>
  </div>

    <div class="flex flex-col mt-12 p-5">
        <div class="border border-gray-300 p-5 rounded flex flex-row justify-between">
            <div class="flex items-center">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                 <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
                </svg>
                <p>0726765977</p>
            </div>
            <p class="text-blue-700 font-semibold">Change</p>
        </div>

        <div class="border border-gray-300 p-5 rounded flex flex-col mt-10 items-center ">
      <p class="font-semibold text-2xl tracking-tighter">Confirm it's you</p>
      <p class="text-blue-700 tracking-tighter text-sm">Enter the code sent to your phone</p>
      <div class="flex flex-row mt-4 space-x-2">
        <input type="text" class="border w-8 h-8 border-gray-600 rounded-md focus:border-blue-700 text-center">
        <input type="text" class="border w-8 h-8 border-gray-600 rounded-md focus:border-blue-700 text-center">
        <input type="text" class="border w-8 h-8 border-gray-600 rounded-md focus:border-blue-700 text-center">
        <input type="text" class="border w-8 h-8 border-gray-600 rounded-md focus:border-blue-700 text-center">
      </div>
      <div class="mt-6">
          <router-link :to="{ name: 'Home' }">
            <button class="border w-72 p-2 rounded-md shadow-md border-blue-700">
              Submit
            </button>
          </router-link>
       
      </div>
    </div>



    </div>



</div>
</template>