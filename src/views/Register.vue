<template>
    <div id="Register">
      <form action="">
        <span >Sign Up</span>
        <input type="text" placeholder="User name"/>
        <input type="email" placeholder="Email"/>
        <input type="password" placeholder="Password"/>
        <input type="password" placeholder="Re-password"/>
        <span class="bttn">Create Account</span>
      </form>
    </div>
</template>

<script>
export default {
    name: 'Register',
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
#Register{
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100vw;
  height: 100vh;
}
span{
  margin-top:20px;
  font-size: 18pt;
  
}
form{
   border: 2px solid #f44336;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
input, button{
  width: 220px;
  height: 40px;
  border: 1px solid #f44336;
  border-radius: 1%;
  margin-top: 30px;
  margin-left: 30px;
  margin-right: 30px;
  padding-left: 10px;
}
input[type="text"]::-webkit-input-placeholder {
color: #f44336a4;
}
input[type="password"]::-webkit-input-placeholder {
color: #f44336a4;
}
input[type="email"]::-webkit-input-placeholder {
color: #f44336a4;
}
.bttn{

  margin: 20px;
  width: 160px;
  height: 40px;
  padding-top: 5px;
  cursor: pointer;
  border: 2px solid #f44336;
  color: #f44336;
  font-size: 16pt;
  text-align: center;
}
</style>