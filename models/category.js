const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

    class Connection extends Model {}

    category.init({
        //adding requirements
        id:{
            type:DataTypes.integer,
            allowNull:false,
            primaryKey:true,
            autoIncrement:true
        },
        category_name{
            type:DataTypes.STRING,
            allowNull:false
        }

    },{
        sequelize
    });
        
module.exports =Connection