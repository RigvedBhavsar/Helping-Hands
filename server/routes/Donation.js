const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const requireLogin = require('../middleware/requireLogin');
const Donation = mongoose.model("Donation");
const {MJ_APIKEY_PUBLIC , MJ_APIKEY_PRIVATE} = require('../keys');
const mailjet = require ('node-mailjet').connect(MJ_APIKEY_PUBLIC, MJ_APIKEY_PRIVATE);

const volunteers = [
    ["Bhavin","9967345219","Bhavin22@gmail.com"],
    ["Devansh","9887634262","Devansh11@gmail.com"],
    ["Ishaan","9767845421","Ishaan8@gmail.com"],
    ["Rohit","9887665470","Rohit24@gmail.com"],
    ["Purab","9776655433","Rohit256@gmail.com"],
    ["Akash","9234732450","Akash@gmail.com"]
];

router.post('/addAppointment', requireLogin, async (req, res) => {
    const { name, email, address, date, service, ngo } = req.body;
    if (!name || !email || !address || !date || !service || !ngo ) {
        return res.status(422).json({ error: "please select all Fields" });
    }
    req.user.password = undefined;

    var index = Math.floor(Math.random()*volunteers.length);
    
    const request = mailjet
    .post("send", {'version': 'v3.1'})
    .request({
        "Messages":[{
            "From": {
                "Email": "samikshamalage27.model@gmail.com",
                "Name": "Helping Hands"
            },
            "To": [{
                "Email": email,
                "Name": name
            }],
            "Subject": "Donation Request",
            "TextPart": "Respected Sir/Maam"+ name +" Thank you for your Contribution." ,
            "HTMLPart": "<h3>Respected Sir/Maam, "+ name +" Thank You For Your Contribution.</b>!</h3><br /><br/> Our Volunteer  "+ volunteers[index][0] +"  Will Collect The <b> "+ service +" </b> From :<b> "+ address +"  </b> On <b>  "+ date +"  </b> Between 10 A.M to 6 P.M <br /> Volunteer Contact -  "+ volunteers[index][1] +"<br /> Volunteer Email -  "+ volunteers[index][2] +"<br /><br />Thank you so much for Donating. <br/><b>Helping Hands!</b>"
        }]
    })


    const donation = new Donation({
        name,
        email,
        address,
        date,
        service,
        ngo,
        tookBy: req.user
    })
    await donation.save().then(result => {
        res.json({ apmnt: result })
    })
    .then(
        request
            .then((result) => {
        console.log(result.body)
    })
    .catch((err) => {
        console.log(err.statusCode)
    })
    )
        .catch(err => {
            console.log(err);
        })
})

router.get('/alldonation', (req, res) => {
    Donation.find()
        .populate("tookBy", "_id email")
        .then(list => {
            res.json({ list })
        }).catch(err => {
            console.log(err);
        })
})


module.exports= router;