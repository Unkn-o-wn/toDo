const Sequelize = require('sequelize');
const sequelize = require('../utils/DB.js');

    const todo = sequelize.define('ToDoList', {
        id:{
            primaryKey: true,
            autoIncrement: true,
            allowNull: false,
            type: Sequelize.INTEGER
        },
        done:{
            type:Sequelize.BOOLEAN,
            allowNull: false
        },
        title:{
            type:Sequelize.STRING,
            allowNull: false
        }
    })


todo.createNewToDo = async function (data,  cb) {
     data.done = false;
    console.log(data);
     await this.create(data)
         .then((data)=>{

        cb(data);
     }).catch(err=>{
         cb(err);
         })



}

module.exports = todo