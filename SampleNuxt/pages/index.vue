<template>
  <v-row justify="center" align="center">
    <v-col cols="12" sm="8" md="6">
      <div class="text-center">
        <logo />
        <vuetify-logo />
      </div>
      <v-card>
        <v-card-title class="headline">
          Welcome to the Vuetify + Nuxt.js template
        </v-card-title>
        <v-card-text>
         <v-card>
      <v-card-title>
        <v-text-field
          v-model="search"
          append-icon="mdi-magnify"
          label="Search"
          single-line
          hide-details
        ></v-text-field>
      </v-card-title>
      <v-data-table
        :headers="headers"
        :items="allUsers"
        :search="search"
      ></v-data-table>
    </v-card>
        </v-card-text>
        <v-card-actions>
          <v-spacer />
          <v-btn
            color="primary"
            nuxt
            to="/inspire"
          >
            Continue
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-col>
  </v-row>
</template>

<script>
import Logo from "~/components/Logo.vue";
import VuetifyLogo from "~/components/VuetifyLogo.vue";

import Postservice from "../services/Postservice";
export default {
  auth: false,
  components: {
    Logo,
    VuetifyLogo,
  },
  data() {
    return {
      search: "",

      headers: [
        { text: "first_name", value: "name" },
        { text: "id", value: "id" },
      ],
      allUsers: [],
    };
  },
  async created() {
    try {
      const res = await Postservice.getActiveUsers();
      this.allUsers = res.data;
      // console.log("this isi all users", this.allUsers);
    } catch (err) {
      // console.log("error is ", err);
    }
  },
};
</script>
