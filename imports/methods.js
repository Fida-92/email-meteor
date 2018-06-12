import {Meteor} from 'meteor/meteor'

Meteor.methods({

    sendeEmail:function(){

    Email.send({  // <-- runs OK
        from: "fida.ahmed.92@mail.ru",
        to: "fida.ahmed.92@mail.ru",
        subject: "Test subject",
        text: "Test email body",
    })
    }

    });