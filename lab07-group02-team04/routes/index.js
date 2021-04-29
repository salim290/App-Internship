var express = require('express');
var router = express.Router();
const CalculatorController = require('../controllers/calculatorController')
const Datum  = require('../models/calculator-model');



  router.post('/Datum/', CalculatorController.create);
  router.get('/Datum', CalculatorController.find);
  router.get('/Datum/:dateID', CalculatorController.find)
  router.get('/calculator', CalculatorController.calculator);
  router.get('/result', CalculatorController.result);
  router.get('/default', CalculatorController.default);
  router.get('/', function(req, res, next) {
  res.render('index', { title: 'Internship Calculator' });
  });



module.exports = router;
