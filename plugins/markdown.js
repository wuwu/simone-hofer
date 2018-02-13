import Vue from 'vue';
import MarkdownIt from 'markdown-it';

Vue.mixin({
  methods: {
    md(message) {
      return MarkdownIt().render(message);
    },
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
