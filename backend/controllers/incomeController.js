const xlsx = require('xlsx')

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
        userId:req.user.id,
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

  const userId = req.user.id;

  try {
    
    const income = await Income.find({userId}).sort({date:-1});
    res.json(income);

  } catch (error) {
    res.status(500).json({ message: "Error fetching income", error: error.message });
  }
};

// Delete Income by ID
exports.deleteIncome = async (req, res) => {
  const userId = req.user.id;
  const incomeId = req.params.id;

  try {
    console.log("User ID:", userId);
    console.log("Income ID:", incomeId);

    const deletedIncome = await Income.findOneAndDelete({
      _id: incomeId,
      userId: userId
    });

    if (!deletedIncome) {
      return res.status(404).json({ message: "Income not found or unauthorized" });
    }

    res.json({ message: "Income deleted successfully" });

  } catch (error) {
    res.status(500).json({ message: "Error deleting income", error: error.message });
  }
};



// Download Income Excel
exports.downloadIncomeExcel = async (req, res) => {

  const userId = req.user.id
  try {
    
    const income = await Income.find({userId}).sort({date:-1});

    // Prepare data for Excel

    const data = income.map((item)=>(
      {
        Source: item.source,
        Amount: item.amount,
        Date: item.data
      }
    ))

    const wb = xlsx.utils.book_new();
    const ws = xlsx.utils.json_to_sheet(data);
    xlsx.utils.book_append_sheet(wb,ws,"Income");
    xlsx.writeFile(wb,'income_details.xlsx');
    res.download('income_details.xlsx');

   
  } catch (error) {
    res.status(500).json({ message: "Error downloading income Excel", error: error.message });
  }
};

