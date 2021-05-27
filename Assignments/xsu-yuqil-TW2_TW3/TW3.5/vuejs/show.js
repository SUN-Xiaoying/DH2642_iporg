const Show = {
    props:['hash'],
    data(){
        return {counter:1};
    },
    mounted() {
        this.listener = (e) => {
          this.counter = this.counter + 1;
        };
        window.addEventListener("hashchange", this.listener);
      },
      unmounted() {
        window.removeEventListener("hashchange", this.listener);
      },
      render(h) {
        this.counter;
        return h(
          "div",
          { attrs: { class: this.hash === window.location.hash ? "" : "hidden" } },
          this.$slots.default
        );
      },
}