<template>
  <section
    v-if="0 == systems.length"
    class="flex-grow"
  >
    <div class="card text-lg">
      <p>{{ $t('error.empty') }}</p>
    </div>
  </section>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  name: 'ErrorSection',

  computed: {
    ...mapGetters('systems', {
      systems: 'systems',
    })
  },
}
</script>
