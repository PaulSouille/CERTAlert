let Parser = require('rss-parser');
let parser = new Parser();
let nodemailer = require('nodemailer');
var config = require ('./config');

var lastAlert='';
var transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
           user: config.email,
           pass: config.password
       }
   });

async function checkAlert(){
    let feed = await parser.parseURL('https://www.cert.ssi.gouv.fr/alerte/feed/');
    currAlert = feed.items[0];
    if(currAlert.title!=lastAlert){
            const mailOptions = {
                from: '<email sender>',
                to: '<your email>',
                subject: 'New security alert',
                html: '<h3>'+currAlert.title+'</h3><br><p><a href="'+currAlert.link+'">'+currAlert.content+'</a></p>'
                };
                transporter.sendMail(mailOptions, function (err, info) {
                if(err)
                    console.log(err)
                else
                    console.log(info);
                });
                lastAlert = currAlert.title;
        }
}
setInterval(checkAlert,5000);