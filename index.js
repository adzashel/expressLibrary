const express = require('express');
const path = require('path');
const app = express();
const { getData , getDetailBook } = require('./partials/script')
const port = 3000;
const expressLayouts = require('express-ejs-layouts');

app.set('view engine', 'ejs');
app.use(expressLayouts);
app.use(express.static(path.join(__dirname, 'public'))); 

app.get('/', async (req, res) => {
  const data =  await getData();
  res.render('index', {
    title: 'Library App',
    layout : 'utilities/container',
    data,
  });
});

// get books detail by id

app.get('/books/:id', async (req, res) => {
  const bookId = req.params.id;
  try {
    const bookDetails = await getDetailBook(bookId);

    if (bookDetails) {
      res.render('details', {
        layout : 'utilities/container',
        title: 'Book Details',
        book: bookDetails
       });
    } else {
      res.status(404).send('Book not found');
    }
  } catch (error) {
    console.error('Error fetching book details:', error);
    res.status(500).render('utilities/404' , {
      layout : 'utilities/error',
      title: 'Error',
      message: 'An error occurred while fetching the book details.'
    });
  }
});

// middleware for searching book 



app.listen(port, () => {
  console.log(`server listening on hhtp//localhost:${port}`);
});
