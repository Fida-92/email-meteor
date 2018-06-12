import { Meteor } from 'meteor/meteor';
import '../imports/methods.js';
Meteor.startup(() => {
    Meteor.startup(function () {
       process.env.MAIL_URL = "smtps://postmaster%40sandboxc5a13ee69f514381b211a3bfbff57be3.mailgun.org:6b72f50d3ba40faf8b2335e88a7e07bc-b892f62e-b7f7b2fe@smtp.mailgun.org:587";
       // process.env.MAIL_URL = "smtps://SMTP_Injection:974ec0d63ee70cc15787a4e24d62a61ead81cfa7@smtp.sparkpostmail.com:587";

        Accounts.config({
            sendVerificationEmail:true
        })
    });
});
/*
* SMTP Integration
Use the information below to configure your SMTP client to relay via SparkPost. We generated an API key for you to use as a password.

Host smtp.sparkpostmail.com
Port
587
Alternative Port
2525
Authentication AUTH LOGIN
Encryption STARTTLS
Username SMTP_Injection
* Password: 974ec0d63ee70cc15787a4e24d62a61ead81cfa7
*
*
* */