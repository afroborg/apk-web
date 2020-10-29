<template>
  <div class="home-page">
    <!-- <search-field @search="search" /> -->
    <dropdown
      :categories="categories"
      :selected-categories="selectedCategories"
      @category-toggle="toggleCategory"
    />
    <loader v-if="isLoading" />
    <alcohol-list v-else :alcohols="alcohols" />
  </div>
</template>

<script lang="ts" src="./home-page.ts"></script>
<style lang="scss" src="./home-page.scss"></style>