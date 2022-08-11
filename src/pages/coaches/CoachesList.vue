<template>
  <section>
    <coach-filter @change-filter="setFilters"></coach-filter>
  </section>
  <section>
    <base-card>
      <div class="controls">
        <!-- <button>Refresh</button> -->
        <base-button>Refresh</base-button>
        <base-button link to="/register" v-if="!isCoach">Register Coach</base-button>

        <!-- <router-link to="/register">Register Coach</router-link> -->
      </div>
      <ul v-if="hasCoaches">
        <coach-item
          v-for="coach in filteredCoaches"
          :key="coach.id"
          :id="coach.id"
          :firstName="coach.firstName"
          :lastName="coach.lastName"
          :rate="coach.hourlyRate"
          :areas="coach.areas"
          :descript="coach.description"
        >
        </coach-item>
      </ul>
      <h3 v-else>No coaches</h3>
    </base-card>
  </section>
</template>

<script>
import CoachItem from '../../component/coaches/CoacheItem.vue';
import CoachFilter from '../../component/coaches/CoachFilter.vue';

export default {
  components: {
    CoachItem,
    CoachFilter,
  },
  data() {
    return {
      activeFiter: {
        frontend: true,
        backend: true,
        career: true,
      },
    };
  },

  computed: {
    filteredCoaches() {
      const coaches = this.$store.getters['coaches/coaches'];
      return coaches.filter((coach) => {
        if (this.activeFiter.frontend && coach.areas.includes('frontend')) {
          return true;
        }
        if (this.activeFiter.backend && coach.areas.includes('backend')) {
          return true;
        }
        if (this.activeFiter.career && coach.areas.includes('career')) {
          return true;
        }
        return false;
      });
    },
    hasCoaches() {
      return this.$store.getters['coaches/hasCoaches'];
    },
    isCoach() {
      return this.$store.getters['coaches/isCoach'];
    },
  },
  methods: {
    setFilters(updateFilters) {
      this.activeFiter = updateFilters;
    },
  },
};
</script>
