/* 
const isPrime = (n: number) => {
 for (let i = 2, s = Math.sqrt(n); i <= s; i++)
 if (n % i === 0) return false;
 return n > 1;
};
*/

// Using .then() and .catch()
const isPrime = (n) => {
  for (let i = 2, s = Math.sqrt(n); i <= s; i++)
    if (n % i === 0) return Promise.reject({ prime: false })

  return n > 1
    ? Promise.resolve({ prime: true })
    : Promise.reject({ prime: false })
}

console.log('start')
isPrime(4).then(console.log).catch(console.error)
console.log('end')

// Using async/await

const isPrimeAsyncAwait = async (n) => {
  for (let i = 2, s = Math.sqrt(n); i <= s; i++)
    if (n % i === 0) return await Promise.reject({ prime: false })

  return n > 1
    ? await Promise.resolve({ prime: true })
    : await Promise.reject({ prime: false })
}

console.log('start')
isPrimeAsyncAwait(7).then(console.log).catch(console.error)
console.log('end')
