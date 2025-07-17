const User = require('../models/User');
const Income = require('../models/Income');

// Add Income Source
exports.addIncome = async (req, res) => {

  
    const userId = req.user.id;

  try {
    const{icon,source,amount,date} = req.body;

    // Validation check for missing fields;

    if(!source || !amount || !date){
        return res.status(400).json({message:"All fields are required"})
    }

    const newIncome = new Income({
        userId,
        icon,
        source,
        amount,
        date:new Date(date)
        
    })

    await newIncome.save();
    res.status(200).json(newIncome)
    
  } catch (error) {
    res.status(500).json({ message: "Error adding income", error: error.message });
  }
};

// Get All Income Sources
exports.getAllIncome = async (req, res) => {

  try {
    


  } catch (error) {
    res.status(500).json({ message: "Error fetching income", error: error.message });
  }
};

// Delete Income by ID
exports.deleteIncome = async (req, res) => {
  try {
   
  } catch (error) {
    res.status(500).json({ message: "Error deleting income", error: error.message });
  }
};

// Download Income Excel
exports.downloadIncomeExcel = async (req, res) => {
  try {
    // Logic to download income as Excel file goes here
    res.status(200).json({ message: "Download started" });
  } catch (error) {
    res.status(500).json({ message: "Error downloading income Excel", error: error.message });
  }
};

