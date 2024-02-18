export const useCountry = (): string => {
  const { localeProperties } = useI18n()
  const country = localeProperties.value.name as string
  return country
}
