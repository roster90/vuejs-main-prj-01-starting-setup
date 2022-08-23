<template>
  <section>
    <base-card>
      <header>
        <h2>Request Recevied</h2>
      </header>
      <ul v-if="hasRequest">
        <request-item
          v-for="request in receivedRequest"
          :key="request"
          :email="request.userEmail"
          :message="request.message"
        >
        </request-item>
      </ul>
      <h3 v-else>You haven't received any request yet!</h3>
    </base-card>
  </section>
</template>

<script>
import RequestItem from '../../component/request/RequestItem.vue';

export default {
  components: {
    RequestItem,
  },

  computed: {
    receivedRequest() {
      return this.$store.getters['request/requests'];
    },
    hasRequest() {
      return this.$store.getters['request/requests'];
    },
  },
};
</script>

<style scoped>
header {
  text-align: center;
}

ul {
  list-style: none;
  margin: 2rem auto;
  padding: 0;
  max-width: 30rem;
}

h3 {
  text-align: center;
}
</style>