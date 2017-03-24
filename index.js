const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
//const livereload = require('express-livereload');

const app = express();
const port = 8000;


app.use(express.static('public'));
app.use(bodyParser.json());
app.use(cors());

app.get('api/people', (req, res, next) => {
  //res.status(200).send({[1, 2, 3, 4, 5]});
});


//livereload(app);
app.listen(port, () => {
  console.log(`listening on port ${port}`);
})
