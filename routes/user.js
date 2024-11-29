const express = require('express')
const router = express.Router()

const {addUser,getUsers,editUser,delUser,getUser}= require('../controllers/user')

router.get('/',getUsers)
router.post('/',addUser)

router.get('/:id',getUser)
router.put('/:id',editUser)
router.delete('/:id',delUser)

module.exports = router