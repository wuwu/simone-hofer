import Vue from 'vue';

Vue.mixin({
  methods: {
    getCorrectImagePath (url) {
      const path = [] = url.split('/')
      path.slice(1,3)
      let newPath = ''
      for (let i = 2; i < path.length; i++) {
        newPath += "/";
        newPath += path[i];
      }
      return newPath
    }
  },
});
