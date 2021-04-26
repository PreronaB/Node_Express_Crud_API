import express from 'express';

import { getUsers, createUser, getUser, updateUser, deleteUser} from '../controllers/users.js';

const router=express.Router(); //initialises the router


//all routes in here are starting with /users
//route to see all users
router.get('/', getUsers);

//route to add a user
router.post('/', createUser);

//route to find a user using id
router.get('/:id', getUser);

//route to delete a user using id
router.delete(':/id', deleteUser);

//route to update or modify a user
router.patch(':/id' , updateUser);

export default router;