<template>
  <div id="app">
    <b-card>
          <b-form @submit="onSubmit" @reset="onReset" v-if="show">
            <b-row>
              <b-col md="auto">
                <b-form-group id="input-group-1" label="Query:" label-for="input-1"
                  description="Select your kind of query">
                  <b-form-select
                    id="input-1"
                    v-model="form.query"
                    :options = "queries"
                    required
                    placeholder="Enter form of query"
                  ></b-form-select>
                </b-form-group>
              </b-col>
              <b-col md = "auto">
                <b-form-group id="input-group-2" label="Area:" label-for="input-2">
                  <b-form-select
                    id="input-2"
                    v-model="form.area"
                    :options = "areas"
                    required
                    placeholder="Enter name of Area"
                  ></b-form-select>
                </b-form-group>
              </b-col>
              <b-col md="auto">
                <p>From: <b>'{{ form.valueFrom }}'</b></p>
                <b-calendar id="calendar-3" v-model="form.valueFrom" @context="onContext" locale="en-US"></b-calendar>
              </b-col>
              <b-col md="auto">
                <p>To: <b>'{{ form.valueTo }}'</b></p>
                <b-calendar id="calendar-4" v-model="form.valueTo" @context="onContext" locale="en-US"></b-calendar>
              </b-col>
            </b-row>
              <b-button type="submit" variant="primary">Run a single Query with semantic caching</b-button>
              <b-button type="reset" variant="danger">Comparing Directly vs Basic Caching vs Semantic Caching</b-button>
          </b-form>
            <b-button v-b-toggle.collapse-1 variant="primary">Query Result Collapse</b-button>
          <b-collapse id="collapse-1" class="mt-2">
            <b-card class="mt-3" header="Query result">
              <pre>{{ url }}</pre>
              <pre>{{ experiment }}</pre>
            </b-card>
          </b-collapse>
    </b-card>
  </div>
</template>
<script>
import Vue from 'vue'
import axios from 'axios'
import VueAxios from 'vue-axios'
import api from '@/components/SemCache/backend-api'
// import {RepositoryFactory} from './RepositoryFactory'
// const PostsRepository = RepositoryFactory.get('hello')
Vue.use(VueAxios, axios)

export default {

  data () {
    return {
      // urlHost: "http://localhost:8098",
      // urlHost: "http://15.236.59.149:8098",
      // urlHost: "http://193.55.95.161:8098",   //https://horizon.isima.fr/project/instances/
      hello: 'Hello from experiment not from api hello',
      experiment: null,
      url: null,
      form: {
        query: '2',
        area: 'A',
        valueFrom: '2020-02-03',
        valueTo: '2020-02-13'
      },
      queries: [{ text: 'Select One', value: null }, '1', '2', '3', '4'],
      areas: [{ text: 'Select One', value: null }, 'A', 'B', 'C', 'D'],
      show: true,
      errors: []
    }
  },
  methods: {
    onSubmit (evt) {
      evt.preventDefault()
      alert(JSON.stringify(this.form))
      console.log('Query' + this.form.query + 'Area' + this.form.area + 'T1' + this.form.valueFrom + 'T2' + this.form.valueTo)
      console.log('end')
      // var urlRunQuery = this.urlHost + "/api/runquery/"
      // this.url = urlRunQuery
      this.url = this.form.query + '/' +
                  this.form.area + '/' +
                  this.form.valueFrom + 'T00:00:00.0Z/' +
                  this.form.valueTo + 'T00:00:00.0Z'
      /* axios({ method: "GET", "url": this.url }).then(result => {
                this.experiment = result.data
            }, error => {
                console.error(error)
            })
        */
      api.getRunAQuery(this.url).then(response => {
        this.experiment = response.data
        console.log(response)
      })
        .catch(error => {
          this.errors.push(error)
        })
    },
    onReset (evt) {
      evt.preventDefault()
      alert(JSON.stringify(this.form))
      console.log('Query' + this.form.query + 'Area' + this.form.area + 'T1' + this.form.valueFrom + 'T2' + this.form.valueTo)
      console.log('end')
      // var urlCompareQuery = this.urlHost + "/api/runquery/compare/"
      // this.url = urlCompareQuery
      this.url = this.form.query + '/' +
                  this.form.area + '/' +
                  this.form.valueFrom + 'T00:00:00.0Z/' +
                  this.form.valueTo + 'T00:00:00.0Z'
      /* axios({ method: "GET", "url": this.url }).then(result => {
                this.experiment = result.data
            }, error => {
                console.error(error)
            }) */
      api.getRunCompare(this.url).then(response => {
        this.experiment = response.data
        console.log(response)
      })
        .catch(error => {
          this.errors.push(error)
        })
    },
    onContext (ctx) {
      this.context = ctx.acitiveDate
    },
    onContext2 (ctx) {
      this.context2 = ctx.acitiveDate
    }
  }
}
</script>
