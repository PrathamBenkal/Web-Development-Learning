# Async & Await

- `async` functions always return a Promise
- `await` pauses execution until the Promise resolves, without blocking the rest of the app
- Makes asynchronous code (like API calls) read like synchronous code — easier than chaining `.then()`
- Errors are handled using `try/catch` instead of `.catch()`