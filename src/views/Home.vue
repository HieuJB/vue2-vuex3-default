<template>
<div class="home">
    <h1 >Xin chao cac ban</h1>
    <li v-for="todoss in isAuthenticated" :key="todoss">{{todoss}}</li>
</div>
</template>

<script>
// import { mapGetters } from 'vuex';
export default {
    name: "Home",
    data() {
      return {
        
      }
    },
    components: {},
    // computed:mapGetters(['isAuthenticated'])
};
</script>
