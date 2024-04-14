const res = ["👨", "‍", "👩", "‍", "👧", "‍", "👦"].join('')

console.log(res)

/*It’s the ”👨‍👩‍👧‍👦” emoji.

This works because the Unicode standard supports mapping individual emojis with zero-width joiners to create new emojis. In our case, taking individual emojis and joining them to get a family emoji. Wow, programming.*/