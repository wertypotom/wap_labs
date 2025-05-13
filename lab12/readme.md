1. What is LibUV?

LibUV is a C library that provides Node.js with:

- Asynchronous I/O operations
- File system access
- Networking (TCP, UDP)
- Timers
- Thread pool
- Event loop

2. Difference between setImmediate(f) and setTimeout(f, time)

- setImmediate executes after I/O polling phase, setTimeout with minimum delay (0 ms) executes before I/O polling phase
- setImmediate runs as soon as possible after current poll phase. setTimeout waits at least the specified time

3. Difference between process.nextTick(f) and setImmediate(f)

- setImmediate executes after I/O polling phase, process.nextTick executes before the event loop continues, after the current operation
- process.nextTick has higher priority – always runs before I/O callbacks and setImmediate(). setImmediate has lower priority, it runs after I/O but before setTimeout()
