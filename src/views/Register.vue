<template>
    <div id="Register">
      <form action="post">
        <span >Sign Up</span>
        <input type="text" placeholder="User name" v-model="name" required autofocus />
        <input type="email" placeholder="Email" v-model="email" required />
        <input type="password" placeholder="Password" v-model="password" required />
        <input type="password" placeholder="Re-password" v-model="password_confirmation" />
        <button type="submit" class="bttn" @click="handleSubmit" >Create Account</button>
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
        name : "",
        email : "",
        password : "",
        password_confirmation : "",
      };
    },
  methods: {
    handleSubmit(e){
      e.preventDefault();
      
      if(this.password === this.password_confirmation && this.password.length > 0){
        
        let url= "http://localhost:3000/auth/register"
        this.$http.post(url, {
          name: this.name,
          email: this.email,
          password: this.password
        })
          .then( response => {
            /*eslint no-console: "off"*/
            localStorage.setItem('user', {
              "name" : response.name,
              "email" : response.email,
              "avatar" : response.avatar  });
            localStorage.setItem('jwt', response.data)
            if( localStorage.getItem('jwt') != null ){
              
              this.$emit('loggedIn')
              this.$router.push('/library')
            }
            else{
              this.$router.push('/')
            }
          })
      } else {
        this.password = '';
        this.password_confirmation = ''

        return alert('Passwords or email do not match')
      }
    }
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
input{
  color: #9b1309;
  width: 240px;
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
  width: 180px;
  height: 40px;
  padding-top: 5px;
  cursor: pointer;
  background-color: white;
  border: 2px solid #f44336;
  color: #f44336;
  font-size: 16pt;
  text-align: center;
}
</style>