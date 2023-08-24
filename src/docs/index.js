const basicInfo = require('./basicInfo');
const servers = require('./server');
const components = require('./components');
const tags = require('./tags');
const movies = require('./movies/index');

module.exports = {
    ...basicInfo,
    ...servers,
    ...components,
    ...tags,
    ...movies
};