<template>
  <div id="app">
    <b-card>
        <b-button v-b-toggle.collapse-cache variant="primary">Queries on Cache Collapse</b-button>
        <b-collapse id="collapse-cache" class="mt-2">
                <pre>{{ cache }}</pre>
        </b-collapse>
        <b-form @submit="onSubmit" @reset="onReset" v-if="show">
            <b-button type="submit" variant="primary">Update Cached</b-button>
            <b-button type="reset" variant="danger">Clear Memcached</b-button>
        </b-form>
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
      // urlHost: "http://15.236.59.149:8098",   //amazon
      // urlHost: "http://193.55.95.161:8098",   //https://horizon.isima.fr/project/instances/
      experiment: null,
      cache: [],
      url: null,
      form: {
        query: null,
        area: null,
        valueFrom: null,
        valueTo: null
      },
      queries: [{ text: 'Select One', value: null }, '1', '2', '3', '4'],
      areas: [{ text: 'Select One', value: null }, 'A', 'B', 'C', 'D'],
      show: true
    }
  },
  created () {
    /* var urlReadAllMemcached = this.urlHost + "/api/runquery/readAllMemcached"
    axios({ method: "GET", "url": urlReadAllMemcached }).then(result => {
                this.cache = result.data
            }, error => {
                console.error(error)
            })
    */
    api.getReadAllMemcached().then(response => {
      this.cache = response.data
      console.log(response.data)
    })
      .catch(error => {
        this.errors.push(error)
      })
  },
  methods: {
    onSubmit (evt) {
      evt.preventDefault()
      // var urlReadAllMemcached = this.urlHost + '/api/runquery/readAllMemcached'
      alert(JSON.stringify('Do you want to update Memcached?'))
      /*
        axios({ method: "GET", "url": urlReadAllMemcached }).then(result => {
                this.cache = result.data
            }, error => {
                console.error(error)
            })
        */
      api.getReadAllMemcached().then(response => {
        this.cache = response.data
        console.log(response.data)
      })
        .catch(error => {
          this.errors.push(error)
        })
    },
    onReset (evt) {
      evt.preventDefault()
      // var urlResetMemcached = this.urlHost + "/api/runquery/clearMemcached"
      // var urlReadAllMemcached = this.urlHost + "/api/runquery/readAllMemcached"
      alert(JSON.stringify('Do you want to reset Memcached?'))
      /*
        axios({ method: "GET", "url": urlResetMemcached }).then(result => {
                this.cache = result.data
            }, error => {
                console.error(error)
            }),
        */
      api.getClearMemcached().then(response => {
        this.cache = response.data
        console.log(response.data)
      })
        .catch(error => {
          this.errors.push(error)
        })
    }
  }
}
</script>
