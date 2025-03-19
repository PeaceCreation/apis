


import express from 'express';



import * as authControler from "../controllers/auth.controller.js";

const router = express.Router();

//registeration
router.post('/register', authControler.register);
// Login
router.post('/login', authControler.login);

export default router;