const express = require('express');
const cors = require('cors');

const app = express();

app.use(cors());
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.get('/api/posts', (req, res) => {
    const data = [
        { id: '1abcabc', title: 'Tytuł 1', content: 'Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit.' },
        { id: '2ghfhgs', title: 'Tytuł 2', content: 'Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit.' },
        { id: '3abcabc', title: 'Tytuł 3', content: 'Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit.' }]
    res.json(data);
});

app.listen(8000, function () {
    console.log('Server is running on port:', 8000);
});