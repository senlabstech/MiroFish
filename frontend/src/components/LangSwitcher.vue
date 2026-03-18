<template>
  <button class="lang-switcher" @click="cycleLocale" :title="`Current: ${currentLabel}`">
    {{ currentLabel }}
  </button>
</template>

<script setup>
import { computed } from 'vue'
import { useI18n } from 'vue-i18n'
import { setLocale, getLocaleLabel, LOCALES } from '../i18n/index.js'

const { locale } = useI18n()

const currentLabel = computed(() => getLocaleLabel(locale.value))

const cycleLocale = () => {
  const currentIndex = LOCALES.indexOf(locale.value)
  const nextIndex = (currentIndex + 1) % LOCALES.length
  setLocale(LOCALES[nextIndex])
}
</script>

<style scoped>
.lang-switcher {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  min-width: 60px;
  height: 32px;
  padding: 0 12px;
  border: 1px solid #EAEAEA;
  background: transparent;
  border-radius: 4px;
  font-family: 'JetBrains Mono', monospace;
  font-size: 12px;
  font-weight: 600;
  color: #666;
  cursor: pointer;
  transition: all 0.2s;
}

.lang-switcher:hover {
  border-color: #999;
  color: #000;
  background: #F5F5F5;
}

.lang-switcher:active {
  transform: scale(0.98);
}
</style>
