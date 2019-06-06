<template>
    <div id="image">
        <div class="view">
            <img src="../assets/album/face.jpg" alt="">
        </div>
        <main>
            <div class="carousel">
                <carousel-3d style="height:150px; width: 800px;"   >
                    <slide :index="0"  style="width: 150px; height:150px;" >
                        <img src="../assets/album/Drake.jpg" alt="">
                    </slide>
                    <slide :index="1"  style="width: 150px; height:150px;" >
                        <img src="../assets/album/face.jpg" alt="">
                    </slide>
                    <slide :index="2"  style="width: 150px; height:150px;">
                        <img src="../assets/album/Hardwired.jpg" alt="">
                    </slide>
                    <slide :index="3"  style="width: 150px; height:150px;">
                        <img src="../assets/album/BeerbongsBentley.jpg" alt="">
                    </slide>
                </carousel-3d>
            </div> 
        </main>
    </div>
</template>

<script>
import { Carousel3d, Slide } from 'vue-carousel-3d';
export default {
    name: 'image',
  components: {
    Carousel3d,
    Slide
  },
  data() {
      return {
      };
    },
  methods: {
  }
}
</script>

<style scoped>
#image{
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  padding: 0;
  height: 100vh;
  width: 100%;  
}
.view{
    width: 600px;
    height: 300px;
}
.view img{
    width: 500px;
    height: 300px;
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
    width: 800px;
    margin-left: 150px;
}
</style>