// Practicing async/await

async function getUser() {
  try {
    let response = await fetch("https://jsonplaceholder.typicode.com/users/1");
    let data = await response.json();
    console.log("User data:", data);
  } catch (error) {
    console.log("Error fetching user:", error);
  }
}

getUser();

// Another example: simulating a delay with async/await
function delay(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

async function showMessages() {
  console.log("Message 1");
  await delay(1000);
  console.log("Message 2 (after 1 second)");
  await delay(1000);
  console.log("Message 3 (after 2 seconds)");
}

showMessages();