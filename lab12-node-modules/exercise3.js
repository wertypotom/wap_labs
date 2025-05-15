/* 
1. fs.readFileSync() — Synchronous (Blocking)

const fs = require('fs');

const data = fs.readFileSync('files/example.txt', 'utf-8');
console.log('Sync:', data);

Pros:
Simple to use
Good for scripts or startup logic

Cons:
Blocking — stops everything else until file is read
Avoid in production for large files or concurrent requests
*/

/* 
2. fs.readFile() — Asynchronous with Callback
const fs = require('fs');

fs.readFile('files/example.txt', 'utf-8', (err, data) => {
  if (err) return console.error('Error reading file:', err);
  console.log('Async (Callback):', data);
});

Pros:
Non-blocking — lets Node handle other things while reading
Safe for concurrent requests

Cons:
Uses callback style, which can become messy with nested logic
*/

/* 
3. fs.promises.readFile() — Asynchronous with async/await

const fs = require('fs').promises;

async function readFileAsync() {
  try {
    const data = await fs.readFile('files/example.txt', 'utf-8');
    console.log('Async (Promise):', data);
  } catch (err) {
    console.error('Error reading file:', err);
  }
}

readFileAsync();
Pros:
Modern syntax with async/await
Clean and readable

Cons:
Slightly more setup, needs async context
*/

/* 
4. fs.createReadStream() — Streaming

const fs = require('fs');

const stream = fs.createReadStream('files/example.txt', { encoding: 'utf-8' });

stream.on('data', chunk => {
  console.log('Stream chunk:', chunk);
});

stream.on('end', () => {
  console.log('Stream finished');
})

Pros:
Ideal for large files
Memory efficient — processes chunks instead of loading entire file

Cons:
More complex. Can create a back pressure situation
Requires handling data, end, error events
*/
