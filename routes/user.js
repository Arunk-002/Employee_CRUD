const express = require('express')
const router = express.Router()

router.get('/',getUser)

router.post('/add',addUser)

router.put('/edit:id',editUser)

router.delete('/del:id',delUser)

module.exports = router