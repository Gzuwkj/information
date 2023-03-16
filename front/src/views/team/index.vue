<template>
  <div>
    <team-abstract/>
    <team-teacher/>
    <team-student/>
  </div>
</template>

<script>
import TeamAbstract from "./TeamAbstract";
import TeamTeacher from "./TeamTeacher";
import TeamStudent from "./TeamStudent";

export default {
  name: "index",
  components: {
    TeamAbstract,
    TeamTeacher,
    TeamStudent
  },
  methods: {
  }
}

</script>

<style scoped>

</style>
