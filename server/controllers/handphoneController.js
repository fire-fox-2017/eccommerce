var Handphone = require('../models/handphone')

findHandphones = (req, res) => {
  Handphone.find({}).then((handphones)=>{
    res.send(handphones)
  })
}

addHandphone = (req, res) => {
  var handphone = new Handphone({
    img: req.body.img,
    brand: req.body.brand,
    price: req.body.price,
    description: req.body.description,
    rating: req.body.rating,
    quantity: req.body.quantity
  })
  handphone.save((err, handphone)=>{
    if (err) res.send(err)
    res.send(handphone)
  })
}

deleteHandphone = (req, res) => {
  Handphone.remove({_id: req.body.id}, function (err, handphone) {
    if (err) res.send(err)
    res.send(handphone)
  });
}

updateHandphone = (req, res) => {
  Handphone.findById(req.body.id, function(err,handphone){
    if (err) res.send(err)
    handphone.img = req.body.img;
    handphone.brand= req.body.brand || handphone.brand;
    handphone.price= req.body.price || handphone.price;
    handphone.description= req.body.description || handphone.description;
    handphone.rating= req.body.rating || handphone.rating;
    handphone.quantity= req.body.quantity || handphone.quantity;
    handphone.save((err,handphone)=>{
      if (err) res.send(err)
      res.send(handphone)
    })
  })
}

module.exports = {findHandphones, addHandphone, deleteHandphone, updateHandphone};