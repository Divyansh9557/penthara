import {Router} from "express"
import { loginUser, logout, registerUser,getUser } from "../controller/auth.js"
import { protectedRoute } from "../middleware/protectedRoute.js"


const router = Router()

  router.post("/login",loginUser)
  router.get("/logout",logout)
  router.post("/register",registerUser)
  router.get("/getUser",protectedRoute,getUser)

export default router