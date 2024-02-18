export const useCategory = () => {
  const activeCategory = useState('active-category', (): string => getDefaultCategory())

  function resetCategory(): void {
    activeCategory.value = getDefaultCategory()
  }

  function setCategory(category: string): void {
    if (categoryExist(category)) {
      activeCategory.value = category
    }
  }

  function getDefaultCategory(): string {
    return getCategories()[0]
  }

  function categoryExist(category: string): boolean {
    const categories = getCategories()
    let found = false
    for (let i = 0; i < categories.length; i++) {
      if (categories[i] === category) {
        found = true
        break
      }
    }
    return found
  }

  function getCategories(): Array<string> {
    const { locale } = useI18n()
    const categories = getCategoriesByLocaleCode(locale.value)
    return categories
  }

  function getCategoriesByLocaleCode(localeCode: string): Array<string> {
    const categoriesByLocaleCode = {
      it: ['escort', 'donne', 'trans', 'coppie', 'massaggi', 'mistress'],
      de: ['escort', 'nutten', 'trans', 'club', 'massagen', 'mistress'],
      en: ['escort', 'women', 'trans', 'agencies', 'massages', 'mistress'],
      es: ['escort', 'mujeres', 'trans', 'club', 'masajes', 'mistress'],
    }
    type LocaleKey = keyof typeof categoriesByLocaleCode
    return categoriesByLocaleCode[localeCode as LocaleKey]
  }

  return {
    activeCategory,
    resetCategory,
    setCategory,
    categoryExist,
    getCategories,
  }
}
