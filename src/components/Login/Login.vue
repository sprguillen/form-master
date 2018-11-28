<template>
  <div class="login">
    <div class="login-container">
      <b-card header="Login" class="mb-2" :header-class="loginHeaderClass">
        <img
          src="../../images/logo.png"
          alt="Logo"
          class="login-container__img" />
        <b-form @submit.prevent="onSubmit">
          <b-form-group label="Email address:" label-for="emailInput">
            <b-form-input
              id="emailInput"
              type="email"
              v-model="form.email"
              placeholder="Enter email"
              required>
            </b-form-input>
          </b-form-group>
          <b-form-group label="Password:" label-for="passInput">
            <b-form-input
              id="passInput"
              type="password"
              v-model="form.pass"
              placeholder="Enter password"
              required>
            </b-form-input>
          </b-form-group>
          <b-button variant="primary" type="submit">Login</b-button>
          <b-button variant="outline-primary" to="register">Register</b-button>
        </b-form>
      </b-card>
    </div>
  </div>
</template>

<script>
import axios from 'axios';
import { LOGIN_URL } from '../../router/apiRoutes';

export default {
  name: 'Login',
  data() {
    return {
      form: {
        email: '',
        pass: '',
      },
      loginHeaderClass: 'card-header-class',
    };
  },
  methods: {
    /**
     * Submit login form
     * @private
     */
    onSubmit() {
      axios.post(LOGIN_URL, {
        email: this.form.email,
        password: this.form.pass,
      }).then((res) => {
        localStorage.setItem('usertoken', res.data);
        this.clearForm();
      }).catch((err) => {
        alert(err);
      });
    },

    /**
     * Clear form model values
     * @private
     */
    clearForm() {
      this.form.email = '';
      this.form.pass = '';
    },
  },
};
</script>

<style lang="scss" scoped>
  @import "../../scss/components/Login/login";
</style>
