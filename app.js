const cors = require('cors');
const express = require('express')
const app = express();
const Config = require('./utils/config');
const Logger = require('./utils/logger');
const MiddleWare = require('./utils/middleware');
const Blog = require('./models/blog');
const BlogRouter = require('./controllers/blogs');
const mongoose = require('mongoose');

Logger.info('connecting to ', Config.MONGODB_URI)

const mongoUrl = Config.MONGODB_URI;
mongoose.connect(mongoUrl, { useNewUrlParser: true, useUnifiedTopology: true }).then(request => {
    Logger.info('Connected to ', Config.MONGODB_URI, ' successfully!.');
}).catch((error) => {
    Logger.error('Error connection to MongoDB ',error.message);
})

app.use(cors());
app.use(express.static('build'));
app.use(express.json());
app.use(MiddleWare.requestLogger);

app.use('/api/blogs',BlogRouter);

app.use(MiddleWare.unknownEndpoint);
app.use(MiddleWare.errorHandler);

module.exports = app;