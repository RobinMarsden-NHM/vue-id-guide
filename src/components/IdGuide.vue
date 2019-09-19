<template>
  <div class="idguide-wrapper">
    <IdGuideHeader
      :state="state"
    />
    <IdGuideMain
      :state="state"
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
        keyIndex: 0,
        stepIndex: 0,
        keyId: undefined,
        title: undefined,
        step: {},
        answer: {}
      }
    }
  },
  mounted () {
    this.setDisplayMode('home')
  },
  methods: {
    setDisplayMode: function (newMode) {
      switch (newMode) {
        case 'home':
          this.state = this.getInitialState()
          this.state.displayMode = 'home'
          break
        case 'guide':
          this.state = this.getInitialState()
          this.state.displayMode = 'guide'
          this.showStep()
          break
        case 'answer':
          console.log('Setting "answer" display mode')
          this.state.title = this.state.answer.name
          this.state.displayMode = 'answer'
          break
        default:
          throw new Error('A display mode must be passed!')
      }
      console.log(this.state)
    },
    getInitialState: function () {
      //  Returns state to entrypoint of ID guide
      return {
        keyIndex: 0,
        stepIndex: 0,
        keyId: undefined,
        title: undefined,
        step: {},
        answer: {}
      }
    },
    showStep: function () {
      this.state.title = this.dataset.data[this.state.keyIndex].description
      this.state.keyId = this.dataset.data[this.state.keyIndex].key
      this.state.step = this.dataset.data[this.state.keyIndex].steps[this.state.stepIndex]
      console.log(this.state)
    },
    selectOption: function (e) {
      console.log('Selecting option...')
      if (e.answerId) {
        //  If answer is passed
        console.log(`*****Answer: ${e.answerId}`)
        this.state.answer = this.dataset.answers[this.getAnswerIndex(e.answerId)]
        this.state.step = {}
        this.setDisplayMode('answer')
      } else if (e) {
        //  ...else if event passes new step info
        if (e.step) {
          this.state.stepIndex = this.getStepIndex(e.step)
        } else if (e.key) {
          this.state.keyIndex = this.getKeyIndex(e.key)
        }
        this.showStep()
      } else {
        throw new Error('An event must be passed to selectOption')
      }
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
    },
    getAnswerIndex: function (answerId) {
      return this.dataset.answers.findIndex(el => {
        return el.id === answerId
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
