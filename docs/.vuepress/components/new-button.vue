
<template>
  <el-button
    class="dt-button"
    @click="handleClick"
    :type="type"
  >
  <slot></slot>
  </el-button>
</template>
 
<script>
export default {
  name: 'NewButton',

  props: {
    size: String,
    type: {
      type: String,
      default: 'default',
    },
  },
  methods: {
    handleClick(event) {
      this.$emit('click', event)
    },
  },
  mounted() {},
}
</script>