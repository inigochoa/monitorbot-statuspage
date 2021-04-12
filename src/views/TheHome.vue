<template>
  <page-template>
    <EmptySection />
    <SummarySection />
    <SystemSection />
  </page-template>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  name: 'Home',

  components: {
    EmptySection: () => import(/* webpackChunkName: "empty-section" */ '@/components/blocks/error/EmptySection'),
    PageTemplate: () => import(/* webpackChunkName: "page-template" */ '@/components/templates/PageTemplate'),
    SummarySection: () => import(/* webpackChunkName: "summary-section" */ '@/components/blocks/summary/SummarySection'),
    SystemSection: () => import(/* webpackChunkName: "system-section" */ '@/components/blocks/system/SystemSection')
  },

  computed: {
    metaTitle() {
      return 0 === this.downCount
        ? this.$t('meta.home.title.clear')
        : this.$t('meta.home.title.errors', { 'count': this.downCount })
    },

    ...mapGetters('systems', {
      downCount: 'downCount',
    }),
  },

  metaInfo() {
    return {
      title: this.metaTitle,
      meta: [
        { vmid: 'description', name: 'description', content: this.$t('meta.home.description') },
      ],
    }
  }
}
</script>
