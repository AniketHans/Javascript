(function one() {
  //Named IIFE
  console.log("DB Connected"); // DB Connected
})();

(function () {
  // Un-named IIFE
  console.log("HAHA"); // HAHA
})();

(() => {
  console.log("DB connected 2"); // DB connected 2
})();

((name) => {
  console.log("Hi", name); // Hi mimosa
})("mimosa");
