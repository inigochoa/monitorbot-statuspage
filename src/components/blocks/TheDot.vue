<template>
  <span class="dot relative rounded-full"></span>
</template>

<script>
export default {
  name: 'TheDot',
}
</script>

<style lang="scss" scoped>
.dot {
  &::after {
    content: '';
    width: 100%;
    height: 100%;
    position: absolute;
    background: currentColor;
    opacity: 1;
    border-radius: 50%;
    top: 0;
    left: 0;
    animation: pulse 2s infinite;
  }
}

@keyframes pulse {
  0% {
    opacity: 0.5;
  }

  70% {
    opacity: 0;
    transform: scale(1.7);
  }

  100% {
    opacity: 0;
  }
}
</style>
