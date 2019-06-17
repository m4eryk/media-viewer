<template>
    <div id="Login">
      <div class="users">
        <div class="user" v-for="(user, index) in users"
                          v-bind:user="user"
                          v-bind:index="index"
                          v-bind:key="user.id"
                          @click="setParamLogin(user.user_id, user.email )">
          <img  :src="'/avatar/' + user.avatar + '.png'" alt="avatar">
          <div class="info">
            <span>{{user.user_id}}</span>
          </div>
        </div>
      </div>
      <div class="password_enter" v-show="viewPasswordPanel">
        <input type="password" name="" id="" v-model="password" placeholder="password">
        <button type="submit" class="bttn" @click="handleSubmit(false)" >LOGIN</button>
      </div>
      <div class="unknown">
        <router-link to="/registr" class="a">
          <div class="add">
            <img src="/avatar/add_user.png" alt="add user">
            <div class="info">
              <span>Add user</span>
            </div>
          </div>
        </router-link>
        <div class="guest">
          <img src="/avatar/guest.png" alt="guest" @click="handleSubmit(true)">
          <div class="info">
            <span>Guest</span>
          </div>
        </div>
      </div>
    </div>
</template>

<script>
export default {
    name: 'Login',
  components: {
  },
  data() {
      return {
        viewPasswordPanel : false,
        user_id : '',
        password: '',
        users : [
          {
          user_id :  'Drake',
          email : 'drake@email.com',
          avatar : "drake"
          },
          {
          user_id :  'Alexandr',
          email : 'Alexandr@email.com',
          avatar : "vasek"
          },
          {
            user_id :  'Vanek',
            email : 'Vanek@email.com',
            avatar : "sane4ek"
          },
          {
            user_id :  'Sane4ek',
            email : 'Sane4ek@email.com',
            avatar : "vanek"
          }
        ]
      };
    },
  methods: {
    setParamLogin( user_id, email ){
      this.user_id = user_id;
      this.email = email;
      this.viewPasswordPanel = true;
    },
    getImgUrl(pet) {
      var images = require.context('../assets/', false, /\.png$/)
      return images('./' + pet + ".png")
    },
    handleSubmit(guest){
      /*eslint no-console: "off"*/
      if( !guest ){
        this.$http.post('http://localhost:3000/auth/login', {
          password : this.password,
          email : this.email,
          user_id: this.user_id,
          expires_in : 3600,
          status : 200
        })
        .then(response => {
          console.log(response.data.status)
          if(response.data.status == 200 ){
            localStorage.setItem('user',{
            "name" : response.user_id }
          )
            localStorage.setItem('jwt',response.data.access_token)
            if (localStorage.getItem('jwt') != null){
              this.$emit('loggedIn')
              this.$router.push('chosedivase')
            }
          }
          else{
            return alert('Login falled')
          }
        })
      } else {
        this.$http.post('http://localhost:3000/auth/login', {
          password : "guest",
          email : "guest",
          user_id: "guest",
          expires_in : 3600,
          status : 200
        })
        .then(response => {
          console.log(response.data.status)
          if(response.data.status == 200 ){
            localStorage.setItem('user',{
            "name" : response.user_id }
          )
            localStorage.setItem('jwt',response.data.access_token)
            if (localStorage.getItem('jwt') != null){
              this.$emit('loggedIn')
              this.$router.push('chosedivase')
            }
          }
          else{
            return alert('Login falled')
          }
        })
      }
    }
  }
}
</script>

<style scoped>
#Login{
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100vw;
  height: 100vh;
}
.a{
  color: black;
  text-decoration: none;
}
.users{
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  margin-bottom: 100px;
}
input{
  color: #9b1309;
  width: 240px;
  height: 40px;
  border: none;
  border-radius: 1%;
  padding-left: 10px;
}
input[type="text"]::-webkit-input-placeholder {
color: #f44336a4;
}
.user{
  cursor: pointer;
  margin: 10px 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
.user img{
  margin: 10px 10px
}
.password_enter{
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  border: 1px solid #f44336;
  margin-bottom: 100px;
}
.unknown{
  margin-bottom: 40px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
}
.add{
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
.guest{
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
.add img{
  background-color: #f44336;
  border-radius: 50%;
  margin: 10px 10px;
  width: 121px;
  height: 121px;
}
.guest img{
  background-color: #f44336;
  border-radius: 50%;
  margin: 10px 10px;
  width: 121px;
  height: 121px; 
}
span{
  margin-top:20px;
  font-size: 18pt;
}
.bttn{
  width: 100px;
  height: 41px;
  cursor: pointer;
  background-color: white;
  border:none;
  border-left: 2px solid #f44336;
  color: #f44336;
  font-size: 16pt;
  text-align: center;
}
</style>

