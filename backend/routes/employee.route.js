import {Router} from "express"
import { createUser, deleteUser, getSingleEmployee, getUser, updateuser } from "../controller/employee.js";

const router = Router()

 router.get('/user',getUser);
 router.get('/user/:id',getSingleEmployee);
 router.post('/create',createUser);
 router.post('/delete',deleteUser);
 router.post('/update/:id',updateuser);

 export default router