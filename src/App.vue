<template>
  <div class="home-view">
    <Carousel>
      <CarouselSlide v-for="n in slides" :key="n.index" :index="n-1">
        <div class="text">
          slide : {{ n }}
        </div>
        <img :src="'https://picsum.photos/630/300?random=' + n">
      </CarouselSlide>
    </Carousel>
    <div class="button-bot">
      <button class="add" @click='addSlide'>Ajouter une image</button>
      <button class="supp" @click='removeSlide'>Supprimer une image</button>
    </div>
    <Todo v-model="todos"/>
  </div>
</template>

<script>
// @ is an alias to /src
import { mapGetters, mapActions } from 'vuex'
import Todo from './components/blocks/todo/Todo'
import Carousel from './components/blocks/carousel/Carousel'
import CarouselSlide from './components/blocks/carouselSlide/CarouselSlide'


export default {
  name: 'HomeView',
  data () {
    return {
      slides: 5,
      todos: [{
        name: 'demo',
        completed: true
      }]
    }
  },
  components: {
    Carousel,
    Todo,
    CarouselSlide
  },
  computed: {
    ...mapGetters({})
  },
  created () {
  },
  methods: {
    ...mapActions({
      'fetchGetHome': 'home/fetchGetHome'
    }),
    addTodo () {
      this.todos.push({
        name: 'Pierre',
        completed: false
      })
    },
    addSlide () {
      this.slides++
    },
    removeSlide () {
      this.slides--
    }
  }
}
</script>
<style lang="scss">
.text{
  position: absolute;
  left: 1rem;
  color: white;
  text-shadow: 2px 2px 3px #000;
  padding: 0 layout("spacing");
  p{
    font-weight: 400;
  }
}
.add{
  background-color: rgba(88,68,248, 0.4);
  padding: .7rem;
  border-right: 1px solid rgba(88,68,248, 0.4);
  color: #fff;
  &:hover{
    background-color: transparent;
    color: colors(primary);
  }
}
.supp{
  background-color: rgba(88,68,248, 0.4);
  padding: .7rem;
  position: absolute;
  right: 0;
  border-left: 1px solid rgba(88,68,248, 0.4);
  color: #fff;
  overflow: hidden;
  &:hover{
    background-color: transparent;
    color: colors(primary);
  }
}
.button-bot{
  border: 1px solid rgba(88,68,248, 0.4);
position: relative;
}
</style>
