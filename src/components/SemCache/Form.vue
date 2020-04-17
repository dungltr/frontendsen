<template>
    <b-card>
        <b-button v-b-toggle.collapse-cache variant="primary">The form of queries is</b-button>
        <b-collapse id="collapse-cache" class="mt-2">
                <pre>{{ form }}</pre>
        </b-collapse>
        <button class=”Search__button” @click="callRestService ()">CALL Spring Boot REST backend service</button>
        <h3>{{ response }}</h3>
    </b-card>
</template>
<script>
import axios from 'axios'
export default {
  data () {
    return {
      form: 'The form query (default: 2) is:\n Select TimeStamp, AggregateFunction(x)\n From Area (default: A)\n Where T1 < t < T2',
      response: [],
      errors: []
    }
  },
  methods: {
    callRestService () {
      axios.get(`/api/hello`)
        .then(response => {
          // JSON responses are automatically parsed.
          this.response = response.data
        })
        .catch(e => {
          this.errors.push(e)
        })
    }
  }
}
</script>
