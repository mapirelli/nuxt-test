<script setup lang="ts">
const picture = {
  sources: [
    {
      id: 1,
      media: '(max-width: 768px)',
      srcset: 'https://static.escort-advisor.com/ea/img/home_images/m_cover_ist2_it.webp',
      type: 'image/webp',
    },
    {
      id: 2,
      media: '(max-width: 768px)',
      srcset: 'https://static.escort-advisor.com/ea/img/home_images/m_cover_ist2_it.jpg',
      type: 'image/jpeg',
    },
    {
      id: 3,
      media: '(max-width: 1024px)',
      srcset: 'https://static.escort-advisor.com/ea/img/home_images/d_cover_ist2_it.webp',
      type: 'image/webp',
    },
    {
      id: 4,
      media: '(max-width: 1024px)',
      srcset: 'https://static.escort-advisor.com/ea/img/home_images/d_cover_ist2_it.jpg',
      type: 'image/jpeg',
    },
  ],
  image: {
    src: 'https://static.escort-advisor.com/ea/img/home_images/d_cover_ist2_it.jpg',
    alt: 'Image alt',
  },
}
</script>

<template>
  <TheHero :picture="picture"></TheHero>
</template>
