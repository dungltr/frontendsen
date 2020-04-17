<template>
  <div id="app">
    <b-card class="mt-3" header="The cache will be store the queries">
       <pre>{{ queriesOnCache }} </pre>
    </b-card>
    <b-card class="mt-3" header="The queries will be run in the experiment">
       <pre>{{ queriesOnExperiment }} </pre>
    </b-card>
    <b-form @submit="onSubmit" @reset="onReset" v-if="show">
        <b-button type="submit" variant="primary">Run Experiment</b-button>
        <b-button type="reset" variant="primary">Clear Memcached</b-button>
    </b-form>
    <b-button v-b-toggle.collapse-1 variant="primary">Query Result Collapse</b-button>
      <b-collapse id="collapse-1" class="mt-2">
        <b-card class="mt-3" header="Experiment result">
          <pre>{{ experiment }}</pre>
        </b-card>
      </b-collapse>
  </div>
</template>
<script>
import Vue from 'vue'
import axios from 'axios'
import VueAxios from 'vue-axios'
import api from '@/components/SemCache/backend-api'
// import {RepositoryFactory} from './RepositoryFactory'
// const PostsRepository = RepositoryFactory.get('hell')
Vue.use(VueAxios, axios)
export default {
  data () {
    return {
      // urlHost: "http://localhost:8098",
      // urlHost: "http://15.236.59.149:8098",
      // urlHost: "http://193.55.95.161:8098",   //https://horizon.isima.fr/project/instances/
      hello: 'Hello from experiment not from api hello',
      experiment: [],
      queriesOnCache: [],
      queriesOnExperiment: [],
      res: [],
      errors: [],
      posts: [],
      isLoading: false,
      show: true
    }
  },
  created () {
    // var urlCache = this.urlHost + "/api/runquery/cachePrepare"
    // var urlQueriesPrepare = this.urlHost + "/api/runquery/queriesPrepare"
    // var urlHello = this.urlHost+"/api/hello"
    api.getCachePrepare().then(response => {
      this.queriesOnCache = response.data
      console.log(response)
    })
      .catch(error => {
        this.errors.push(error)
      })
    api.getQueriesPrepare().then(response => {
      this.queriesOnExperiment = response.data
      console.log(response)
    })
      .catch(error => {
        this.errors.push(error)
      })/*
      axios({ method: "GET", "url": urlCache }).then(result => {
              this.queriesOnCache = result.data
            }, error => {
                console.error(error)
            }),
      axios({ method: "GET", "url": urlQueriesPrepare }).then(result => {
              this.queriesOnExperiment = result.data
            }, error => {
                console.error(error)
            }) */
  },
  methods: {
    onSubmit (evt) {
      evt.preventDefault()
      // var urlExperiment = this.urlHost + "/api/runquery/experiment"
      alert(JSON.stringify('Do you want to run Experiment?'))
      /* axios({ method: "GET", "url": urlExperiment }).then(result => {
                this.experiment = result.data
            }, error => {
                console.error(error)
            }) */
      api.getRunExperiment().then(response => {
        this.experiment = response.data
        console.log(response)
      })
        .catch(error => {
          this.errors.push(error)
        })
    },
    onReset (evt) {
      evt.preventDefault()
      // var urlResetMemcached = this.urlHost + "/api/runquery/clearMemcached"
      alert(JSON.stringify('Do you want to reset Memcached?'))
      /* axios({ method: "GET", "url": urlResetMemcached }).then(result => {
                this.experiment = result.data
            }, error => {
                console.error(error)
            })
        */
      api.getClearMemcached().then(response => {
        this.experiment = response.data
        console.log(response)
      })
        .catch(error => {
          this.errors.push(error)
        })
    }

  }
}
</script>
