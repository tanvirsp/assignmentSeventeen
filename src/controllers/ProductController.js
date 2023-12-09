const Order = require("../models/Order");
const Product = require("../models/Product");

exports.AddProduct = async(req, res) =>{
    try {

      const data = req.body;
      const result = await Product.create(data);
      res.status(200).json({status:"success", data: result})

    } catch (error) {
        res.status(400).json({status: "fail", data: error.toString()})
    }

}


exports.AddOrder = async(req, res) =>{
    try {

      const data = req.body;
      const result = await Order.create(data);
      res.status(200).json({status:"success", data: result})

    } catch (error) {
        res.status(400).json({status: "fail", data: error.toString()})
    }

}