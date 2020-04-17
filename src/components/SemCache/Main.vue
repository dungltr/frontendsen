<template>
  <div id="app">
    <b-card>
      <Form />
    </b-card>
     <b-card no-body>
      <b-tabs card>
        <b-tab title="Run a query" active>
          <QuestionBox />
        </b-tab>
        <b-tab title="Run an experiment" active>
          <FunctionBox />
        </b-tab>
        <b-tab title="Customize an experiment" active>
          <CustomExperiment />
          <RunAQuery />
        </b-tab>
      </b-tabs>
     </b-card>
  </div>
</template>
<script>

// import Header from './components/Header.vue'
import Form from '@/components/SemCache/Form.vue'
import QuestionBox from '@/components/SemCache/QuestionBox.vue'
import FunctionBox from '@/components/SemCache/Experiment.vue'
import CustomExperiment from '@/components/SemCache/CustomExperiment.vue'
import RunAQuery from '@/components/SemCache/RunAQuery.vue'

export default {
  name: 'App',
  components: {
    Form,
    QuestionBox,
    FunctionBox,
    CustomExperiment,
    RunAQuery
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
