<template>
  <footer class="border-t border-gray-200 dark:border-gray-800">
    <div class="mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl py-8 lg:py-16">
        <div class="grid grid-cols-2 xl:w-2/3 gap-4">
          <div>
            <p class="font-semibold">Internal</p>
            <ul role="list" class="mt-6 space-y-4">
              <li>
                <NuxtLink
                  class="text-sm text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white"
                  to="/about"
                  >About</NuxtLink
                >
              </li>
              <li>
                <NuxtLink
                  class="text-sm text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white"
                  to="/posts"
                  >Posts</NuxtLink
                >
              </li>
            </ul>
          </div>
          <div>
            <p class="font-semibold">External</p>
            <ul role="list" class="mt-6 space-y-4">
              <li>
                <NuxtLink
                  class="text-sm text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white"
                  to="https://hintlab.polimi.it/"
                  target="_blank"
                  rel="noopener"
                  >HINT Lab</NuxtLink
                >
              </li>
              <li>
                <NuxtLink
                  class="text-sm text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white"
                  to="https://github.com/mMichele03/triple-a-double-l"
                  target="_blank"
                  rel="noopener"
                  >GitHub</NuxtLink
                >
              </li>
            </ul>
          </div>
        </div>
    </div>
  </footer>
</template>
