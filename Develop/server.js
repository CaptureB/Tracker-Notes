const express = require('express');
const app = express();
const PORT = process.env.PORT || 3001;

const apiRoutes = require('./routes/apiRoutes');
const htmlRoutes = require('./routes/htmlRoutes');

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/api', apiRoutes);
app.use('/api', htmlRoutes)

app.use(express.static('public'));


app.listen(PORT, () => 
    console.log(`App listening at https://localhost:${PORT} 🚀`)
);
