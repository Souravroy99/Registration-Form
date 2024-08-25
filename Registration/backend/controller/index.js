const Form = require("../model/Form.js");

const formController = async(req, res) => {
    try{ 
        const {userName, email, password} = req.body ;
        const form = await Form.findOne({email: email});
 
        console.log("Email already exists") ;
        if(form) {
            return res.status(400).json("Email already exists") ;
        }
        
        await Form.create({userName, email, password});
        res.status(201).json("User successfully registered") ;
    }
    catch(error) {
        res.status(400).json(error);
    }
}

module.exports = formController ;