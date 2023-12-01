const foodJSON = require('./food.json');

/* Solution function to task 1 - 7 */
function listFoodItems(category = '') {
  if (!category) {
    console.log('All food items: ');
    console.log(foodJSON);
    return;
  }

  const foodItems = foodJSON.filter((food) => food.category === category);
  console.log(`Food items in category '${category}': `);
  console.log(foodItems);
}

/* Solution function to task 8 */
function calorieOver100() {
  const hundredMore = foodJSON.filter((food) => food.calorie > 100);
  console.log(hundredMore);
}

/* Solution function to task 9 */
function calorieBelow100() {
  const hundredLess = foodJSON.filter((food) => food.calorie < 100);
  console.log(hundredLess);
}

/* Solution function to task 10 */
function sortedByProtein(sortType) {
  let sortedProtien;
  if (sortType === 'asc') {
    sortedProtien = foodJSON.sort((a, b) => a.protiens - b.protiens);
  } else if (sortType === 'desc') {
    sortedProtien = foodJSON.sort((a, b) => b.protiens - a.protiens);
  }
  console.log(sortedProtien);
}

/* Solution function to task 11 */
function sortedByCab(sortType) {
  let sortedCabs;
  if (sortType === 'asc') {
    sortedCabs = foodJSON.sort((a, b) => a.cab - b.cab);
  } else if (sortType === 'desc') {
    sortedCabs = foodJSON.sort((a, b) => b.cab - a.cab);
  }
  console.log(sortedCabs);
}


// listFoodItems('Vegetable');
// calorieBelow100()
// sortedByProtein('asc')
// sortedByCab('desc')