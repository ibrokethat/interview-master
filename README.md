# Technical Test

## Tasks

- Hook up the Redux store so that when you click on a rating for a product it updates the store
- On hover over the rating component, temporarily set the rating to which ever 'pip' currently hovered over, set back to the value from the store on mouse out
- Implement the design in 'products-are-us.jpg'


## Notes

I didn't do the styling. Being honest, I couldn't be bothered as the sun was shining and I wanted to be out in it.
I didn't use TypeScript. I'm learning it, but decided I'd be better showing my approach generally as oppose to proving it.
I didn't run linting or integrate prettier - I would in production code.


## Approach

Decoupled the redux based data loading from the Products component by use of custom hooks. Makes each layer easier to test in isolation. Also means that in the real world, if some bright spark wanted to switch out redux for apollo (for example), only the data loader would require refactoring.

Created a generic data loader factory.

Moved the Rating into a common component. Allows it to be used in any parent component to rate any bound data point. I'd rethink the use of pushing state chages to the store on mouse over and mouse out if I were to refactor this.
