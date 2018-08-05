const express = require('express');
const cors=require('cors');
const path = require('path');

const webpack = require('webpack');
const webpackMiddleware = require('webpack-dev-middleware');
const webpackFile = require('../../webpack.config');

const constants  = require('./config/constant');
const appConfig = require('./config/appConfig');
const PORT =  constants.PORT ;

const compiler = webpack(webpackFile);
const app = express();

app.use(cors({origin:true,credentials:true}));
app.use(webpackMiddleware(compiler,{
  hot:true,
  historyApiFallback:true,
}));

appConfig.appStarted(app);


app.use('*', (req,res) => {
  res.sendFile(path.resolve(__dirname, '../../dist/index.html'));
});

app.listen(PORT,()=>{
    console.log('Listening on port %d >>>>>>>>>>',PORT);
});