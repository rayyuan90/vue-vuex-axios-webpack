export const checkAuth = {
  beforeCreate() {
    if (!this.$store.state.auth.isAuthenticated) {
      this.$router.push({ name: 'login' });
      return;
    }
  }
};
