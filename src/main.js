// entry point
const Vue = require("vue");
const VueRouter = require("vue-router");

Vue.use(VueRouter);

new Vue({
  el: document.getElementById("app"),
  render: r => r(require("./components/App.vue")),
  router: new VueRouter({
    routes: [{ path: "/", component: require("./features/busca.vue") }]
  })
});
