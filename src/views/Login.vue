<template>
    <div id="Login">
      <div class="users">
        <div class="user">
          <router-link to="/chosedivase"><img src="../assets/avatar/drake.png" alt="avatar"></router-link>
          <div class="info">
            <span>Drake</span>
          </div>
        </div>
        <div class="user">
          <router-link to="/chosedivase"><img src="../assets/avatar/vasek.png" alt="avatar"></router-link>
          <div class="info">
            <span>Alexandr</span>
          </div>
        </div>
        <div class="user">
          <router-link to="/chosedivase"><img src="../assets/avatar/sane4ek.png" alt="avatar"></router-link>
          <div class="info">
            <span>Vanek</span>
          </div>
        </div>
        <div class="user">
          <router-link to="/chosedivase"><img src="../assets/avatar/vanek.png" alt="avatar"></router-link>
          <div class="info">
            <span>Sane4ek</span>
          </div>
        </div>
      </div>
      <router-link to="/registr"><span class="bttn">Create Account</span></router-link>
    </div>
</template>

<script>
export default {
    name: 'Login',
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
#Login{
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  justify-content: flex-end;
  width: 100vw;
  height: 100vh;
}
.users{
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  width: 100vw;
  height: 100vh;

}
.user{
  margin: 10px 20px;
  border: 2px solid #f44336;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
.user img{
  margin: 10px 10px
}
span{
  margin-top:20px;
  font-size: 18pt;
}
.bttn{

  margin: 20px;
  width: 180px;
  height: 40px;
  padding-top: 5px;
  cursor: pointer;
  border: 2px solid #f44336;
  color: #f44336;
  font-size: 16pt;
  text-align: center;
}
</style>

