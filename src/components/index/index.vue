<template xmlns:v-model="http://www.w3.org/1999/xhtml">
  <div class="container">
    <input v-model:value="userName" type="text" class="form-control" id="userName">
    <p>userName:{{userName}}</p>
    <input v-model::value="userPwd" type="password" class="form-control" id="userPwd">
    <p>userPwd:{{userPwd}}</p>
    <button @click="login" type="button" class="btn btn-primary">Primary</button>
  </div>
</template>

<script src="./index.js"></script>

<style scoped src="./index.css"></style>
