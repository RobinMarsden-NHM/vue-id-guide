<template>
  <div class="idguide-wrapper">
    <IdGuideHeader
      :state="state"
    />
    <IdGuideMain
      :state="state"
      @selectOption="selectOption($event)"
    />
    <IdGuideFooter
      @selectOption="selectOption"
    />
  </div>
</template>

<script>
import IdGuideHeader from './IdGuideHeader.vue'
import IdGuideMain from './IdGuideMain.vue'
import IdGuideFooter from './IdGuideFooter.vue'

export default {
  components: {
    IdGuideHeader,
    IdGuideMain,
    IdGuideFooter
  },
  props: {
    dataset: {
      type: Object,
      required: true,
      default: () => ({
        title: undefined
      })
    }
  },
  data: function () {
    return {
      state: {
        keyIndex: 0, // Holds index of current 'key' in 'data' array
        stepIndex: 0, // Holds index of current step in current key's 'step' array
        keyId: undefined, // Holds name of current key
        title: undefined, // Holds current title text, ie description of current key or answer name
        step: {}, // Holds current step object
        answer: {} // Holds answer if arrived at
      }
    }
  },
  mounted () {
    this.selectOption()
  },
  methods: {
    selectOption: function (e) {
      if (this.state.step.options && this.state.step.options.length > 0) {
        this.state.answer = {}
        this.state.step.options = []
      }
      if (e) {
        //  ...if event passes new state info
        if (e.step) {
          this.state.stepIndex = this.getStepIndex(e.step)
        } else if (e.key) {
          this.state.keyIndex = this.getKeyIndex(e.key)
        } else {
          //  ...handle answers
          console.log(e.answer)
          this.state.step = {}
          this.state.stepId = undefined
          this.state.keyId = undefined
          this.state.answer = {
            name: e.answer
          }
        }
      } else {
        //  ...default to first page of dataset
        this.state.keyIndex = 0
        this.state.stepIndex = 0
      }
      this.updateContent()
    },
    updateContent: function () {
      if (this.state.answer.name) {
        this.state.title = this.state.answer.name
      } else {
        this.state.title = this.dataset.data[this.state.keyIndex].description
        this.state.keyId = this.dataset.data[this.state.keyIndex].key
        this.state.step = this.dataset.data[this.state.keyIndex].steps[this.state.stepIndex]
      }
    },
    logDataset: function (e) {
      console.log('Logging dataset...')
      console.log(this.dataset)
    },
    getKeyIndex: function (keyId) {
      return this.dataset.data.findIndex(el => {
        return el.key === keyId
      })
    },
    getStepIndex: function (stepId) {
      return this.dataset.data[this.state.keyIndex].steps.findIndex(el => {
        return el.step === stepId
      })
    }
  }
}
</script>

<style lang="scss">
.idguide-wrapper {
  position: relative;
  display: flex;
  height: inherit;
  flex-direction: column;
  justify-content: flex-start;
}
</style>
