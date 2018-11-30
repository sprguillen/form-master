<template>
  <div class="dashboard">
    <b-navbar toggleable="md" type="dark" variant="dark">
      <b-navbar-toggle target="nav_collapse"></b-navbar-toggle>
      <b-navbar-brand href="#">Form Master</b-navbar-brand>
      <b-collapse is-nav id="nav_collapse">
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
