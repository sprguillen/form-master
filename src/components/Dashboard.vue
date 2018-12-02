<template>
  <div class="dashboard main-bg">
    <b-navbar
      toggleable="md"
      type="light"
      variant="light"
      class="border border-light dashboard-nav">
      <b-navbar-toggle target="nav_collapse"></b-navbar-toggle>
      <b-navbar-brand href="#">
        <img src="../images/logo.png" class="dashboard-nav__img d-inline-block align-top" />
        Form Master
      </b-navbar-brand>
      <b-collapse is-nav id="nav_collapse">
        <b-navbar-nav>
          <b-nav-item href="#">
            <icon class="page-header__icon" name="clone" /> Forms
          </b-nav-item>
          <b-nav-item href="#">
            <icon class="page-header__icon" name="cog" /> Settings
          </b-nav-item>
          <b-nav-item href="#">
            <icon class="page-header__icon" name="users" /> Users
          </b-nav-item>
          <b-nav-item href="#">
            <icon class="page-header__icon" name="info-circle" /> How to Use
          </b-nav-item>
        </b-navbar-nav>
        <b-navbar-nav class="ml-auto">
          <b-nav-item-dropdown right>
            <!-- Using button-content slot -->
            <template slot="button-content">
              <em>{{ user.name }}</em>
            </template>
            <b-dropdown-item href="#">Profile</b-dropdown-item>
            <b-dropdown-item @click="logOut">Signout</b-dropdown-item>
          </b-nav-item-dropdown>
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>
  </div>
</template>

<script>
import 'vue-awesome/icons/clone';
import 'vue-awesome/icons/cog';
import 'vue-awesome/icons/users';
import 'vue-awesome/icons/info-circle';

export default {
  name: 'Dashboard',
  computed: {
    user() {
      return this.$store.getters.getLoggedInUser;
    },
  },
  methods: {
    logOut() {
      localStorage.removeItem('usertoken');
      this.$router.go();
    },
  },
};
</script>
<style lang="scss" scoped>
  @import "../scss/components/dashboard";
</style>
