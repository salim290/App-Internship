'use strict'
var calcModel = require('../models/calculator-model');
var Datum = require('../models/Datum');
const mongoose = require('mongoose');
var post = require('../public/javascripts/post');

exports.calculator = (req,res,next) =>{
      res.render('CalculatorPage',{title: 'Internship Calculator'})
    }

exports.result = (req,res,next) =>{
    const start =  req.query.startDate;
    const end = req.query.endDate;
    const user = req.query.name;
    const internship = req.query.description;
    res.render('ResultPage',{startDate : start, endDate : end,  name: user, description: internship});
}

exports.default = (req,res,next) =>{
     const resultId = calcModel.data;
     console.log(resultId);
     res.render('ResultPage',{startDate : resultId.startDate , endDate : resultId.endDate,
                              name: resultId.user, description: resultId.internship});
}


exports.create = (req, res, next) => {
    console.log(req.body);
    const newDatum = new Datum({
      _id : new mongoose.Types.ObjectId(),
      name : req.body.name,
      description : req.body.description,
      start : req.body.start,
      end : req.body.end
    })

    console.log(newDatum);
    newDatum.save()
    .then(result => {
      //console.log(result);
      res.status(200).json({result});
    })
    .catch(err => {
      console.log(err);
      res.status(500).json({error:err});
    })
    //res.render('ResultPage',{startDate : newDatum.start, endDate : newDatum.end,
    //                          name: newDatum.name, description: newDatum.description});
        }


exports.find = (req, res, next) => {
  const id = req.params.dateID;

  Datum.findById(id)
  .exec()
  .then(result => {
    console.log(result);
    //res.status(200).json(result)
     const name = result.name;
     const description = result.description;
     const start =  result.start;
     const end = result.end;
     console.log(start);
     console.log(end);
    res.render('ResultPage',{name : name, description : description, startDate : start, endDate : end });
  })
  .catch(err => {
    console.log(err);
    res.status(500).json({error:err});
  })
      }
