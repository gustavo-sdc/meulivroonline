const { hash } = require('bcrypt')
const knex = require('../database/knex')
const AppError = require('../utils/AppError.js')

class userController{
    async createUser(req, res){
        const { name, email, password} = req.body
        
        const passwordHashed = await hash(password, 8)

        
        const checkIfExist = await knex("user").where({email}).first()

        if(checkIfExist){
            throw new AppError("Esse email já está cadastrado!")
        }

        const create = await knex("user").insert({
            name,
            email,
            password: passwordHashed
        })

        if(!create){
            throw new AppError("Erro ao cadastrar usuário")
        }
        
        return res.json({
            "nome": name,
            "email": email,
            "password": passwordHashed
        })
    }

    async showUser(){
        const { id } = req.params

        
    }

    async updateUser(){

    }

    async deleteUser(){

    }
}

module.exports = userController