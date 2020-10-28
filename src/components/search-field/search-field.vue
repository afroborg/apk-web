<template>
  <div class="search-field__wrapper">
    <form @submit="submit" class="search-field">
      <input type="text" v-model="search" placeholder="Sök" />
      <div class="search__btn" @click="submit"><i class="fas fa-search" /></div>
    </form>
  </div>
</template>

<script lang="ts" src="./search-field.ts"></script>
<style lang="scss" src="./search-field.scss"></style>