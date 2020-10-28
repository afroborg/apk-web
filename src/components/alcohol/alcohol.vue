<template>
  <div class="alcohol__wrapper">
    <div v-if="index == 0" class="alcohol__crown">
      <i class="fas fa-crown" />
    </div>
    <div
      class="alcohol"
      :class="`alcohol--${color} ${expanded ? 'alcohol--toggled' : null}`"
    >
      <div class="alcohol__header" @click="expand">
        <transition name="animate__image">
          <div v-if="expanded" class="alcohol__image">
            <img v-if="image" :src="image" :alt="productName" />
            <span v-else>No image<br />available</span>
          </div>
        </transition>
        <div class="alcohol__details">
          <div class="alcohol__name">
            {{ productName }}
          </div>
          <div class="alcohol__volume">{{ volume }}ml</div>
        </div>
        <div class="alcohol__apk">
          {{ apk.toFixed(2) }}
          <span>APK</span>
        </div>
      </div>

      <div class="alcohol__content">
        <div class="alcohol__categories">
          <div
            class="alcohol__category"
            v-for="category in categories.filter((c) => c)"
            :key="`${id}--${category}`"
          >
            {{ category }}
          </div>
        </div>
        <a
          :href="`https://www.systembolaget.se/${productNumber}`"
          target="_blank"
          class="alcohol__link"
        >
          <span>Systembolaget.se</span>
          <i class="fas fa-external-link" />
        </a>
      </div>
    </div>
  </div>
</template>

<script lang="ts" src="./alcohol.ts"></script>
<style lang="scss" src="./alcohol.scss"></style>