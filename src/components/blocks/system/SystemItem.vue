<template>
  <li class="flex text-lg">
    <div class="truncate w-5/6 sm:w-3/5 md:w-5/12 lg:w-6/12">
      <a
        class="hover:underline"
        :href="system.url"
        target="_blank"
        rel="noopener noreferrer"
      >{{ system.url }}</a>
    </div>

    <div class="hidden md:inline-block md:w-3/12 lg:w-3/12">
      <span
        v-if="percentage"
        class="font-light ml-6 text-md text-secondary"
      >{{ percentage }}</span>
    </div>

    <div class="flex items-center justify-end w-1/6 sm:w-2/5 md:w-4/12 lg:w-3/12">
      <the-dot
        class="h-6 mr-3 w-6"
        :class="dotClassObject"
      />
      <p
        class="hidden sm:inline-block"
        v-html="status"
      ></p>
    </div>
  </li>
</template>

<script>
export default {
  name: 'SystemItem',

  components: {
    TheDot: () => import(/* webpackChunkName: "the-dot" */ '@/components/blocks/TheDot'),
  },

  props: {
    system: {
      required: true,
      type: Object,
    },
  },

  computed: {
    dotClassObject() {
      return this.system.isUp ? 'bg-success text-success' : 'bg-danger text-danger'
    },

    percentage() {
      const percentage = Math.round(this.system.upCycles / this.system.totalCycles * 100 * 100) / 100

      return `${this.$i18n.t('status.percentage', { 'percentage': percentage })}`
    },

    status() {
      return this.system.isUp ? this.$i18n.t('status.success', { 'status': this.system.statusCode }) : this.$i18n.t('status.danger', { 'status': this.system.statusCode })
    },
  },
}
</script>
