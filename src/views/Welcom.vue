<template>
  <div id="WelcomPage">
    <nav class="nav">
      <span class="logo">MV</span>
      <div class="sign">
        <router-link to="/login" class="login">LOGIN</router-link>
        <router-link to="/registr" class="register bttn">SIGN UP</router-link>
      </div>
    </nav>
    <div class="banner">
      <h1>Media Viewer</h1>
      <p>VIEW YOUR FOWARIT MEDIA</p>
      <router-link to="/library" class="bttn" style="margin-top: 40px; 
                                                    font-size: 30pt;
                                                    width: 180px; 
                                                    height: 70px">GO!
      </router-link>
    </div>
    <div class="music">
      <div class="banner-grupp">
        <div class="row">
          <img src="../assets/album/face.jpg" alt="music" style="top:-150px;left:128px; opacity: 1;">
        </div>
        <div class="row">
          <img src="../assets/album/Hardwired.jpg" alt="music"  style="top:-40px;left:228px; opacity: 2;">
          <img src="../assets/album/BeerbongsBentley.jpg" alt="music" style="top:-40px;left:28px; opacity: 2;">
        </div>
        <div class="row">
          <img src="../assets/album/BillieEilish.jpg" alt="music" style="top:70px; left:-70px; opacity: 3;">
          <img src="../assets/album/Drake.jpg" alt="music" style="top:70px; left:330px; opacity: 3;">
          <img src="../assets/album/image.jpg" alt="music" style="top:70px; opacity: 3;">
        </div>
      </div>
      <p>Listen to music that you like</p>
    </div>
    <div class="video">
      <p>Watch only the best movies</p>
      <div class="player">
        <img src="../assets/video.jpg" alt="video">
        <div class="contrl">
          <i class="fas fa-pause"></i>
          <i class="fas fa-redo"></i>
          <div class="progress">
            <div class="value"></div>
          </div>
          <span>49:47</span>
        </div>
      </div>
    </div>
    <footer>
      <span class="logo">MV</span>
      <div class="social">
        <a href="https://www.instagram.com/watatp/" target="blanck"><i class="fab fa-instagram" style="color : white;"></i></a>
        <a href="https://github.com/m4eryk" target="blanck"><i class="fab fa-github-square"></i></a>
        <a href="https://vk.com/feed" target="blanck"><i class="fab fa-vk"></i></a>
        <a href="https://www.instagram.com/watatp/" target="blanck"><i class="fab fa-telegram"></i></a>
      </div>
    </footer>
  </div>
</template>

<script>
export default {
  name: 'WelcomPage',
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
@import url('https://fonts.googleapis.com/css?family=Roboto&display=swap');
p{
  text-transform: uppercase;
}
.bttn{
  width: 80px;
  height: 30px;
  padding-top: 15px;
  cursor: pointer;
  border: 2px solid #f44336;
  color: #f44336;
}
nav{
  background-color: #f44336;
  height: 70px;
  margin: 0 auto;
  padding: 0;
  width: 100%;
  color : white;

  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
}
.logo{
  font-size: 35pt;
  font-weight: 900;
  margin-left: 30px;
}
nav .sign{
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-right: 30px;
  
}
nav .register{
  text-align: center;
  margin-left: 20px;
  border: 2px solid white;
  color: white;
}
nav .login{
  
  padding-top: 4px;
}
.banner{
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  height: 75vh;
  margin: 0;
  padding: 0;
}
.banner h1{
  margin: 0;
  padding: 0;
  font-size: 70pt;
  font-weight: 900;
}
.banner p{
  margin: 0;
  padding: 0;
  font-size: 20pt;
}
.music{
  height: 75vh;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
  margin-bottom: 70px;
}
.music .row{
  width: 400px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
}
.music img{
  position: absolute;
  width: 140px;
  height: 140px;
  margin-top: 10px;
  margin-left: 20px;
  box-shadow: 0 0 10px rgba(0,0,0,0.9);
}
.music .banner-grupp{
 position: relative;
}
.music p{
  margin: 0;
  padding: 0;
  font-size: 22pt;
  font-weight: 900;
}
.video{
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
  height: 75vh;
}
.video .progress{
  height: 5px;
  background: white;
  width: 350px;
  border-radius: 10%;
}
.video .value{
  border-radius: 10%;
  height: 5px;
  background: #f44336;
  width: 50px;
}
.player{
  width: 500px;
  height: 300px;
  box-shadow: 0 0 10px rgba(0,0,0,0.9);
  position: relative;
}
.player img{
  width: 500px;
  height: 300px;
}
.player .contrl{
  width: 500px;
  position: absolute;
  bottom: 0;
  color: white;
}
.player span{
  margin-right: 15px;
}
.player i{
  margin-left: 15px;
}
.video p{
  margin: 0;
  padding: 0;
  font-size: 22pt;
  font-weight: 900;
}
.range{
  width: 70%;  
}
.contrl{
  width: 600px;
  color:white;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
}
footer{
  background-color: #f44336;
  height: 70px;
  margin: 0 auto;
  width: 100%;
  color : white;

  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
}
.social{
  font-size: 22pt;
}
.social i{
  margin-right: 18px;
}
a{
  color:white;
  text-decoration: none;
}
.modal-dialog{
  max-width: 200px;
}
</style>
