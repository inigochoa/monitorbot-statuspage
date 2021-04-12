<template>
  <div class="container flex flex-col min-h-screen mx-auto my-auto px-4 relative sm:px-6 md:px-8">
    <TheHeader />
    <slot />
    <TheFooter />
    <TheScrollTopArrow />
  </div>
</template>

<script>
export default {
  name: 'PageTemplate',

  components: {
    TheHeader: () => import(/* webpackChunkName: "the-header" */ '@/components/layout/TheHeader'),
    TheFooter: () => import(/* webpackChunkName: "the-footer" */ '@/components/layout/TheFooter'),
    TheScrollTopArrow: () => import(/* webpackChunkName: "the-scroll-top-arrow" */ '@/components/blocks/TheScrollTopArrow'),
  },
}
</script>

<style lang="scss" scoped>
.container {
  max-width: 1000px;
}
</style>
