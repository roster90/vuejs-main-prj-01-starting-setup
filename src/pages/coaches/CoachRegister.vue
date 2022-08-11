<template>
  <section>
    <base-card>
      <h2>Register as a Coach now!</h2>
      <coach-form @save-data="saveDataCoach"></coach-form>
    </base-card>
  </section>
</template>


<script>
import CoachForm from '../../component/coaches/CoachForm.vue';

export default {
  components: {
    CoachForm,
  },
  computed:{

  },
  methods:{
      saveDataCoach(data){
          this.$store.dispatch('coaches/registerCoach', data);
          this.$router.replace('/coaches');
      }
  }
};
</script>
