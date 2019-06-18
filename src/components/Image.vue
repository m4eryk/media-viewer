<template>
    <div id="imageView">
        <div class="view">
            <img :src=activimg alt="">
        </div>
        <CarouselCard :interval='0' height="220px" type="card"  class="carousel">
          <div class="ite" v-for="item in content" :key="item.id"  >
            <CarouselCardItem  v-if="item.type == 'jpeg'">
                <img :src=item.path  alt="" @click="activimg = item.path">
            </CarouselCardItem>
          </div>
        </CarouselCard>
    </div>
</template>

<script>
import { CarouselCard, CarouselCardItem } from 'vue-carousel-card'
import 'vue-carousel-card/styles/index.css'

export default {
    name: 'imageView',
  components: { CarouselCard, CarouselCardItem
  },
  props : {
      content : Array
  },
  data() {
      return {
        activimg  : ""
      };
    },
  methods: {
  }
}
</script>

<style scoped>
#imageView{
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  padding: 0;
  height: 100vh;
  width: 100%;  
}
.view{
    
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    border: 2px solid #f44336;
    width: 70%;
    height: 50%;
}
h1 {
  height: 100%;
  padding: 0;
  margin: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #FFF;
  background: linear-gradient(90deg, rgba(88,140,236,1), rgba(106,106,207,1))
}
.view img{
    width: 70%;
    height: 70%;
}
main{ 
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    height: 200px;
    width: 100%;
}
main video{
    width: 150px;
    height: 150px;
}
.carousel{
    width: 500px;
}
</style>