<template>
    <div class="border-2 rounded-lg min-h-screen max-w-md mx-auto  flex flex-col overflow-hidden">
  <div class="relative rounded-lg">
    <div class="fixed p-3 border-b-2 left-0 right-0 max-w-md mx-auto bg-opacity-100 bg-white border-2 rounded-t-lg shadow">
      <div class="flex  justify-start items-center space-x-7">
      <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7" />
      </svg>
      <p class="text-sm">Gifting</p>
      <div></div>
    </div>
    </div>
  </div>

  <div class="flex flex-col mt-12">
    
    <div class="flex flex-row">
      <div class="border-b-2 p-3 w-1/2 flex justify-center">
      My Birthday
      </div>
      <div class="border-black border-b-2 p-3 w-1/2 flex justify-center">
      Others
      </div>
    </div>

    <div id="my-birthday-link-page" class="hidden flex flex-col p-3">
      <p>Your birthday is 2 days away</p>
      <p>dfdf</p>
    </div>

    <div id="my-birthday-set-but-far-from-week" class="hidden flex flex-col items-center justify-center mt-12">
      <img class="h-40 w-40 rounded-full" src="https://img.freepik.com/free-vector/realistic-bunch-flying-glossy-balloons-multicolored-filled-with-helium_1441-1751.jpg?w=740" alt="">
      <p class="font-semibold text-xl">Your birthday</p>
      <div class="flex items-center space-x-2 mt-1">
        <p class="text-sm font-normal text-gray-400">11th Feb <span>1992</span></p>
        <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
        </svg>
      </div>

      <p class="mt-2 text-gray-500 text-sm tracking-tighter">You birthday link will be accessible 30 days prior.</p>

      <div class="flex flex-col">
        <p class="mt-10 text-gray-500 text-sm tracking-normal">Learn more about birthday links? <span class="text-blue-700 font-bold">Click here</span> </p>
      </div>
    </div>


    <div id="my-birthday-not-set-container" class="flex flex-col items-center justify-center mt-12 ">
      <!-- <img class="object-cover rounded-full h-24 w-24" src="https://img.freepik.com/free-photo/delivery-concept-portrait-happy-african-american-delivery-man-red-cloth-holding-box-package-isolated-grey-studio-background-copy-space_1258-1182.jpg?w=826" alt="">
      <p class="mt-4 font-semibold">Receive Gifts</p>
      <p class="text-sm w-7/12 text-center mt-2">Friends & relatives can use your <span class="font-semibold">birthday link</span> to buy & send you gifts</p> -->
      
      <img class="object-cover rounded-full h-24 w-24 shadow-md" src="https://img.freepik.com/free-psd/online-shopping-with-laptop-mockup-template-shopping-elements_1150-38886.jpg?w=740" alt="">
      <p class="mt-4 font-semibold">Birthday Deals</p>
      <p class="text-sm w-7/12 text-center mt-2">You deserve the best on your birthday.  Set your birthday & receive amazing deals & ideas from us.</p>

      <div class="max-w-md flex justify-center space-x-1 mt-3">
        <div class="rounded-full h-2 w-2 bg-gray-600">
        </div>
        <div class="rounded-full h-2 w-2 bg-red-600">
        </div>
      </div>

    
      <div class="mt-6">
          <router-link :to="{ name: 'GiftLink' }">
            <button class="border w-72 p-2 rounded-md shadow-md border-red-700 text-gray-600 text-sm">
                Set birthday
            </button>
          </router-link>
        
      </div>

    </div>
  
  </div>
</div>
</template>