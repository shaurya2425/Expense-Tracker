const xlsx = require('xlsx')

const Expense = require('../models/Expense');

// Add Expense Source
exports.addExpense = async (req, res) => {
  const userId = req.user.id;
  
    try {
      const{icon,category,amount,date} = req.body;
  
      // Validation check for missing fields;
  
      if(!category || !amount || !date){
          return res.status(400).json({message:"All fields are required"})
      }
  
      const newExpense = new Expense({
          userId:req.user.id,
          icon,
          category,
          amount,
          date:new Date(date)
          
      })
  
      await newExpense.save();
      res.status(200).json(newExpense)
      
    } catch (error) {
      res.status(500).json({ message: "Error adding expense", error: error.message });
    }
};

//Get all Expense
exports.getAllExpense = async (req, res) => {
  const userId = req.user.id;
  
    try {
      
      const expense = await Expense.find({userId}).sort({date:-1});
      res.json(expense);
  
    } catch (error) {
      res.status(500).json({ message: "Error fetching expense", error: error.message });
    }
};

// Delete Expense
exports.deleteExpense = async (req, res) => {
    const userId = req.user.id;
    const expenseId = req.params.id;
  
    try {
  
      const deletedExpense = await Expense.findOneAndDelete({
        _id: expenseId,
        userId: userId
      });
  
      if (!deletedExpense) {
        return res.status(404).json({ message: "Expense not found or unauthorized" });
      }
  
      res.json({ message: "Expense deleted successfully" });
  
    } catch (error) {
      res.status(500).json({ message: "Error deleting expense", error: error.message });
    }
};


// Download ExpenseExcel
exports.downloadExpenseExcel = async (req, res) => {
  const userId = req.user.id
    try {
      
      const expense = await Expense.find({userId}).sort({date:-1});
  
      // Prepare data for Excel
  
      const data = expense.map((item)=>(
        {
          Source: item.source,
          Amount: item.amount,
          Date: item.data
        }
      ))
  
      const wb = xlsx.utils.book_new();
      const ws = xlsx.utils.json_to_sheet(data);
      xlsx.utils.book_append_sheet(wb,ws,"Expense");
      xlsx.writeFile(wb,'expense_details.xlsx');
      res.download('expense_details.xlsx');
  
     
    } catch (error) {
      res.status(500).json({ message: "Error downloading expense Excel", error: error.message });
    }
};
