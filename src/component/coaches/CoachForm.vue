<template >
  <form @submit.prevent="submitForm">
    <div clas="form-control" :class="{ invalid: !firstName.isValid }">
      <label for="firstname"> First Name</label>
      <input
        type="text"
        id="firstname"
        v-model="firstName.val"
        @blur="clearValidity('firstName')"
      />
    </div>
    <div clas="form-control" :class="{ invalid: !lastName.isValid }">
      <label for="lastname"> Last Name</label>
      <input
        type="text"
        id="lastname"
        v-model="lastName.val"
        @blur="clearValidity('lastName')"
      />
    </div>
    <div clas="form-control" :class="{ invalid: !description.isValid }">
      <label for="description"> Description </label
      ><textarea
        row="5"
        id="description"
        v-model.trim="description.val"
        @blur="clearValidity('description')"
      ></textarea>
    </div>
    <div clas="form-control" :class="{ invalid: !rate.isValid }">
      <label for="rate">Hourly Rate</label>
      <input
        type="number"
        id="rate"
        v-model.number="rate.val"
        @blur="clearValidity('rate')"
      />
    </div>
    <div clas="form-control" :class="{ invalid: !areas.isValid }">
      <h3>Areas of expertise</h3>
      <div>
        <input
          type="checkbox"
          id="front-end"
          value="frontend"
          v-model="areas.val"
          @blur="clearValidity('areas')"
        />
        <label for="front-end">Frontend Development </label>
      </div>
      <div>
        <input
          type="checkbox"
          id="backend"
          value="backend"
          v-model="areas.val"
          @blur="clearValidity('areas')"
        />
        <label for="backend">Backend Development</label>
      </div>
      <div>
        <input
          type="checkbox"
          id="career"
          value="career"
          v-model="areas.val"
          @blur="clearValidity('areas')"
        />
        <label for="career">Career Advisor</label>
      </div>
    </div>
    <p v-if="!isFormValid">Please fix above and submit again!</p>
    <base-button>Register</base-button>
  </form>
</template>

<script>
export default {
  emits: ['save-data'],
  data() {
    return {
      firstName: {
        val: '',
        isValid: true,
      },
      lastName: {
        val: '',
        isValid: true,
      },
      description: {
        val: '',
        isValid: true,
      },
      rate: {
        val: '',
        isValid: true,
      },
      areas: {
        val: [],
        isValid: true,
      },
      isFormValid: true,
    };
  },
  methods: {
    validateForm() {
      if (this.firstName.val === '') {
        this.firstName.isValid = false;
        this.isFormValid = false;
      }
      if (this.lastName.val === '') {
        this.lastName.isValid = false;
        this.isFormValid = false;
      }
      if (this.description.val === '') {
        this.description.isValid = false;
        this.isFormValid = false;
      }
      if (!this.rate.val || this.rate.val < 0) {
        this.rate.isValid = false;
        this.isFormValid = false;
      }
      if (this.areas.val.length === 0) {
        this.areas.isValid = false;
        this.isFormValid = false;
      }
    },
    clearValidity(input) {
      this.isFormValid = true;
      this[input].isValid = true;
    },
    submitForm() {
      this.validateForm();

      if (!this.isFormValid) {
        return;
      }

      const formData = {
        fist: this.firstName.val,
        last: this.lastName.val,
        desc: this.description.val,
        rate: this.rate.val,
        areas: this.areas.val,
      };
      //   console.log(formData);
      this.$emit('save-data', formData);
    },
  },
};
</script>
<style scoped>
.form-control {
  margin: 0.5rem 0;
}

label {
  font-weight: bold;
  display: block;
  margin-bottom: 0.5rem;
}

input[type='checkbox'] + label {
  font-weight: normal;
  display: inline;
  margin: 0 0 0 0.5rem;
}

input,
textarea {
  display: block;
  width: 100%;
  border: 1px solid #ccc;
  font: inherit;
}

input:focus,
textarea:focus {
  background-color: #f0e6fd;
  outline: none;
  border-color: #3d008d;
}

input[type='checkbox'] {
  display: inline;
  width: auto;
  border: none;
}

input[type='checkbox']:focus {
  outline: #3d008d solid 1px;
}

h3 {
  margin: 0.5rem 0;
  font-size: 1rem;
}

.invalid label {
  color: red;
}

.invalid input,
.invalid textarea {
  border: 1px solid red;
}
</style>