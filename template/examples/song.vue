<template>
  <div class="wrp">
    <svt-button type="success"
                disabled
                @click="clickFn">button</svt-button>

  </div>
</template>
<script>
export default {
  data() {
    return {
      name: false
    }
  },
  methods: {
    clickFn(e) {
      console.log(e)
    }
  }
}
</script>

<style lang="stylus" scoped>
.test
  width 500px
</style>
