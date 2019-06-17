<template>
    <div id="movies">
        <div class="player">
            <video  v-bind:src="video"  type="video/mp4" ref='video' width="100%" height="100%" controls>
                I'm sorry; your browser doesn't support HTML5 video.
            </video>
            <!--<div class="contrl" >
                <i class="fas fa-play" @click="played()" v-if="play"></i>
                <i class="fas fa-pause" @click="played()" v-if="pause"></i>
                <i class="fas fa-redo"   @click="$refs.video.currentTime=0" ></i>
                <i class="fas fa-compress" @click="requestFullscreen()"></i>
                <progress   class="progress" :max="duration * 60" :value="time"></progress>
                <span>{{duration}}</span>
            </div>-->
        </div>
        <CarouselCard :interval="7000" height="220px" type="card" arrow="always" class="carousel">
            <CarouselCardItem v-for="item in content" :key="item.id" >
                <video v-bind:src=item.path  type="video/mp4" height="170px" @click="choiseVideo(item.path)">   
                    I'm sorry; your browser doesn't support HTML5 video.
                </video>
            </CarouselCardItem>
        </CarouselCard>
    </div>
</template>

<script>
import { CarouselCard, CarouselCardItem } from 'vue-carousel-card'
import 'vue-carousel-card/styles/index.css'
export default {
    name: 'movies',
  components: { CarouselCard, CarouselCardItem
  },
  data() {
      return {
        play : true,
        pause : false,
        time: 0,
        duration : '0:0',
        video : ''
      };
  },
  props: {
    content : Array
  },
  methods: {
      /*eslint no-console: "off"*/
    played(){
      this.duration=(this.$refs.video.duration/60).toFixed(2);
      if( this.$refs.video.paused){
          this.$refs.video.play();
          this.play=false;
          this.pause=true;
          this.time=this.$refs.video.currentTime;
          console.log(this.time)
      }else{         
          this.$refs.video.pause();
          this.pause=false;
          this.play=true;
      }
    },
    requestFullscreen(){
      this.$refs.video.requestFullscreen();
    },
    choiseVideo(src){
      this.video=src
      console.log(this.video)
    }
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
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  width: 50%;
  height: 50%;
  background-color: #fff6f6;
  border: 2px solid #f44336;
}
.player .contrl{
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
  width: 95%;
  position: absolute;
  bottom: 14px;
  color: white;
}
.player .progress{
  height: 5px;
  background: white;
  width: 70%;
  border-radius: 10%;
}
.player .value{
  border-radius: 10%;
  height: 5px;
  background: #f44336;
}
main{ 
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    height: 200px;
    width: 100%;
}
.carousel{
    width: 500px;
}
</style>