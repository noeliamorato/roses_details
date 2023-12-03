import { url } from "./getdelete";

export const postput = async (complemento, data, metodo) => {
  const response = await fetch(url + complemento, {
    method: metodo ? "PUT" : "POST",
    headers: {
      Accept: "application/josn",
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });
  if (response.ok) {
    const json = response.json();
    return json;
  }
};
