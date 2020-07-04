<template>
  <div class="overflow-hidden">
    <router-link to="/">
      <img class="absolute ml-4 mt-4 hidden lg:block" src="/img/back.svg" />
    </router-link>
    <Title class="mt-8" :mobile="true" :Text="info.text" />
    <div class="w-screen flex">
      <div
        v-if="info.Media.type === 'NA'"
        class="bg-gray-300 mx-auto mt-8 flex text-xl hover:text-6xl"
        style="height: 25rem; width: 45rem;"
      >
        <span class="my-auto mx-auto"> Media Demo Comming Soon </span>
      </div>
      <img
        v-if="info.Media.type === 'img'"
        :src="'/img/' + info.Media.link"
        class="bg-gray-300 mx-auto mt-8 text-xl hover:text-6xl"
      />
    </div>
    <div class="w-screen flex">
      <router-link
        v-if="info.link.link === '/'"
        to="/"
        class="p-2 lg:p-4 rounded-lg bg-blue-500 mx-auto mt-4 text-white text-xl hover:bg-white hover:text-blue-500 border-2 border-blue-500 transition duration-200 ease-in-out"
      >
        {{ info.link.text }}
      </router-link>
      <a
        v-if="info.link.link != '/'"
        :href="info.link.link"
        class="p-2 lg:p-4 mt-4 rounded-lg mx-auto bg-blue-500 text-white text-xl hover:bg-blue-700 transition duration-200 ease-in-out"
      >
        {{ info.link.text }}
      </a>
    </div>
    <div class="lg:w-screen flex mt-8">
      <div class="xl:flex mx-auto">
        <div class="mx-auto lg:px-16 text-2xl px-4">
          <span style="font-family:'Lobster" class="text-3xl text-blue-500">
            {{ info.text }} </span
          >{{ info.description }}
        </div>
        <div class="flex">
          <div class="lg:px-16 text-2xl block lg:flex">
            <div
              v-for="tech in info.TechnologiesUsed"
              :key="tech"
              class="my-auto py-2 px-4 text-xl rounded-full bg-gray-800 mx-2 my-2 inline-block"
              :class="{
                'bg-green-500': tech === 'Vue.js',
                'bg-teal-300': tech === 'Tailwind.CSS',
                'text-white':
                  tech != 'Tailwind.CSS' &&
                  tech != 'JavaScript' &&
                  tech != 'Chart.js',
                'bg-red-700': tech === 'Axios',
                'bg-yellow-500': tech === 'JavaScript',
                'bg-red-300': tech === 'Chart.js',
                'bg-green-800': tech === 'MongoDB',
              }"
            >
              <span class="mx-auto">{{ tech }}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Title from "@/components/Title.vue";
import axios from "axios";

export default {
  components: {
    Title,
  },
  data() {
    return {
      info: null,
    };
  },
  name: "ProjectView",
  props: ["id"],
  created() {
    var current;

    switch (this.id) {
      case "lectio":
        current = 0;
        break;
      case "prepri":
        current = 1;
        break;
      case "site":
        current = 2;
        break;
    }

    axios
      .get("/projects.json")
      .then((response) => (this.info = response.data.projects[current]));
  },
};
</script>
