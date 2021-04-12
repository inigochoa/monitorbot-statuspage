<template>
  <section
    v-if="0 < systems.length"
    class="flex-grow"
  >
    <h2>{{ $t('heading.systems') }}</h2>

    <div class="card">
      <ul class="systems">
        <system-item
          v-for="system in systems"
          :key="system.id"
          :system="system"
        />
      </ul>
    </div>
  </section>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  name: 'SystemSection',

  components: {
    SystemItem: () => import(/* webpackChunkName: "system-item" */ './SystemItem'),
  },

  computed: {
    ...mapGetters('systems', {
      systems: 'systems',
    }),
  },
}
</script>

<style lang="scss" scoped>
.systems li {
  &:not(:last-child) {
    @apply border-b;
    @apply border-gray-700;
    @apply mb-8;
    @apply pb-8;
  }
}
</style>
