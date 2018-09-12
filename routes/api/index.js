const router = require('express').Router();
const userRoutes = require('./user');
const plantRoutes = require('./plants');
const commentsRoutes = require('./comments');
const imageRoutes = require('./images');

router.use('/user', userRoutes);
// router.use('/plants', plantRoutes);
router.use('/comments', commentsRoutes);
router.use('/images', imageRoutes);

module.exports = router;