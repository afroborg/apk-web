<template>
  <div class="dropdown__wrapper">
    <div class="dropdown" :class="{ 'dropdown--toggled': toggled }">
      <div class="dropdown__header" @click="toggle">
        <p v-if="!selectedCategories.length">Välj kategorier...</p>
        <div v-else class="dropdown__header__pills">
          <div
            v-for="item in selectedCategories"
            :key="`selected-item--${item}`"
            class="pill"
          >
            {{ item }}
          </div>
        </div>
        <i class="fas fa-angle-down" />
      </div>
      <div class="dropdown__content">
        <div
          v-for="category in categories"
          :key="category"
          class="dropdown__item"
          @click="toggleCategory(category)"
        >
          <div class="dropdown__checkbox">
            <i
              v-if="selectedCategories.includes(category)"
              class="fas fa-check"
            />
          </div>
          <p>
            {{ category }}
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" src="./dropdown.ts"></script>
<style lang="scss" src="./dropdown.scss"></style>