/* JavaScript has a new(ish) Intl API. You may be thinking “Internationalization? I only have users in the US, why would I use this?“. You fool, take a look. Here’s what it can do.

Format Dates: Similar to the toLocaleDateString method on the Date object, you can use this to format Dates, but with Intl you get some extra options like timeZone */

const date = new Date(Date.now());

new Intl.DateTimeFormat("en-US", {
  timeZone: "America/Los_Angeles",
  minute: "numeric",
  hour: "numeric",
}).format(date);

// 9:45 AM (returns the current time in that timeZone)
// Format Numbers: You can also use Intl to format Numbers.

new Intl.NumberFormat("en-GB", {
  style: "unit",
  unit: "liter",
  unitDisplay: "long",
}).format(1); // '1 litre'


/* Format Lists: As Oxford comma maximalists, we appreciate that it can render lists properly too. */

const list = ["Motorcycle", "Bus", "Car"];

new Intl.ListFormat(
  "en-US", 
  { style: "long", type: "conjunction" }
).format(list); // 'Motorcycle, Bus, and Car'


/*Text Segmentation:

The last feature we’ll highlight (there are more) is language specific text segmentation. Doing a str.split('') on non-english strings is a good way to introduce bugs.*/

const str = "吾輩は猫である。名前はたぬき。";
console.table(str.split(" "));
// ['吾輩は猫である。名前はたぬき。']
// The two sentences are not correctly segmented.

const segmenterJa = new Intl.Segmenter("ja-JP", { 
  granularity: "word" 
});

const segments = segmenterJa.segment(str);

console.table(Array.from(segments));
