import { config } from "https://deno.land/x/dotenv@v0.5.0/mod.ts";

// If we wanna send an email we gotta use an API cause
// Google Cloud blocks port 25 (which all email is transferred on)
export function sendTestEmail() {
  fetch("https://api.mailjet.com/v3.1/send", {
    body: `{
      "Messages":[
        {
          "From": {
            "Email": "phocks@gmail.com",
            "Name": "Joshua Byrd"
          },
          "To": [
            {
              "Email": "phocks@gmail.com",
              "Name": "Joshua Byrd"
            }
          ],
          "Subject": "Greetings from Mailjet.",
          "TextPart": "My first Mailjet email",
          "HTMLPart": "My first Mailjet email",
          "CustomID": "AppGettingStartedTest"
        }
      ]
    }`,
    headers: {
      Authorization: config().MAILJET_KEY,
      "Content-Type": "application/json",
    },
    method: "POST",
  })
    .then((response) => response.json())
    .then((jsonData) => {
      console.log(jsonData);
    });
}


// Below here is demo code etc.

// const response = await fetch("https://api.rise.gq/");
// const json = await response.json();

// console.log(json);