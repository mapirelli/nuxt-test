export const useDomain = (): string => {
  const { localeProperties } = useI18n()
  const domain = localeProperties.value.domain as string
  return domain
}
