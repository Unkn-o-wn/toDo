const modelToDo = require('../model/toDo.js');

module.exports.getPage = function (req, res){
       res.render('index.ejs', {
            title:'To Do List'
        })
}

module.exports.addNewToDo = function (req,res) {
        modelToDo.createNewToDo(req.body, (result)=>{
               res.send(201, result);
        })
}


module.exports.editSomeToDo = function (req,res) {

}

module.exports.deleteSomeToDo = function (req,res) {

}

