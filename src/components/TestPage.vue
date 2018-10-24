<template>
  <div class="hello">

    <div class="add-room" v-on:click="showRoom = !showRoom">
      Добавить комнату
    </div>
    <div class="item-room"
      v-bind:class="{'show': showRoom}">

    </div>

    <div class="add-room" v-on:click="addNewRoom">
      Добавить комнату в массив
    </div>
    <ul>
      <li class=""
        v-for="(item, index) in rooms"
        v-bind:key="item.id"
        v-bind:class="item.addClass">
        <span>
          {{ item.id }}
        </span>
        </li>
    </ul>

  </div>
</template>

<script>
export default {
  name: 'TestPage',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      showRoom: false,
      rooms: [],
      nextItemId: 1,
      showRoomClass: 'item-room show'
    }
  },
  methods: {
    addNewRoom: function () {
      this.rooms.push({
        id: this.nextItemId++,
        addClass: this.showRoomClass
      })
      //this.saveTodos();
      //this.newRoom = ''
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.add-room{
  display: inline-block;
  padding: 5px 15px;
  margin-bottom: 15px;
  text-transform: uppercase;
  border: 1px solid red;
  cursor: pointer;
}
.item-room{
  width: 100px;
  height: 100px;
  background-color: grey;
  display: none;
}
.item-room.show{
  display: block
}
</style>
