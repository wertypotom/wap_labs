;(async () => {
  const response = await fetch('https://dummyjson.com/recipes')
  const data = await response.json()

  data.recipes.forEach((recipe) => {
    console.log(recipe.name)
  })
})()
