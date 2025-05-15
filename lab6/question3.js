function Animal(name, speed) {
  this.name = name
  this.speed = speed

  this.run = function (speed) {
    this.speed = speed
  }
}

function Rabbit(name, speed) {
  Animal.call(this, name, speed)
  this.hide = function () {
    console.log(this.name + ' hides')
  }
}

Animal.compareBySpeed = function (animal1, animal2) {
  if (animal1.speed > animal2.speed) {
    return animal1
  } else if (animal1.speed < animal2.speed) {
    return animal2
  } else {
    return null
  }
}

Object.setPrototypeOf(Rabbit, Animal)
Object.setPrototypeOf(Rabbit.prototype, Animal.prototype)
