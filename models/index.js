const express = require('express');
const router = express.Router();

router.get("/",(req,res)=>{
    res.send("welcome to my application!")
})

const userRoutes = require("./product_tagRoutes");
router.use("/api/users",userRoutes)

const petRoutes = require("./productRoutes");
router.use("/api/pets",petRoutes)

const toyRoutes = require("./tagRoutes");
router.use("/api/toys",toyRoutes)

module.exports = router;