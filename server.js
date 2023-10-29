const express = require('express');
const fs = require('fs');
const app = express();
const port = 3000; 

app.use(express.static(__dirname + '/public'));

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/public/index.html');
});

app.use(express.json());

app.post('/storeOrder', (req, res) => {
  const orderData = req.body;

  const orderDataString = JSON.stringify(orderData);

  fs.appendFile('storeOrder.txt', orderDataString + '\n', (err) => {
    if (err) {
      console.error(err);
      res.status(500).send('Error storing order data.');
    } else {
      console.log('Order data stored:', orderDataString);
      res.send('Order data received and stored.');
    }
  });
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
