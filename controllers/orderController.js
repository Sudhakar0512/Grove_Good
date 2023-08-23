const order = require('../models/customerModel')
const mongoose = require("mongoose");
exports.addOrder= async (req, res) => {
    const { id } = req.params;

    if (!mongoose.Types.ObjectId.isValid(id)) {
      return res.status(400).json({ error: "id is not valid" });
    }
    try
    {
        const product = await order.findById(id);
        return res.send("valid")
    }
    catch (error) {
        res.status(400).json({ error: error.message });
      }
    res.send("helloworld")
    // const {proName,proVarity,proPrice}  = req.body

    // try {
    //     const orderDetails = order({
    //         proName,
    //         proVarity,
    //         proPrice,

    //         // proName:req.body.proName,
    //         // proVarity:req.body.proVarity,
    //         // proPrice:req.body.proPrice
    //     })
    //     await orderDetails.save()
    //      res.status(200).json({message: 'order Added'})
    // } catch (error) {
    //     res.status(500).json({message: 'Server Errorrr'})
    //     console.log(error)
    // }

}