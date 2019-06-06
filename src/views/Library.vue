<template>
    <div id="Library">
      <nav class="menu" >
       <header>
         <span>Library</span>
         <i class="fas fa-search"></i>
       </header>
       <ul>
        <li><router-link to="/library/movies" class="router"><i class="fas fa-folder"></i>Movies</router-link></li>
        <li><router-link to="/library/music" class="router"><i class="fas fa-folder"></i>Music</router-link></li>
        <li><router-link to="/library/image" class="router"><i class="fas fa-folder"></i>Image</router-link></li>
      </ul>
      </nav>
      <main>
        <router-view></router-view>
      </main>
    </div>
</template>

<script>
export default {
    name: 'Library',
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
#Library{
  display: flex;
  flex-direction: row;

  height: 100vh;
  width: 100vw;
}
nav{
  color: white;
  height: 100vh;
  width: 400px;
  background: #f44336;
}
.router{
  color: white;
  text-decoration: none;
}
header{
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  width: 300px;
  font-size: 22pt;
  text-transform: uppercase;
  height: 70px;
  border-bottom: 2px solid white;
}
header span{
  margin-left: 10px;
}
header i{
  margin-right: 10px;
}

ul{
  margin-top: 80px;
  list-style: none;
  padding: 0;
}
li{
  font-size: 16pt;
  padding: 5px;
  margin: 0;
}
li i{
  padding-left: 10px;
  padding-right: 10px;
}
main{
  width: 100%;
}
</style>