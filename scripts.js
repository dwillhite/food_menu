
/*object*/
let ingredients = [
    { item: 'whiteRice', name: 'White Rice', type: 'base', calories: 151, spicy: "no" },
    { item: 'brownRice', name: 'Brown Rice', type: 'base', calories: 111, spicy: "no" },
    { item: 'kimchi', name: 'Kimchi', type: 'topping', calories: 17, spicy: "yes" },
    { item: 'egg', name: 'Egg', type: 'extra', calories: 70, spicy: "no" },
    { item: 'beets', name: 'Beets', type: 'topping', calories: 43, spicy: "no" },
    { item: 'oil', name: 'Oil', type: 'garnish', calories: 30, spicy: "no"}
];




 
//function to create object

// function Ingredients(item, type, calories, spicy) {
//     this.item = item;
//     this.type = type;
//     this.calories = calories;
//     this.spicy = spicy;
// }

// let white_rice = new Ingredients("White_Rice", "base", 151, "no");
// let brown_rice = new Ingredients("brownRice", "base", 111, "no");
// let kimchi = new Ingredients("Kimchi", "topping", 17, "yes");
// let pork = new Ingredients("Pork", "protien", 206, "yes");
// let steak = new Ingredients("Steak", "protien", 271, "no");
// let noodles = new Ingredients("Noodles", "base", 188, "no");
// let chicken = new Ingredients("Chicken", "protien", 239, "no");
// let romaine = new Ingredients("Romaine", "topping", 8, "no");
// let lettuce = new Ingredients("Lettuce Wrap", "base", 8, "no");
// let veg = new Ingredients("Mixed Vegetables", "topping", 30, "no");
// let roe = new Ingredients("Caviar Masago", "extra", 40, "no");
// let oil = new Ingredients("Sesame Oil", "garnish", 30, "no");
// let egg = new Ingredients("Soft-boiled Egg", "extra", 70, "no");
// let scallion = new Ingredients("Scallions", "garnish", 2, "no");
// let beets = new Ingredients("Beets", "topping", 43, "no");
// const food = [white_rice, brown_rice];

// let totalCalories = (kimchi.calories + brown_rice.calories);
// console.log(totalCalories)
// console.table(Ingredients)



/****************** ITEM EVENTS ******************* */

const wRice = document.getElementById("whiteRice"),
    bRice = document.getElementById("brownRice");
const item = document.querySelectorAll(".item");
      

//Click on any item and display the name of the item

for (var i = 0; i < item.length; i++){
    item[i].addEventListener('click', display);
}

var total = 0;

function display(e) {
    let display = document.getElementById("displayBox");
    let totalCount = document.getElementById("calorieBox"); 

    const foodItem = ingredients.filter(function(foods) {
        if (foods.item) {
            return true;
        }
    });
    // let cal = 0;

    for (var j = 0; j < foodItem.length; j++){
        let cal = foodItem[j].calories;

        if (this.id === foodItem[j].item) {

            // display.innerHTML += "<li>" + foodItem[j].name + " " + cal + "</li>"; // w/o template strings
            display.innerHTML += `<li>${foodItem[j].name} ${cal}</li>`; //with template literal strings
 
            total = total + cal;
            console.log(total);
            totalCount.innerHTML = "<strong>Total Calories: " + total + "</strong>";

        }

    }

    console.log(this.id);
    console.log(foodItem.length);

    }

