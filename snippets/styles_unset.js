// What color is the <p> tag’s text?

<p class="hello">Hello</p>

<style>
  body { color: red; }
  p { color: green; }
  .hello { color: unset; }
</style>

// The answer is red since unset “unsets” the style of the p tag, so it inherits from its parent – body.


