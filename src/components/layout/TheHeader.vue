<template>
  <header class="flex justify-center my-6 sm:my-12">
    <TheLogo class="w-52" />
  </header>
</template>

<script>
export default {
  name: 'TheHeader',

  components: {
    TheLogo: () => import(/* webpackChunkName: "the-logo" */ '@/components/blocks/TheLogo'),
  },
}
</script>
