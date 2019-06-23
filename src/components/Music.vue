<template>
    <div id="music">
        <div class="list">
            <template v-for="(item,index) in content" >
                <div :key="index"  class="song" v-if="item.type == 'mp3'"  @click=" selectSong(item.path, index)">
                    <div class="baner">
                        <img src='/album/Drake.jpg'  alt="">
                        <div v-if="index == justsrc && activ " class="everlib-logo">
                            <i class="everlib-logo-first-bar"></i>
                            <i class="everlib-logo-second-bar"></i>
                            <i class="everlib-logo-third-bar"></i>
                            <i class="everlib-logo-fourth-bar"></i>
                            <i class="everlib-logo-fifth-bar"></i>
                        </div>
                    </div>
                    <div class="info">
                        <span>{{item.name}}</span>
                        <span v-if="index == justsrc " >{{start}} /  {{end}} </span>
                        <div class="progress"   v-if="index == justsrc && activ ">
                            
                            <div class="value" v-bind:style="{ width : progressElmValue+'%'}" ></div>
                            
                        </div>
                    </div>
                </div>
            </template>
        </div>
        <div class="player">
            <img src="../assets/album/face.jpg" alt="">
            <div class="item">
                <div class="info">
                    <span>{{artist}}</span>
                </div>
                <div class="contrl">
                    <i class="fas fa-backward" @click="previous()"></i>
                    <i v-if="!activ" class="fas fa-play" @click="play()"></i>
                    <i v-if="activ" class="fas fa-pause" @click="pause()"></i>
                    <i class="fas fa-redo" @click="loop()" v-bind:style="{ color: activeColor}" ></i>
                    <i class="fas fa-forward" @click="next()"></i>
                    <div class="progress">
                        <div class="value" v-bind:style="{ width : progressElmValue+'%'}" ></div>
                    </div>
                    <span>{{end}}</span>
                </div>
            </div>  
        </div>  
    </div>
</template>

<script>
export default {
    name: 'music',
  components: {
  },
  computed:{
    content(){
      return this.$store.getters.content
    }
  },
  data() {
      return {
        audio : new Audio(),
        artist:'',
        title:'',
        src:'',
        img:'',
        justsrc:0,
        activ : false,
        timer : null,
        progressElmValue:0,
        progressElmMax:0,
        activeColor : 'black',
        end : 0,
        start : 0
      };
    },
  methods: {
      /*eslint no-console: "off"*/
    selectSong(song,index){
        this.justsrc=index
        this.audio.src=song
        this.play();
    },
    play(){
        this.audio.play();
        this.artist=this.content[this.justsrc].name;
        if(!this.activ){
            this.activ=true;
            this.timer= setInterval(()=>{
                this.progressElmValue=(this.audio.currentTime / this.audio.duration) * 100
                this.start=(this.audio.currentTime / 60).toFixed(2);
                this.progressElmMax=this.audio.duration.toFixed(2);
                this.end=(this.audio.duration / 60).toFixed(2);
                    if(this.audio.currentTime>=this.audio.duration){
                    this.next()
                }
            })
        }
        this.progress(1000);
    },
    pause(){
        this.activ=false;
        this.audio.pause();
    },
    next(){
        this.justsrc++;
        if(this.justsrc > this.content.length-1){
            this.justsrc=0;
        }
        console.log(this.content[this.justsrc].path)
        this.audio.src=this.content[this.justsrc].path;
        this.artist=this.content[this.justsrc].name;
        this.play();
    },
    previous(){
        this.justsrc--;
        if(this.justsrc <= 0){
            this.justsrc=this.content.length-1;
        }
        this.audio.src=this.content[this.justsrc].path;
        this.img=this.content[this.justsrc].image;
        this.artist=this.content[this.justsrc].name;
        this.play();
    },
    progress(time){
        if(!this.activ){
            this.activ=true;
            this.timer= setInterval(()=>{
                this.progressElmValue=(this.audio.currentTime / this.audio.duration) * 100
                this.progressElmMax=this.audio.duration.toFixed(2);
            },time)
        }
    },
    loop(){
        if(this.activeColor == '#f44336'){
            this.activeColor='black'
            this.audio.loop=false; 
        }else{
            this.activeColor='#f44336'
            this.audio.loop=false; 
        }
    }
  }
}
</script>

<style scoped>
#music{
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-between;
  padding: 0;
  height: 100vh;
  width: 100%;  
}
.list{
    width: 1000px;
    height: 600px;
    overflow:scroll;
}
.song{
    margin-top: 20px;
    margin-left: 15px;
    margin-right: 15px;
    width: 970px;
    border: 1px solid #f44336;
    background-color: #fff6f6;
    display: flex;
    flex-direction: row;
}
.song .baner{
    position: relative;
}
.baner .everlib-logo{
    bottom: 13px;
    left: 10px;
    position: absolute;
}
.song img{
    margin: 10px;
    width: 70px;
    height: 70px;
}
.song .info{
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: space-around;
    width: 100%;
}
.song span{
    margin-top:5px;
}
.player{
    border: 1px solid #f44336;
    width: 100%;
    height: 100px;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: flex-start;
}
.player .contrl{
    width: 900px;
    bottom: 0;
    color: black;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-around;
}
.player .info{
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    width: 1000px;
}
.player span{
  margin-left: 15px;
  margin-bottom: 10px;
}
.player i{
  margin-left: 15px;
}
.player i:hover{
  color:#f44336;
}
.player img{
    margin-left: 15px;
    margin: 10px;
    width: 70px;
    height: 70px;
}
.progress{
  margin-left: 3px;
  height: 5px;
  background: black;
  width: 95%;
  border-radius: 10%;
}
.value{
  border-radius: 10%;
  height: 5px;
  background: #f44336;
  width: 50px;
}
.container {
  margin-top: 50px;
  text-align: center;
}

.everlib-logo {
  width: 100px;
  display: inline-block;
  cursor: pointer;
  background: transparent;
}
.everlib-logo .everlib-logo-first-bar,
.everlib-logo .everlib-logo-second-bar,
.everlib-logo .everlib-logo-third-bar,
.everlib-logo .everlib-logo-fourth-bar,
.everlib-logo .everlib-logo-fifth-bar  {
  display: inline-block;
  border-radius: 13px;
  width: 9px;
  margin-right: 6px;
  transition: .5s;
  animation: equalize 4s 0s infinite;
  animation-timing-function: linear;
  vertical-align: bottom;
  opacity: 0.7;
}
.everlib-logo .everlib-logo-first-bar {
  height: 40px;
  background: #f44336;
  transition: 0.5s;
  animation-delay: -1.9s;
}
.everlib-logo .everlib-logo-second-bar {
  height: 48px;
  background: #f44336;
  animation-delay: -2.9s;
}
.everlib-logo .everlib-logo-third-bar {
  height: 44px;
  background: #f44336;
  animation-delay: -3.9s;
}
.everlib-logo .everlib-logo-fourth-bar {
  height: 36px;
  background: #f44336;
  animation-delay: -4.9s;
}
.everlib-logo .everlib-logo-fifth-bar {
  height: 36px;
  background: #f44336;
  animation-delay: -4.9s;
}

@keyframes equalize {
  0% {
    height: 48px;
  }
  4% {
    height: 42px;
  }
  8% {
    height: 40px;
  }
  12% {
    height: 30px;
  }
  16% {
    height: 20px;
  }
  20% {
    height: 30px;
  }
  24% {
    height: 40px;
  }
  28% {
    height: 10px;
  }
  32% {
    height: 40px;
  }
  36% {
    height: 48px;
  }
  40% {
    height: 20px;
  }
  44% {
    height: 40px;
  }
  48% {
    height: 48px;
  }
  52% {
    height: 30px;
  }
  56% {
    height: 10px;
  }
  60% {
    height: 30px;
  }
  64% {
    height: 48px;
  }
  68% {
    height: 30px;
  }
  72% {
    height: 48px;
  }
  76% {
    height: 20px;
  }
  80% {
    height: 48px;
  }
  84% {
    height: 38px;
  }
  88% {
    height: 48px;
  }
  92% {
    height: 20px;
  }
  96% {
    height: 48px;
  }
  100% {
    height: 48px;
  }
}
</style>