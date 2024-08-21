import express from "express";
import userById from "../controllers/user/userById.js";
import editUser from "../controllers/user/editUser.js";
import deleteUser from "../controllers/user/deleteUser.js";
import createUser from "../controllers/user/createUser.js";
import userList from "../controllers/user/userList.js";
import editNameUser from "../controllers/user/editNameUser.js";

const router = express.Router()

router.get ('/', userById)
router.get ('/list', userList)
router.put ('/', editUser)
router.delete ('/', deleteUser)
router.post ('/', createUser)
router.patch ('/', editNameUser)

export default router