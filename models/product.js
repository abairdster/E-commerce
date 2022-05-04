const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Connection extends Model {}

product.init({
    //add requirements
    id:{
        type:DataTypes.integer,
        allowNull:false,
        primaryKey:true,
        autoIncrement:true
    },
    product_name:{
        type:DataTypes.string,
        allowNull:false,
    },
    price:{
        type:DataTypes.decimal,
        allowNull:false,
        validate:{
            isDecimal:true,
        }
    },
    stock:{
        type:DataTypes.integer,
        allowNull:false,
        
    }
    category_id:{}

})