export async function getUsers() {
  let res = await fetch("http://localhost:3000/api/users", {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  });
  let users = await res.json();

  return users
}

export async function postUser(user) {
  let res = await fetch("http://localhost:3000/api/users", {
    method: "POST",
    body: JSON.stringify(user)
  });
  res = await res.json();
  return res
}
