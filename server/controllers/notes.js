var mongoose = require('mongoose');
// var bcrypt = require('bcrypt'); 
var Note = mongoose.model('Note');

module.exports = {
    create: function(req, res){
        var note = new Note({content: req.body.content});
        console.log(req.body)
        note.save(function(err){ 
            if(err){
                res.json(err)
            } else {
                res.json(note);
            }
        });
        },
        show: function(req, res){
        Note.find({}).sort('-created_at').exec(function(err, notes){
            if(err){
                console.log(err)
            } else {
                res.json(notes);
            }
        })
    }
}
       
        // if (req.body.password != req.body.confirm){
        //     req.session.errors = {'confirm': {'message': 'Passwords do not match'}};
        //     res.redirect('/');
        // } else {
        //     var user = new User({
        //         first_name: req.body.first_name,
        //         last_name: req.body.last_name,
        //         email: req.body.email,
        //         password: req.body.password,
        //         birthday: req.body.birthday,
        //     });
        //     user.save(function(err){
        //         if(err){
        //             req.session.errors = user.errors;
        //             res.redirect('/');
        //         }
        //         else {
        //             req.session.user = user;
        //             req.session.message = 'registered';
        //             res.redirect('/success');
        //         }
        //     });
        // }
    // },
    // show: function(req, res){
    //     Note.find({}, function(err, notes){
    //         if(err){
    //             console.log(err);
    //         } else {
    //             res.json(notes);
    //         }
    //     });
    // console.log('in login function');
    // User.findOne({email: req.body.email}, function(err, user){
    //     console.log(user);
    //     if(!user){
    //         req.session.errors = {'login_email': {'message': 'There is not a registered user at that email address.  Please register a new account.'}};
    //         res.redirect('/');
    //     } else if (err){
    //         console.log(err);
    //         res.redirect('/');
    //     } else {
    //         if(bcrypt.compareSync(req.body.password, user.password)) {
    //             req.session.user = user;
    //             req.session.message = 'logged in';
    //             res.redirect('/success');
    //         } else {
    //             req.session.errors = {'login_password': {'message': 'Incorrect password.  Please try again.'}};
    //             res.redirect('/');
    //         }
    //     }
    // });