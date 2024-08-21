import express from "express";
import createProduct from "../controllers/product/createProduct.js";
import deleteProduct from "../controllers/product/deleteProduct.js";
import editNameProduct from "../controllers/product/editNameProduct.js";
import productById from "../controllers/product/productById.js";
import productList from "../controllers/product/productList.js";
import editProduct from "../controllers/product/editProduct.js";

const router = express.Router()

router.post('/', createProduct)
router.get('/list', productList)
router.get('/', productById)
router.delete('/', deleteProduct)
router.put('/', editNameProduct)
router.put('/', editProduct)

export default router
