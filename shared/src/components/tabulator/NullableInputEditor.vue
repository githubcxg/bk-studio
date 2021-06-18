<template>
  <div >
    <input :placeholder="params.placeholder" ref='input' type="text" v-model="value" @blur.prevent="submit" @change.prevent="submit">
    <i class="material-icons clear" @mousedown.prevent.stop="clear" title="Nullify Value">cancel</i>
  </div>
</template>
<script lang="ts">
import _ from 'lodash'
import Vue from 'vue'
export default Vue.extend({
  props: ['cell', 'params'],
  data() {
    return {
      value: null,
      rendered: false
    }
  },
  methods: {
    submit() {
      // some cases we always want null, never empty string
      if (this.params.allowEmpty === false && _.isEmpty(this.value)) {
        this.$emit('value', null)
      } else {
        this.$emit('value', this.value)
      }

    },
    clear() {
      console.log('clear clicked')
      this.$emit('value', null)
    }
  },
  watch: {
    rendered() {
      if (this.rendered) {
        this.value = this.cell.getValue()
        this.$refs.input.focus()
      }
    }
  },
  mounted() {
    // nothing really happens here, rendered watch is the real hook.

  }
})
</script>
<style lang="scss" scoped>
@import '@shared/assets/styles/_variables';
  .clear {
    position: absolute;
    top: 0;
    bottom: 0;
    right: 6px;
    display: flex;
    align-items: center;
    font-size: 15px;
    color: $text-lighter;
    &:hover {
      color: $text-dark;
    }
  }
</style>