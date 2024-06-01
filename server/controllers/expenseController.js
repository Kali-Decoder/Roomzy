import Expense from "../model/expense.model";
import { ErrorHandler } from "../utils/errorHandler.js";

export const addExpense = async (req, res, next) => {
    try {
      const expense = await Expense.create({ ...req.body, user_id: req.user.id });
  
      res.status(201).json({
        success: true,
        data: expense
      });
    } catch (error) {
      next(error);
    }
  };

  export const getExpenses = async (req, res, next) => {
    try {
      const expenses = await Expense.find({ room_id: req.params.roomId });
  
      res.status(200).json({
        success: true,
        data: expenses
      });
    } catch (error) {
      next(error);
    }
  };

  //todo: split balance logic,history data controller,