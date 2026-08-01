// Practicing fetch() with different HTTP verbs

// GET request
async function getUsers() {
  let res = await fetch("https://jsonplaceholder.typicode.com/users");
  let data = await res.json();
  console.log("Status:", res.status);
  console.log(data);
}

// POST request
async function createUser() {
  let res = await fetch("https://jsonplaceholder.typicode.com/users", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ name: "Pratham", job: "Web Developer" })
  });
  let data = await res.json();
  console.log("Status:", res.status);
  console.log(data);
}

getUsers();
createUser();