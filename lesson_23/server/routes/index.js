const Router = require('express');
const todoRoutes = require('./todosRoutes');

const router = new Router();

router.use('/todos', todoRoutes);

module.exports = router;
