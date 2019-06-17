<template>
    <div id="music">
        <div class="list">
            <div class="song">
                <img src="../assets/album/face.jpg" alt="">
                <div class="info">
                    <span>Face - Hate Love</span>
                    <span>02.01.2019</span>
                </div>
            </div>
            <div class="song">
                <img src="../assets/album/Drake.jpg" alt="">
                <div class="info">
                    <span>Face - Hate Love</span>
                    <span>02.01.2019</span>
                </div>
            </div>
            <div class="song">
                <img src="../assets/album/image.jpg" alt="">
                <div class="info">
                    <span>Face - Hate Love</span>
                    <span>02.01.2019</span>
                </div>
            </div>
            <div class="song">
                <img src="../assets/album/Hardwired.jpg" alt="">
                <div class="info">
                    <span>Face - Hate Love</span>
                    <span>02.01.2019</span>
                </div>
            </div>
            <div class="song">
                <img src="../assets/album/BeerbongsBentley.jpg" alt="">
                <div class="info">
                    <span>Face - Hate Love</span>
                    <span>02.01.2019</span>
                </div>
            </div>
        </div>
        <div class="player">
            <img src="../assets/album/face.jpg" alt="">
            <div class="item">
                <div class="info">
                    <span>Face - Hate Love</span>
                </div>
                <div class="contrl">
                    <i class="fas fa-backward"></i>
                    <i class="fas fa-pause"></i>
                    <i class="fas fa-redo"></i>
                    <i class="fas fa-forward"></i>
                    <div class="progress">
                        <div class="value"></div>
                    </div>
                    <span>2:47</span>
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
  data() {
      return {
      };
    },
  methods: {
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
.song img{
    margin: 10px;
    width: 70px;
    height: 70px;
}
.song .info{
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: space-between;
}
.song span{
    margin:10px;
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
.player img{
    margin-left: 15px;
    margin: 10px;
    width: 70px;
    height: 70px;
}
.progress{
  height: 5px;
  background: black;
  width: 700px;
  border-radius: 10%;
}
.value{
  border-radius: 10%;
  height: 5px;
  background: #f44336;
  width: 50px;
}
</style>