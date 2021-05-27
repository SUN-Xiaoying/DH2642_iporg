const SearchPresenter = {
    props: ["model", "h", "summaryNav", "detailsNav"],
    data() {
      return {
        promise: DishSource.searchDishes({}),
        data: null,
        error: null,
        text: "",
        type: "",
      };
    },
    created() {
      this.promise.then(data => this.data = data).catch(error => this.error = error);
    },
    render(h){
        return h("div", {}, [
            h(SearchFormView, {
              props: {
                onText : x => this.text=x,
                onType : x => this.type=x,
                onSearch: (text, type) => {
                  this.promise = DishSource.searchDishes({
                    type: type,
                    query: text,
                  });
                  this.promise
                    .then((data) => {
                      this.data = data;
                    })
                    .catch((error) => {
                      this.error = error;
                    });
                },
                summaryNav: this.summaryNav,
              },
            }),
            promiseNoData(this.promise, this.error, this.data, h) ||
              SearchResultView({
                h,
                searchResults: this.data.results,
                dishChosen: (id) => {
                  this.model.setCurrentDish(id);
                  this.detailsNav.code();
                },
              }),
          ]);
    },
}