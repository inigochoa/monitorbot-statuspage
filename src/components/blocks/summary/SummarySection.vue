<template>
  <section v-if="0 < systems.length">
    <div class="card flex flex-col items-center text-center sm:flex-row sm:items-start sm:text-left">
      <the-dot
        class="h-16 w-16 sm:mr-8"
        :class="dotClassObject"
      />

      <h2
        class="subheading"
        v-html="heading"
      ></h2>
    </div>
  </section>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  name: 'SummarySection',

  components: {
    TheDot: () => import(/* webpackChunkName: "the-dot" */ '@/components/blocks/TheDot'),
  },

  computed: {
    dotClassObject() {
      switch (this.status) {
        case 'success':
          return 'bg-success text-success'
        case 'warning':
          return 'bg-warning text-warning'
        case 'danger':
          return 'bg-danger text-danger'
        default:
          return ''
      }
    },

    heading() {
      switch (this.status) {
        case 'success':
          return this.$t('summary.success')
        case 'warning':
          return this.$t('summary.warning')
        case 'danger':
          return this.$t('summary.danger')
        default:
          return ''
      }
    },

    ...mapGetters('systems', {
      status: 'status',
      systems: 'systems',
    }),
  },
}
</script>

<style lang="scss" scoped>
@media (min-width: 640px) {
  .subheading {
    line-height: 4rem !important;
  }
}
</style>
