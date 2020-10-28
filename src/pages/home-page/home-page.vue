<template>
  <div class="home-page">
    <!-- <search-field @search="search" /> -->
    <dropdown
      :categories="categories"
      :selected-categories="selectedCategories"
      @category-toggle="toggleCategory"
    />
    <alcohol-list :alcohols="alcohols" />
  </div>
</template>

<script lang="ts" src="./home-page.ts"></script>
<style lang="scss"></style>