<template>
  <div class="idguide-wrapper">
    <IdGuideHeader
      :state="state"
    />
    <IdGuideMain
      :state="state"
      :current-state-obj="currentStateObj"
      @selectOption="handleInput('option', $event)"
      @startGuide="handleInput('guide')"
    />
    <IdGuideFooter
      @gotoHome="handleInput('home')"
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
      default: () => ({})
    }
  },

  data: function () {
    return {
      state: {
        displayMode: 'home',
        keyId: 'master',
        title: undefined,
        stepId: '1'
      },
      stateHistory: []
    }
  },

  computed: {
    currentKeyIndex: function () {
      return this.dataset.data.findIndex(el => {
        return el.key === this.state.keyId
      })
    },

    currentStateObj: function () {
      if (this.state.displayMode === 'guide') {
        const stepIndex = this.dataset.data[this.currentKeyIndex].steps.findIndex(el => {
          return el.step === this.state.stepId
        })
        return this.dataset.data[this.currentKeyIndex].steps[stepIndex]
      } else if (this.state.displayMode === 'answer') {
        const answerIndex = this.dataset.answers.findIndex(el => {
          return el.id === this.state.answerId
        })
        return this.dataset.answers[answerIndex]
      } else {
        return {}
      }
    }
  },

  mounted () {
    this.handleInput('home')
  },

  methods: {
    handleInput: function (type, data) {
      console.log(`Handling input: ${type}`)
      console.log(`${JSON.stringify(data)}`)
      switch (type) {
        case 'home':
          this.state = this.getInitialState()
          break
        case 'guide':
          this.state = this.getInitialState()
          break
        case 'option':
          if (data.step) {
            this.state.stepId = data.step
            type = 'guide'
          } else if (data.key) {
            this.state.keyId = data.key
            type = 'guide'
          } else if (data.answerId) {
            console.log('answer!!')
            this.state.answerId = data.answerId
            this.state.stepId = undefined
            type = 'answer'
          }
          break
        case 'back':
          break
        case 'forward':
          break
        default:
          throw new Error('An input type must be passed!')
      }
      this.state.displayMode = type
      if (this.state.displayMode === 'guide') {
        this.state.title = this.dataset.data[this.currentKeyIndex].description
        this.state.keyId = this.dataset.data[this.currentKeyIndex].key
        this.state.step = this.dataset.data[this.currentKeyIndex].steps[this.state.stepIndex]
      } else if (this.state.displayMode === 'answer') {
        this.state.title = this.currentStateObj.name
      }
    },

    getInitialState: function () {
      return {
        keyId: 'master',
        title: undefined,
        stepId: '1'
      }
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
