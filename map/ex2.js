/* Array.prototype.map - Exercise 2

* Write the CONTENTS of the `getFoodCategories` function
* It receives an array of OBJECTS as an argument
* Each object in this array has two attributes:
    `food` is the name of a food product
    `isVegetarian` is a boolean, indicating if this product is suitable for vegetarians
* Using map, `getFoodCategories` must return an array of STRINGS.
* For each element (object) of the input `foods` array, the corresponding element in the
  output array can be computed this way:
    * "FOOD is suitable for vegetarians" if the `isVegetarian` attribute is true
    * "FOOD is not suitable for vegetarians" if the `isVegetarian` attribute is false
    (replace FOOD with the `food` attribute)

Sample foods array, i.e. INPUT:
  [
    {
      food: 'Bacon',
      isVegetarian: false
    },
    {
      food: 'Sausage',
      isVegetarian: false
    },
    {
      food: 'Tofu',
      isVegetarian: true
    },
    {
      food: 'Chick Pea',8
      isVegetarian: true
    }
  ]

Expected OUTPUT for this sample
  [
    'Bacon is not suitable for vegetarians',
    'Sausage is not suitable for vegetarians',
    'Tofu is suitable for vegetarians',
    'Chick Pea is suitable for vegetarians'
  ]

*/

function getFoodCategories(foods) {
  const goVegetarian = foods.map(element => element.isVegetarian ? `${element.food} is suitable for vegetarians` : `${element.food} is not suitable for vegetarians` )
  
    return goVegetarian;
}
getFoodCategories([
  {
    food: "Bacon",
    isVegetarian: false
  },
  {
    food: "Sausage",
    isVegetarian: false
  },
  {
    food: "Tofu",
    isVegetarian: true
  },
  {
    food: "Chick Pea",
    isVegetarian: true
  }
]);

// DON'T TOUCH THIS!
module.exports = getFoodCategories;
