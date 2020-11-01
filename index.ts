const response = await fetch("https://api.rise.gq/");
const json = await response.json();

console.log(json);
