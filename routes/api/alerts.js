const express=require('express');
const router=express.Router();
//item model
const Alert=require('../../models/Alert.js');

router.get('/', (req,res)=>{
  Alert.find()
  .sort({date: -1})
  .then(alerts=>res.json(alerts))
});


router.post('/', (req,res)=>{
  const newAlert=new Alert({
    title:req.body.title,
    description:req.body.description
  });

  newAlert.save().then(alert => res.json(alert));
});

// / @route   DELETE api/items/:id
// @desc    Delete A Item
// @access  Public
router.delete('/:id', (req, res) => {
  Alert.findById(req.params.id)
    .then(alert => alert.remove().then(() => res.json({ success: true })))
    .catch(err => res.status(404).json({ success: false }));
});

module.exports =router;
