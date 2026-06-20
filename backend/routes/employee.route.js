import {Router} from "express"
import { createUser, deleteUser, getUser, updateuser } from "../controller/employee.js";

const router = Router()

 router.get('/user',getUser);
 router.post('/create',createUser);
 router.post('/delete',deleteUser);
 router.post('/update',updateuser);

 export default router