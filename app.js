const express = require('express');
const app = express();
const port = 3000;

let bottlesCount = 99;

app.use(express.static('public'));

//
app.get('/', (req, res) => {
  res.send(`<h1>${bottlesCount} Bottles of beer on the wall</h1><a href="/${bottlesCount - 1}">Take one down, pass it around</a>`);
});

// 
app.get('/:number_of_bottles', (req, res) => {
  const { number_of_bottles } = req.params;
  const nextCount = number_of_bottles - 1;

  if (nextCount > 0) {
    res.send(`<h1>${number_of_bottles} Bottles of soju on the wall.</h1><a href="/${nextCount}">Take one down, pass it around</a><br><a href="/">Start over</a>`);
  } else if (nextCount === 0) {
    res.send(`<h1>${number_of_bottles} Bottle of soju on the wall.</h1><p>Take the last one down, pass it around</p><a href="/">Start over</a>`);
  } else {
    res.send(`<h1>No more bottles of soju on the wall.</h1><a href="/">Start over</a>`);
  }
});

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
