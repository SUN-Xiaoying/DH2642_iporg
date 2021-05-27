# TEST TW3.5 react.html !!!

1. We tried to implement both react and Vue,  but vue.html always alarmed that 'h is undefined'. We wonder how to transfer form react to vue gracefully?

Without define
`const React = { createElement: Vue.h };`


2. How to use "new Vue()" in vue.html directly?

1. Q: Why React.useEffect adds an EventListner then remove it when return? Does it mean nothing happens?

A: Actually, it is related to the lifecycle of components. Compared to VueJs, we add an eventListener when mounted() and remove it when unmounted().

4. Q: Why when I clicked the pic, the hash changed but the page stayed still?

A: We had the same problem because in our reactjs/show.js, React.useEffect() returns "

window.removeEventListener("hashchange", listener)

" directly. We solved this problem by wrapped this command with function() {}.

# User Evaluation

Participant 1
Task: Go through the whole application, and put the dishes he wants into the final menu.

- How many pages do you have in total?
- Four. SidebarView, SummaryView, SearchView, and DetailsView.
- I think it will be more clear if you have a welcome page to explain the main services this webpage
provided. And a navigation bar so I can jump to different pages directly without going back to open
another page.
- Exactly, the whole application is still in improvement, and any other trouble you have when using this web application?
- Not really. Very beautiful webpages by the way.
- Thank you and thanks for your advice, they are very practical and useful.


Participant 2

Task: Order food for three people within $100.


- Can I search the dishes by max price?
- Sorry, for now, the search bar can only search by dish name. But this idea sounds to be realistic.
- Yes, when I go to a restaurant for the first time, the average cost would be my primary consideration and it affects if I am willing to visit again. And what's confused me is that the number of guests. In real life, people who come together may not order the same dishes. Hence the amount of every dish should not change with the number of guests.
- Can't agree more, we will pay attention to it.


Summary

1. The page layout is not clear enough, missing navigation bar and main page.
2. Search function is not flexible enough, eg. fuzzy search, search by max price or ingredients.
3. Logic error in total price calculation, people who come together may order different dishes.