<template>
  <transition :name="transition">
    <div v-show="visible">

    <slot></slot>
  </div>
  </transition>
</template>

<script>

export default {
  name: 'CarouselSlide',
  props: {
    index: { type: Number, default: 0 }
  },
  data () {
    return {
    }
  },
  components: {
  },
  computed: {
    visible () {
      return this.index === this.$parent.index
    },
    transition () {
      return 'slide-' + this.$parent.direction
    }
  }
}
</script>

<style lang="scss">

//slide-right

.slide-right-enter-active{
  animation: slideRightIn 2s ease;

}
.slide-right-leave-active{
  animation: slideRightOut 2s ease;
  position: absolute;
  top: 0;

}
@keyframes slideRightIn {
  from{
    transform: translateX(100%);
  }
  to{
    transform: translateX(0);
  }
}
@keyframes slideRightOut {
  from{
    transform: translateX(0%);
  }
  to{
    transform: translateX(-100%);
  }
}

//slide-left

.slide-left-enter-active{
  animation: slideLeftIn 2s ease;

}
.slide-left-leave-active{
  animation: slideLeftOut 2s ease;
  position: absolute;
  top: 0;
  //left: 0;
  //right: 0;
  //bottom: 0;
  width: 100%
}
@keyframes slideLeftIn {
  from{
    transform: translateX(-100%);
  }
  to{
    transform: translateX(0);
  }
}
@keyframes slideLeftOut {
  from{
    transform: translateX(0%);
  }
  to{
    transform: translateX(100%);
  }
}
</style>
