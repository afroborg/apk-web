<template>
  <div class="alcohol-list">
    <alcohol
      v-for="(alcohol, i) in alcohols"
      :key="alcohol.id"
      v-bind="alcohol"
      :index="i">
    </alcohol>
  </div>
</template>

<script lang="ts" src="./alcohol-list.ts"></script>
<style lang="scss" src="./alcohol-list.scss"></style>