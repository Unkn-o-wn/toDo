const express = require('express');
const router = express.Router();
const controllerIndex = require('../controller/index');


router.get('/', controllerIndex.getPage);

router.post('/', controllerIndex.addNewToDo);

router.put('/:id', controllerIndex.editSomeToDo);


router.delete('/:id', controllerIndex.deleteSomeToDo);




module.exports = router;