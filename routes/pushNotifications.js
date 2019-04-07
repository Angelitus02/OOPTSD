//Code by Oscar//

var express = require('express'),
    path = require('path'),
    nodeMailer = require('nodemailer'),
    bodyParser = require('body-parser');

    var app = express();
    app.set('view engine', 'ejs');
    app.use(express.static('public'));
    app.use(bodyParser.urlencoded({extended: true}));
    app.use(bodyParser.json());
    var port = 3000;
    app.get('/', function (req, res) {
      res.render('index');
    });
    app.post('/send-email', function (req, res) { // sends email from host to the user attempting verification, can use gmail for testing
      let transporter = nodeMailer.createTransport({
          host: 'smtp.gmail.com', // replace to use a different host
          port: 465,
          secure: true,
          auth: { // can use any gmail credentials for testing
              user: 'verf@gmail.com', // email of the verification handler
              pass: 'xxxx' // password
          }
      });
      let mailOptions = {
          from: '"Verification" <verf@gmail.com>', // sender address
          to: req.body.to, // list of receivers
          subject: "Email Verification", // title
          text: "Almost there, click the link to verify your email (link back to login/user page)", // email containing verification link that links back to the login/user page
      };

      transporter.sendMail(mailOptions, (error, info) => {
          if (error) {
              return console.log(error);
          }
          console.log('Message %s sent: %s', info.messageId, info.response);
              res.render('index');
          });
      });
          app.listen(port, function(){
            console.log('Server is running at port: ',port);
          });