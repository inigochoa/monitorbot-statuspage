<template>
  <button
    class="bg-secondary bottom-12 duration-500 ease-in-out fixed p-2 right-6 rounded-full shadow-xl text-primary transition-opacity focus:bg-primary focus:text-secondary hover:bg-primary hover:text-secondary md-bottom-16"
    :class="isVisible ? '' : 'opacity-0'"
    :title="$t('scroll-top.title')"
    @click="scrollTop()"
  >
    <svg
      :alt="$t('scroll-top.alt')"
      class="fill-current"
      height="24"
      viewBox="0 0 24 24"
      width="24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M0 0h24v24H0z"
        fill="none"
      />
      <path d="M7.41 15.41L12 10.83l4.59 4.58L18 14l-6-6-6 6z" />
    </svg>
  </button>
</template>

<script>
export default {
  name: 'TheScrollTopArrow',

  data() {
    return {
      isVisible: false,
    }
  },

  created() {
    window.addEventListener('scroll', this.handleScroll)
  },

  destroyed() {
    window.removeEventListener('scroll', this.handleScroll)
  },

  methods: {
    handleScroll() {
      this.isVisible = (50 <= window.scrollY)
    },

    scrollTop() {
      window.scrollTo(0, 0)
    },
  },
}
</script>
