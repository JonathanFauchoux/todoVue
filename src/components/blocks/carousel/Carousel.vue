<template>
  <section class="carousel">
    <slot></slot>
    <button class="carousel__nav carousel__prev" @click.prevent="prev"></button>
    <button class="carousel__nav carousel__next" @click.prevent="next"></button>
    <div class="carousel__pagination">
      <button v-for="n in slidesCount" :key="n.index" @click="goto(n-1)" :class="{active: n-1 == index}"></button>
    </div>
  </section>
</template>

<script>

export default {
  name: 'Carousel',
  data () {
    return {
      index: 0,
      slides: this.$children,
      direction: 'right'
    }
  },
  watch: {
    slides () {
      if (this.index >= this.slidesCount) {
        this.index = this.slidesCount - 1
      }
    }
  },

  computed: {
    slidesCount () {
      return this.slides.length
    }
  },

  methods: {
    next () {
      this.index++
      this.direction = 'right'
      if (this.index >= this.slidesCount) {
        this.index = 0
      }
    },
    prev () {
      this.index--
      this.direction = 'left'
      if (this.index < 0) {
        this.index = this.slidesCount - 1
      }
    },
    goto (index) {
      this.direction = index > this.index ? 'right' : 'left'
      this.index = index
    }
  }
}
</script>

<style lang="scss">
  .carousel{
    height: 100%;
    position: relative;
    overflow: hidden;

    &__next{
      //@include icon(icons(chevron-right), after);
      padding: 1.5rem;
      background-color: rgba(88,68,248, 0.4);
      border: 1px solid lightgray;
      border-radius: 1rem;
      font-weight: bold;
      color: white;
      position: absolute;
      right: 1rem;
      top: 70%;

    }
    &__prev{
      //@include icon(icons(chevron-left), after);
      padding: 1.5rem;
      background-color: rgba(88,68,248, 0.4);
      border: 1px solid lightgray;
      border-radius: 1rem;
      font-weight: bold;
      color: white;
      position: absolute;
      top: 70%;
      left: 1rem;

    }
    &__pagination{
      position: absolute;
      bottom: 1rem;
      left: 0;
      right: 0;
      text-align: center;
      button{
        display: inline-block;
        width: 1rem;
        height: 1rem;
        background-color: #000;
        opacity: .7;
        border-radius: 50%;
        margin: 0 2px;

      }
      .active{
          background-color: #fff;
        }
    }
  }
</style>
