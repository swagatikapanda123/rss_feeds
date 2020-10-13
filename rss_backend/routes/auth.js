function isAuthenticated(req, res, next){
    let username= req.body.username;
    let password = req.body.password;

    if (username && password) {
        User.authenticate(username, password, function (error, user) {
          if (error || !user) {
            var err = new Error('Wrong username or password.');
            err.status = 401;
            return next(err);
             }  else {
            req.session.userId = user._id;
            return res.redirect('/feeds');
          }
        });
      } 
      else {
        var err = new Error('Usernamee and password are required.');
        err.status = 401;
        return next(err);
      }
}


