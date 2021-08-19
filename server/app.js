const express = require('express');
const cors = require('cors');
const { urlencoded, json } = require('body-parser');
const app = express();

// app.use( req,res, next => {
//  if (req.headers.authorization === "20210814"){
//    next();
//  }else {
//    res.send(401);
//  }
// });

let selectedFoods = ["asian noodles", 'coffee','cookies', 'hash browns', 'hot dogs',];

const users = [
  {username: "test", password: "test", name: "Rodelio"},
  {username: "test2", password: "test2", name: "Rodelio2"},
  {username: "test2", password: "test2", name: "Rodelio3"},
]

app.use(cors());
app.use(urlencoded({ extended: false }));
app.use(json());

app.get("/foods", (req, res) =>{
  //res.json({ data: foods });
  res.json(foods);
});

app.get("/foods/search", (req, res) =>{
  //res.json({ data: foods });
  const criteria = req.query.criteria;
  
  let searchResult = foods.filter(item => item.toLowerCase().indexOf(criteria) > -1);   

  res.json(searchResult);
});

app.post("/foods", (req, res) => {
  console.log(req.body);
  selectedFoods = [...req.body.foods];
  res.json({ data: selectedFoods });
});

app.post('/saveselection', (req,res) => {
  const newSelection = req.body.foods;
  selectedFoods = newSelection;
  //console.log(selectedFoods);
  res.sendStatus(200)
});

// app.get("/foods", (req, res) => {
//   console.log(req.body);
//   selectedFoods = [...req.body.foods];
//   res.json({ data: selectedFoods });
// });

app.get("/foods/selected", (req, res) => {
  res.json(selectedFoods);
});

// app.get("/users", (req, res) => {
//  // console.log(req.body);
//   //selectedFoods = [...req.body.foods];
//   res.json({ data: users });
// });


app.get("/checkuser", (req, res) => {
  const username = req.query.username;
  const password = req.query.password;

  let nameOfUser = '';

  for(i=0; i < users.length; i++){
    if (users[i].username === username && users[i].password === password){
      nameOfUser=users[i].name;
      break;
    }
  }
  
  res.json(nameOfUser);
});

app.post('/clear/selection', (req, res) => {
    selectedFoods = [...[]];
    res.json(selectedFoods);
})



app.listen(8000, () => {
  console.log("Server is running and listening to port 8000");
})

const foods = [
  "asparagus",
  "apples",
  "avacado",
  "alfalfa",
  "acorn squash",
  "almond",
  "arugala",
  "artichoke",
  "applesauce",
  "asian noodles", 
  "antelope",
  "ahi tuna",
  "albacore tuna",
  "Apple juice",
  "Avocado roll",
  "Bruscetta",
  "bacon",
  "black beans",
  "bagels",
  "baked beans",
  "BBQ",
  "bison",
  "barley",
  "beer",
  "bisque",
  "bluefish",
  "bread",
  "broccoli",
  "buritto",
  "babaganoosh",
  'cabbage',
  'cake',
  'carrots',
  'carne asada',
  'celery',
  'cheese',
  'chicken',
  'catfish',
  'chips',
  'chocolate',
  'chowder',
  'clams',
  'coffee',
  'cookies',
  'corn',
  'cupcakes',
  'crab',
  'curry',
  'cereal',
  'chimichanga',
  'dates',
  'dips',
  'duck',
  'dumplings',
  'donuts',
  'eggs',
  'enchilada',
  'eggrolls',
  'English muffins',
  'edimame',
  'eel sushi',
  'fajita',
  'falafel',
  'fish',
  'franks',
  'fondu',
  'French toast',
  'French dip',
  'Garlic',
  'ginger',
  'gnocchi',
  'goose',
  'granola',
  'grapes',
  'green beans',
  'Guancamole',
  'gumbo',
  'grits',
  'Graham crackers',
  'ham',
  'halibut',
  'hamburger', 
  'honey',
  'huenos rancheros',
  'hash browns',
  'hot dogs',
  'haiku roll',
  'hummus',
  'ice cream',
  'Irish stew',
  'Indian food',
  'Italian bread',
  'jambalaya',
  'jelly / jam',
  'jerky',
  'jalapeño',
  'kale',
  'kabobs',
  'ketchup',
  'kiwi',
  'kidney beans',
  'kingfish',
  'lobster',
  'Lamb',
  'Linguine',
  'Lasagna',
  'Meatballs',
  'Moose',
  'Milk',
  'Milkshake',
  'Noodles',
  'Ostrich',
  'Pizza',
  'Pepperoni',
  'Porter',
  'Pancakes',
  'Quesadilla',
  'Quiche',
  'Reuben',
  'Spinach',
  'Spaghetti',
  'Tater tots',
  'Toast',
  'Venison',
  'Waffles',
  'Wine',
  'Walnuts',
  'Yogurt',
  'Ziti',
  'Zucchini',
  ]