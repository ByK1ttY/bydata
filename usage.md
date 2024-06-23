const fs = require('fs');
const path = require('path');
const { readData, writeData, editData, addData, setup } = require('./app');

// Read data from db.json
const data = readData();
console.log('Data from db.json:', data);

// Edit data with id 2
editData(2, { name: 'Updated Name' });

// Add new data
addData({ id: 4, name: 'New Item' });

// Setup db.json with data from example.json
setup(path.join(__dirname, 'example.json'));

[![⭐ Star on GitHub]](https://github.com/yourusername/yourrepo)
