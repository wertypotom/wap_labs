type Person = {
  name: string
  age: number
  isStudent: boolean
}

const describePerson = (person: Person) => {
  return `This is ${person.name}. He is ${person.age} years old. He is ${
    person.isStudent ? 'student' : 'not student'
  }`
}
