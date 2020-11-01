// Deno cli argument parser
import { parse } from "https://deno.land/std@0.76.0/flags/mod.ts";
import { sleep } from "https://deno.land/x/sleep@v1.2.0/mod.ts";

const args = parse(Deno.args);
console.dir(args);

// Default response
if (args._.length === 0) {
  console.log("Enter a command");
}

// Simple hello world
if (args._[0] === "hello") {
  console.log("Hello world!");
}

// Testing API fetch
if (args._[0] === "count") {
  const response = await fetch("https://api.rise.gq/");
  const json = await response.json();

  console.dir(json);

  // for (let i = 0; i < 100; i++) {
  //   fetch("https://api.rise.gq/")
  //     .then((res) => res.json())
  //     .then((jsonData) => console.log(jsonData));

  //   await sleep(0.1);
  // }
}
