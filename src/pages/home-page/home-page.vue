<template>
  <div class="home-page">
    <transition v-if="isLoading" name="loader">
      <loader />
    </transition>
    <template v-else>
      <!-- <search-field @search="search" /> -->
      <dropdown
        :categories="categories"
        :selected-categories="selectedCategories"
        @category-toggle="toggleCategory"
      />
      <alcohol-list :alcohols="alcohols" />
    </template>
  </div>
</template>

<script lang="ts" src="./home-page.ts"></script>
<style lang="scss" src="./home-page.scss"></style>