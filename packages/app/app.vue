<template>
  <div>
    <Html>

    <Head>
      <HeadIconLinks />
    </Head>

    <Body>
      <header>
        <TheHeader></TheHeader>
        <!--
            <ClientOnly fallback-tag="span">
              <HelloService></HelloService>
              <template #fallback>
                <p>Loading socket...</p>
              </template>
            </ClientOnly>-->
      </header>
      <main>
        <NuxtPage />
        <NuxtErrorBoundary>
          <template #error="{ error }">
            <p>An error occurred: {{ error }}</p>
          </template>
        </NuxtErrorBoundary>
      </main>
      <footer>
        <TheFooter></TheFooter>
      </footer>
    </Body>

    </Html>
  </div>
</template>

<script setup lang="ts">
/**
 * Documentation tips:
 * 1. If you only have a single layout in your application, we recommend using app.vue instead.
 * 2. One thing to keep in mind is that pages and layouts are ultimately just Vue components.
 * 3. The main purpose of Layouts are to extract repeated parts of pages into a single place. This is for code readability and maintainability, but also for performance reasons.
 * @url https://masteringnuxt.com/blog/pages-layouts-components
 */

const localeHead = useLocaleHead({
  addDirAttribute: true,
  addSeoAttributes: true,
  //identifierAttribute: 'id', //adds an id attribute to each link or meta generated from this composable to identify that come from the i18n library
})

useHead({
  htmlAttrs: {
    lang: localeHead.value.htmlAttrs!.lang,
    dir: localeHead.value.htmlAttrs!.dir,
  },
  link: [...(localeHead.value.link || [])], //a way to define i18n head link tags
  //meta: [...(localeHead.value.meta || [])], //a way to define i18n head meta tags
})
/*
useHead({
  script: [
    { src: 'https://unpkg.com/sockjs-client@1.5.0/dist/sockjs.min.js' },
    //{ src: 'https://cdn.jsdelivr.net/npm/sockjs-client@1/dist/sockjs.min.js' },
    { src: 'https://unpkg.com/@vertx/eventbus-bridge-client.js@1.0.0-1/vertx-eventbus.js' }, //declared as node dependency
  ]
})*/
</script>

