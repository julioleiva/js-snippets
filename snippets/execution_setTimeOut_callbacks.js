// What gets logged?

let sharedVariable = "initial";

setTimeout(() => {
  sharedVariable = "updated by first timeout";
}, 500);

setTimeout(() => {
  if (sharedVariable === "initial") {
    console.log("Shared variable not yet updated");
  } else {
    console.log("Shared variable was already updated");
  }
}, 500);


// In JavaScript, the execution order for setTimeout callbacks with identical delays aren’t deterministic. This means we aren’t guaranteed that the first timeout callback will execute first (which can be the cause of some nasty and difficult to reproduce bugs). In reality it’s almost always what you’d expect (“Shared variable was already updated”), but it’s best not to rely on that behavior.