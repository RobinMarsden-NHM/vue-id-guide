<template>
  <div class="idguide-wrapper">
    <IdGuideHeader
      :state="state"
    />
    <IdGuideMain
      :state="state"
      :current-state-obj="currentStateObj"
      @selectOption="selectOption($event)"
      @startGuide="startGuide"
    />
    <IdGuideFooter
      :history-index="historyIndex"
      :state-history="stateHistory"
      @gotoHome="gotoHome"
      @goBack="goBack"
      @goForward="goForward"
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
        displayMode: undefined,
        keyId: undefined,
        title: undefined,
        stepId: undefined
      },
      historyIndex: undefined,
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
      if (this.state.displayMode === this.$inputTypes.GUIDE) {
        const stepIndex = this.dataset.data[this.currentKeyIndex].steps.findIndex(el => {
          return el.step === this.state.stepId
        })
        return this.dataset.data[this.currentKeyIndex].steps[stepIndex]
      } else if (this.state.displayMode === this.$inputTypes.ANSWER) {
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
    this.handleInput(this.$inputTypes.HOME)
  },

  methods: {
    handleInput: function (type, data) {
      // console.log(`Handling input: ${type}`)
      let newDisplayMode = type
      let storeState = true
      switch (type) {
        case this.$inputTypes.HOME:
          if (this.state.displayMode === this.$inputTypes.HOME) {
            storeState = false
          }
          Object.assign(this.state, this.getInitialState())
          break
        case this.$inputTypes.GUIDE:
          Object.assign(this.state, this.getInitialState())
          break
        case this.$inputTypes.OPTION:
          if (data.step) {
            this.state.stepId = data.step
            newDisplayMode = this.$inputTypes.GUIDE
          } else if (data.key) {
            this.state.keyId = data.key
            newDisplayMode = this.$inputTypes.GUIDE
          } else if (data.answerId) {
            this.state.answerId = data.answerId
            this.state.stepId = undefined
            newDisplayMode = this.$inputTypes.ANSWER
          }
          break
        case this.$inputTypes.BACK:
          if (this.historyIndex > 0) {
            this.historyIndex--
            Object.assign(this.state, this.stateHistory[this.historyIndex])
            newDisplayMode = this.state.displayMode
          } else {
            newDisplayMode = this.$inputTypes.HOME
          }
          storeState = false
          break
        case this.$inputTypes.FORWARD:
          if (this.historyIndex < this.stateHistory.length - 1) {
            this.historyIndex++
            Object.assign(this.state, this.stateHistory[this.historyIndex])
            newDisplayMode = this.state.displayMode
          }
          storeState = false
          break
        default:
          throw new Error('An input type must be passed!')
      }

      this.state.displayMode = newDisplayMode

      if (this.state.displayMode === this.$inputTypes.GUIDE) {
        this.state.title = this.dataset.data[this.currentKeyIndex].description
        this.state.keyId = this.dataset.data[this.currentKeyIndex].key
      } else if (this.state.displayMode === this.$inputTypes.ANSWER) {
        this.state.title = this.currentStateObj.name
      }

      if (storeState) {
        if (typeof this.historyIndex === 'undefined') {
          this.historyIndex = 0
        } else {
          this.historyIndex++
        }
        this.stateHistory.length = this.historyIndex
        const stateHistoryObj = {}
        Object.assign(stateHistoryObj, this.state)
        this.stateHistory.push(stateHistoryObj)
      }
    },

    //  Initial input handlers
    gotoHome: function () {
      this.handleInput(this.$inputTypes.HOME)
    },

    startGuide: function () {
      this.handleInput(this.$inputTypes.GUIDE)
    },

    selectOption: function ($event) {
      this.handleInput(this.$inputTypes.OPTION, $event)
    },

    goBack: function () {
      this.handleInput(this.$inputTypes.BACK)
    },

    goForward: function () {
      this.handleInput(this.$inputTypes.FORWARD)
    },

    getInitialState: function () {
      return {
        keyId: 'master',
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
