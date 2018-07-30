var notes = require('../controllers/notes.js');


module.exports = function(app) {

    // app.get('/', function(req, res){
    //     notes.show(req, res);
    // });

    app.get('/api/show', function (req, res){
        // res.render('index', {errors: req.session.errors});
        notes.show(req, res);
    });
    
    app.post('/api/create', function(req, res){
        notes.create(req, res);
        
    });
    app.all('*', function(req, res){
        res.sendFile(path.resolve('./public/dist/index.html'));
        
    });
    
// app.post('/register', function (req, res){
    // users.create(req, res);
// });

// app.post('/authenticate', function(req, res){
//     users.login(req, res);
// });

// app.get('/success', function(req, res){
//     res.render('success', {user: req.session.user, message: req.session.message});
// });
};

