const express = require('express');
const router = express.Router();

router.get("/",(req,res)=>{
    res.send("welcome to my application!")
})

const product_tagRoutes = require("./product_tagRoutes");
router.use("/api/product_tag",Routes)

const productRoutes = require("./productRoutes");
router.use("/api/product",productRoutes)

const tagRoutes = require("./tagRoutes");
router.use("/api/tag",toyRoutes)

module.exports = router;