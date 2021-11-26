const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const requireLogin = require('../middleware/requireLogin');
const Donation = mongoose.model("Donation");

router.post('/addAppointment', requireLogin, (req, res) => {
    const { name,address, date, service } = req.body;
    if (!name || !address || !date || !service ) {
        return res.status(422).json({ error: "please select all Fields" });
    }
    req.user.password = undefined;
    const donation = new Donation({
        name,
        address,
        date,
        service,
        tookBy: req.user
    })
    donation.save().then(result => {
        res.json({ apmnt: result })
    })
        .catch(err => {
            console.log(err);
        })
})

module.exports= router;