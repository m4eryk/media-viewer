<template>
    <div id="movies">
        <div class="player">
            <video controls src="../assets/BlackHole.mp4"  type="video/mp4">
                I'm sorry; your browser doesn't support HTML5 video.
            </video>
        </div>
        <main>
            <div class="carousel">
                <carousel-3d style="height:150px; width: 800px;"   >
                    <slide :index="0"  style="width: 150px; height:150px;" >
                        <video  src="../assets/BlackHole.mp4"  type="video/mp4">
                        I'm sorry; your browser doesn't support HTML5 video.
                        </video>
                    </slide>
                    <slide :index="1"  style="width: 150px; height:150px;">
                        <video  src="../assets/BlackHole.mp4"  type="video/mp4">
                        I'm sorry; your browser doesn't support HTML5 video.
                        </video>
                    </slide>
                    <slide :index="2"  style="width: 150px; height:150px;">
                        <video  src="../assets/BlackHole.mp4"  type="video/mp4">
                        I'm sorry; your browser doesn't support HTML5 video.
                        </video>
                    </slide>
                </carousel-3d>
            </div> 
        </main>
    </div>
</template>

<script>
import { Carousel3d, Slide } from 'vue-carousel-3d';
export default {
    name: 'movies',
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
#movies{
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  padding: 0;
  height: 100vh;
  width: 100%;  
}
.player{
    width: 600px;
    height: 400px;
}
.player video{
    width: 600px;
    height: 400px;
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
}
</style>