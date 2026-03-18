import { createI18n } from 'vue-i18n'
import zhCN from '../locales/zh-CN.json'
import en from '../locales/en.json'
import vi from '../locales/vi.json'

const STORAGE_KEY = 'mirofish-locale'
const SUPPORTED = ['zh-CN', 'en', 'vi']

function getInitialLocale() {
  const stored = localStorage.getItem(STORAGE_KEY)
  if (stored && SUPPORTED.includes(stored)) return stored

  const browser = navigator.language
  if (browser.startsWith('zh')) return 'zh-CN'
  if (browser.startsWith('vi')) return 'vi'
  return 'en'
}

const i18n = createI18n({
  legacy: false,  // enables Composition API / useI18n()
  locale: getInitialLocale(),
  fallbackLocale: 'zh-CN',
  messages: { 'zh-CN': zhCN, en, vi },
})

export default i18n

export function setLocale(locale) {
  if (!SUPPORTED.includes(locale)) return

  i18n.global.locale.value = locale
  localStorage.setItem(STORAGE_KEY, locale)
  document.documentElement.lang = locale
  document.title = i18n.global.getLocaleMessage(locale).meta?.title ?? document.title
}

export function getLocaleLabel(locale) {
  const labels = {
    'zh-CN': '中文',
    'en': 'EN',
    'vi': 'VI'
  }
  return labels[locale] || locale
}

export const LOCALES = SUPPORTED
