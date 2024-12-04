
const express = require('express');
const router = express.Router()
const UserAdminRoute = require("./apiUser")
const CategoryAdminRoute = require("./apiCategory")
const ProductAdminRoute = require("./apiProduct")
const CartAdminRoute = require("./apiCart")
// const orderAdminRoute = require("./apiorder")

router.use("/users", UserAdminRoute)
router.use("/categories", CategoryAdminRoute)
router.use("/products", ProductAdminRoute)
router.use("/cart", CartAdminRoute)
// router.use("/order", orderAdminRoute)



module.exports = router