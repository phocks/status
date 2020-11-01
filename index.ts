// Deno cli argument parser
import { parse } from "https://deno.land/std@0.76.0/flags/mod.ts";

const args = parse(Deno.args);

// Simple hello world
if (args._[0] === "hello") {
  console.log("Hello world!");
}

// Testing API fetch
if (args._[0] === "count") {
  const response = await fetch("https://api.rise.gq/");
  const json = await response.json();

  console.dir(json);
}
