import client from "./client";

const send = (message, listingId) =>
  client.post("/messages", { message, listingId });

/*
const send = (message, listingId) => {
  fetch("http://192.168.192.42:9000/api/messages", {
    method: "POST",
    body: {
      message: message,
      listingId: listingId,
    },
  })
    .then((response) => {
      console.log(response);
    })
    .then((responseJson) => {})
    .catch((err) => console.log(err));
};
*/

export default { send };
