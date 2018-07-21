<template>
  <div>
    <h2>Register</h2>
    <input v-model="email" 
      type="email" 
      name="email" 
      placeholder="email"
    >
    <br>
    <input v-model="password" 
      type="password" 
      name="password" 
      placeholder="password"
    >
    <br>
    <button @click="register">Register</button>
    
  </div>
</template>

<script>
import AuthService from '@/services/AuthService'

export default {
  data() {
    return {
      email: '',
      password: ''
    }
  },
  methods: {
    async register() {
      const response = await AuthService.register({
        email: this.email,
        password: this.password
      })

      console.log(response.data)
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
