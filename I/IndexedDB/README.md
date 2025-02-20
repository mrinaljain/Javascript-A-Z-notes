# IndexedDB

IndexedDB is a low-level API for client-side storage of significant amounts of structured data. Unlike cookies or localStorage, it allows for storing more complex data, such as objects, and provides support for indexing and searching data.
- IndexedDB supports asynchronous operations, which means it does not block the main thread.
- It is designed for handling large amounts of data and is more flexible and powerful than localStorage or sessionStorage.

## How IndexedDB Works
IndexedDB operates with:

Database (indexedDB.open()) – A collection of object stores.
Object Store – Similar to a table in SQL, but stores JavaScript objects.
Transactions – Ensure atomicity when reading/writing data.
Indexing – Helps retrieve records efficiently.
Requests – Asynchronous operations to read/write data.
```
const request = indexedDB.open("MyDatabase", 1);

request.onerror = (event) => {
  console.log("Error opening database:", event.target.error);
};

request.onsuccess = (event) => {
  console.log("Database opened successfully!");
  const db = event.target.result;
};

```

```
request.onupgradeneeded = (event) => {
  const db = event.target.result;

  // Create an object store (like a table)
  if (!db.objectStoreNames.contains("users")) {
    db.createObjectStore("users", { keyPath: "id" });
  }
};

```

```
request.onsuccess = (event) => {
  const db = event.target.result;
  const transaction = db.transaction("users", "readwrite");
  const store = transaction.objectStore("users");

  const user = { id: 1, name: "John Doe", age: 30 };
  store.add(user);

  transaction.oncomplete = () => console.log("User added successfully!");
};

```