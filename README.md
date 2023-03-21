# soon-takehome

I'm still trouble-shooting why github pages isn't displaying this, but I should have it workign soon. 

## About

A take-home challenge for an apprenticeship opportunity with Soon_. I chose User Flow 2: updating the basket. 
## Technologies used
I've chosen to do this in React with typescript. Firstly because they are technologies I know Soon_ uses. And more importantly, because I'm done with trying to manipulate the DOM with Vanilla JS. 

Meta take the wheel!

## Assumptions
I'm assuming that:
- Since I'm not working with a team, it isn't necessary to make branches for features I'm working on.
- However my commits should be small, discrete and frequent in order to tell a legible story of the development of the project to my potential employers. (Hello!)
- I'll need to follow the design as closely as possible and use the exact colors, fonts and assets in the page.
- The design will none-the-less need to be responsive, so I'll need a layout that's suitable for mobile devices but follows the same design principles.
- The components I make will need to be reusable, so the data must be passed using props.
- While in a real-world environment the product details will come from a server via a fetch function, I don't have to implement that in this challenge.

## Process
Written before starting the project:
1. I'll first create a static version of the page, following the style closely and taking a mobile-first approach.
2. Then I'll use the State Hook, so that the buttons update the DOM.
3. Next, I'll use props to pass in the data for the page.
4. Finally, I'll test for accessibility and include aria roles/attributes where necessary.

## Reflections

Written after completing it:

Unfortunately I wasn't able to implement a running total of all the items in the basket. I spent a lot of time refactoring code to use state hooks for tracking item quantity and total number of items.

By the time I got to implementing a running total I realised I should have probably been using a single state for the whole thing: an object that contains the items in the basket and the quantity of each item, which each component could have updated or taken data from.

Ah well, next time!
