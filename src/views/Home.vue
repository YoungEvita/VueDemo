<template>
  <div class="home">
    <p>Recieved message: {{ recievedMsg }}</p>
    <p><input v-model="sendMsg" /><button @click="sendMessage">Send</button></p>
  </div>
</template>

<script>
// @ is an alias to /src

export default {
    name: "Home",
    data() {
        return {
            sendMsg: "",
        };
    },
	computed:{
		recievedMsg() {
			return this.$store.state.message
		}
	},
	methods: {
		sendMessage() {
			this.$ws.ws.send(this.sendMsg)
		}
	}
};
</script>
<style scoped>
</style>
