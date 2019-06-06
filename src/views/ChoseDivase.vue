<template>
    <div id="ChoseDivase">
      <div class="col">
        <div class="divaise">
          <router-link to='/library'><i class="fas fa-mobile-alt"></i></router-link>
          <span>Mobile</span>
        </div>
        <div class="divaise">
          <router-link to='/library'><i class="fas fa-tv"></i></router-link>
          <span>TV</span>
        </div>
      </div>
      <div class="col">
        <div class="divaise">
          <router-link to='/library'><i class="fas fa-laptop"></i></router-link>
          <span>Laptop</span>
        </div>
        <div class="divaise">
          <router-link to='/library'><i class="fas fa-tablet-alt"></i></router-link>
          <span>Tablet</span>
        </div>
      </div>
    </div>
</template>

<script>
export default {
    name: 'ChoseDivase',
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
#ChoseDivase{
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  width: 100vw;
  height: 100vh;
}
.col{
   display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-left: 40px;
    height: 100vh;
}
i{
font-size: 42pt;
color: #f44336;
}
span{
  margin-top: 10px;
}
.divaise{
  background-color: #f4433663;
  border-radius: 50%;
  width: 120px;
  height: 120px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  color: white;
  margin: 40px;
}
</style>