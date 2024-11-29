const User = require('../models/user')

async function addUser(req,res) {
    try {
        const curUser = req.body
        const newUser = await User.create(curUser)
        if (newUser.id) {
            return res.json(`user created succesfully of id ${newUser.id}`)
        }
        return res.json('User not created')
    } catch (error) {
        res.json('404')
    }
}

async function getUser(req,res) {
    try {
        const id = req.params.id
        const user = await User.find({_id:id})
        if(user){
            return res.json(user)
        }
        return res.json('User Not found')
    } catch (error) {
        res.json('404')
    }
}


async function getUsers(req,res) {
    try {
        const user = await User.find({})
        if(user.length>0){
            return res.json(user)
        }else{
            return res.json('No Users untill Now')
        }
    } catch (error) {
        res.json('404')
    }
}

async function editUser(req,res) {
    try {
        const id = req.params.id
        const newUserData = req.body
        const result = await User.findByIdAndUpdate(id,newUserData)
        if (result) {
            return res.json(`Edited user with id:${id} `)
        }
        return res.json('Not edited')
    } catch (error) {
        res.json('404')
    }
}

async function delUser(req,res) {
    try {
        const id = req.params.id
        const result = await User.findByIdAndDelete(id)
        if(result){
            return res.json(`Delted user with id:${id} `)
        }
        return res.json('User Not found')
    } catch (error) {
        res.json('404')
    }
}


module.exports = {
    addUser,
    getUsers,
    getUser,
    editUser,
    delUser
}