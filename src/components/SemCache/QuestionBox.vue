<template>
  <div id="app">
    <b-card no-body>
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
                <b-calendar id="calendar-1" v-model="form.valueFrom" @context="onContext" locale="en-US"></b-calendar>
              </b-col>
              <b-col md="auto">
                <p>To: <b>'{{ form.valueTo }}'</b></p>
                <b-calendar id="calendar-2" v-model="form.valueTo" @context="onContext" locale="en-US"></b-calendar>
              </b-col>
            </b-row>
              <b-button type="submit" variant="primary">Submit</b-button>
              <b-button type="reset" variant="danger">Reset</b-button>
          </b-form>
          <b-card class="mt-3" header="Form Data Result">
            <pre class="m-0">{{ form }}</pre>
          </b-card>
          <b-button v-b-toggle.collapse-2 variant="primary">The warpScript Collapse</b-button>
          <b-collapse id="collapse-2" class="mt-3">
            <b-card class="mt-4" header="WarpScript">
              <pre>{{ warpScript }}</pre>
            </b-card>
          </b-collapse>
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
Vue.use(VueAxios, axios)

export default {

  data () {
    return {
      // urlHost: "http://localhost:8098",
      // urlHost: "http://15.236.59.149:8098",
      // urlHost: "http://193.55.95.161:8098",   //https://horizon.isima.fr/project/instances/
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
      errors: [],
      warpScript: []
    }
  },

  created () {
    /*
    var urlExperiment = this.urlHost + "/api/hello"
    axios({ method: "GET", "url": urlExperiment }).then(result => {
                this.experiment = result.data
            }, error => {
                console.error(error)
            })
    */
    api.hello().then(response => {
      this.experiment = response.data
      console.log(response)
    })
      .catch(error => {
        this.errors.push(error)
      })
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
      api.getWarpAQuery(this.url).then(response => {
        this.warpScript = response.data
        console.log(response)
      })
        .catch(error => {
          this.errors.push(error)
        })
      api.getRunAQuery(this.url).then(response => {
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
    },
    onReset (evt) {
      evt.preventDefault()
      // Reset our form values
      this.form.query = null
      this.form.area = null
      // this.form.from = ''
      // this.form.to   = ''
      this.form.checked = []
      this.form.valueFrom = null
      this.form.valueTo = null
      // this.form.context2 = null
      // Trick to reset/clear native browser form validation state
      this.show = false
      this.$nextTick(() => {
        this.show = true
      })
    }
  }

}
</script>
