<template>
  <div class="idguide-wrapper">
    <IdGuideHeader
      :state="state"
    />
    <IdGuideMain
      :state="state"
      :current-state-obj="currentStateObj"
      @selectOption="selectOption($event)"
      @gotoGuide="setDisplayMode('guide')"
    />
    <IdGuideFooter
      @gotoHome="setDisplayMode('home')"
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
      console.log('computing currentStateObj...')
      if (this.state.displayMode === 'guide') {
        const stepIndex = this.dataset.data[this.currentKeyIndex].steps.findIndex(el => {
          return el.step === this.state.stepId
        })
        return this.dataset.data[this.currentKeyIndex].steps[stepIndex]
      } else if (this.state.displayMode === 'answer') {
        console.log('answer block')
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
    this.setDisplayMode('home')
  },
  methods: {
    setDisplayMode: function (newMode) {
      console.log(`Setting display mode: ${newMode}`)
      switch (newMode) {
        case 'home':
          this.state = this.getInitialState()
          this.state.displayMode = 'home'
          break
        case 'guide':
          this.state = this.getInitialState()
          this.state.displayMode = 'guide'
          break
        case 'answer':
          this.state.displayMode = 'answer'
          this.state.title = this.currentStateObj.name
          break
        default:
          throw new Error('A display mode must be passed!')
      }
    },
    getInitialState: function () {
      return {
        keyId: 'master',
        title: undefined,
        stepId: '1'
      }
    },
    selectOption: function (e) {
      if (e.answerId) {
        this.state.stepId = undefined
        this.state.keyId = undefined
        this.state.answerId = e.answerId
        this.setDisplayMode('answer')
      } else if (e) {
        this.state.answerId = undefined
        if (e.step) {
          this.state.stepId = e.step
        } else if (e.key) {
          this.state.keyId = e.key
        }
        this.state.title = this.dataset.data[this.currentKeyIndex].description
        this.state.keyId = this.dataset.data[this.currentKeyIndex].key
        this.state.step = this.dataset.data[this.currentKeyIndex].steps[this.state.stepIndex]
      } else {
        throw new Error('An event must be passed to selectOption')
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
