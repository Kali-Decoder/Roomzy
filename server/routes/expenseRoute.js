import express from 'express';
import { auth } from '../middlewares/auth.js';
import { addExpense, getBalances, settleExpense } from '../controllers/expenseController.js';

const router = express.Router();

router.post('/add', auth, addExpense);
router.get('/balances', auth, getBalances);
router.post('/expense/settle', auth,settleExpense);

export default router;
