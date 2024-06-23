const fs = require('fs');
const path = require('path');

const dbPath = path.join(__dirname, 'db.json');

const readData = () => {
    try {
        const data = fs.readFileSync(dbPath, 'utf8');
        return JSON.parse(data);
    } catch (err) {
        console.error('Error reading database file:', err);
        return [];
    }
};

const writeData = (data) => {
    try {
        fs.writeFileSync(dbPath, JSON.stringify(data, null, 2));
    } catch (err) {
        console.error('Error writing to database file:', err);
    }
};

const editData = (id, updatedData) => {
    const data = readData();
    const index = data.findIndex(item => item.id === id);
    if (index !== -1) {
        data[index] = { ...data[index], ...updatedData };
        writeData(data);
    } else {
        console.error(`No data found with id ${id}`);
    }
};

const addData = (newData) => {
    const data = readData();
    data.push(newData);
    writeData(data);
};

const setup = (jsonFilePath) => {
    const data = JSON.parse(fs.readFileSync(jsonFilePath, 'utf8'));
    writeData(data);
};

module.exports = {
    readData,
    writeData,
    editData,
    addData,
    setup,
};
