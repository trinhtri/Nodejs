const express = require('express')
const router = express.Router()
const courseController = require('../app/controllers/courseController')

router.get('/create',courseController.create)
router.post('/store',courseController.store)
router.get('/list',courseController.list)
router.post('/:id',courseController.update)
router.get('/:id/edit',courseController.edit)
// router.get('/:slug',courseController.detail)


module.exports = router