/*How can you remove the event listeners from this element without calling removeEventListener?*/

const element = document.querySelector('button');

element.addEventListener('click', () => {
  console.log('clicked');
});

element.addEventListener('mouseover', () => {
  console.log('hovered');
});

element.addEventListener('mouseout', () => {
  console.log('unhovered');
});

element.addEventListener('focus', () => {
  console.log('focused');
});

/*You can use an AbortController to remove all the event listeners at once. When passed a signal as an option, the event listener will be removed when the AbortSignal’s abort() method is called.*/

const controller = new AbortController();
const { signal } = controller;

element.addEventListener('click', () => {
  console.log('clicked');
}, { signal });

element.addEventListener('mouseover', () => {
  console.log('hovered');
}, { signal });

element.addEventListener('mouseout', () => {
  console.log('unhovered');
}, { signal });

element.addEventListener('focus', () => {
  console.log('focused');
}, { signal });

controller.abort();
Note: Older browsers may not support the options parameter for addEventListener, but it is supported in all modern browsers.