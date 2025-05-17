const getSuOfArguments = (...args: number[]) => {
  return args.reduce((prev, curr) => prev + curr, 0)
}

console.log(getSuOfArguments(1, 2, 3, 4, 5))
