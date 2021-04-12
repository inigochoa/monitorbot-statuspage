<template>
  <router-view />
</template>

<script>
import { mapActions, mapGetters } from 'vuex'

export default {
  data() {
    return {
      unsubscribe: undefined,
    }
  },

  computed: {
    ...mapGetters('database', {
      database: 'database',
    }),

    ...mapGetters('systems', {
      status: 'status',
    }),
  },

  created() {
    this.unsubscribe = this.database
      .collection('systems')
      .onSnapshot(snapshot => {
        this.clearSystems()

        snapshot.docs.forEach(doc => {
          this.addSystem({
            id: doc.id,
            ...doc.data(),
          })
        })

        this.setFavicons()
      })
  },

  destroyed() {
    this.clearSystems()
    this.unsubscribe()
  },

  methods: {
    ...mapActions('systems', {
      addSystem: 'add',
      clearSystems: 'clear',
    }),

    setFavicons() {
      let favicons = document.querySelectorAll('link[rel~="icon"')

      favicons.forEach(favicon => {
        let status = this.status
        if ('' !== status) {
          status = `-${status}`
        }

        let href    = favicon.href,
          sizes     = favicon.getAttribute('sizes'),
          folder    = href.substring(0, href.indexOf(sizes)),
          extension = href.substring(href.lastIndexOf('.'), href.length)

        favicon.href = `${folder}${sizes}${status}${extension}`
      })
    },
  },

  metaInfo() {
    return {
      titleTemplate: this.$t('meta.template.title'),
    }
  },
}
</script>

<style lang="scss">
html {
  scroll-behavior: smooth;
}

section {
  @apply mb-8;

  & > h2 {
    @apply font-bold;
    @apply mb-4;
    @apply text-3xl;
    @apply tracking-wide;
  }

  .card {
    @apply bg-section;
    @apply p-8;
    @apply rounded-md;
    @apply shadow-md;

    h2 {
      @apply font-bold;
      @apply mt-6;
      @apply text-2xl;
    }
  }
}

@media (min-width: 640px) {
  section {
    @apply mb-16;

    .card {
      @apply p-16;

      h2 {
        @apply mt-0;
        @apply text-4xl;
      }
    }
  }
}
</style>
