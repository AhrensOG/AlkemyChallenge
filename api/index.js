const server = require('./src/app.js');
const { sequelize } = require('./src/db.js')

// Syncing all the models at once.
sequelize.sync({ force: false }).then(() => {
  server.listen(process.env.PORT, () => {
    console.log('%s listening at 3001'); // eslint-disable-line no-console
  });
});
