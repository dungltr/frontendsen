<template>
 <div id="app">
    <b-card>
        <b-row>
        <b-col md="auto">
        <b-form-group id="input-group-11" label="Country:" label-for="input-11"
                description="Select your country">
                <b-form-select
                    id="input-11"
                    v-model="form.cou"
                    :options = "countries"
                    required
                    placeholder="Select your country"
                ></b-form-select>
        </b-form-group>
        </b-col>
            <b-col md="auto">
                <b-form-group id="input-group-21" label="Case:" label-for="input-21"
                description="Select your case">
                <b-form-select
                    id="input-21"
                    v-model="form.cas"
                    :options = "cases"
                    required
                    placeholder="Select your case"
                ></b-form-select>
                </b-form-group>
        </b-col>
        <b-col>
            <button class=”Search__button” @click="callRestService ()">Estimate the new value in the next day</button>
            <pre>{{ newcase }}</pre>
        </b-col>
        </b-row>
    </b-card>
 </div>
</template>
<script>
import Vue from 'vue'
import axios from 'axios'
import VueAxios from 'vue-axios'
import api from '@/components/covid/backend-api'
Vue.use(VueAxios, axios)
export default {
  data () {
    return {
      response: [],
      errors: [],
      form: {
        cou: 'ca',
        cas: 'newcase'
      },
      countries: [{ text: 'Select One', value: null }, 'fr', 'ca'],
      cases: [{ text: 'Select One', value: null }, 'newcase'],
      newcase: [],
      hello: []
    }
  },
  methods: {
    callRestService () {
      // evt.preventDefault()
      // alert(JSON.stringify(this.form))
      api.getCovid(this.form.cou, this.form.cas).then(response => {
        this.newcase = response.data
        console.log(response)
      })
        .catch(error => {
          this.errors.push(error)
        })
    },
    onReset (evt) {
      evt.preventDefault()
      // Reset our form values
      this.form.cou = null
      this.form.cas = null
      this.show = false
      this.$nextTick(() => {
        this.show = true
      })
    }
  }
}
</script>
