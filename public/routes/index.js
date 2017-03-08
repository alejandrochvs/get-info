module.exports = function(app) {
  app.route('/whoami')
    .get(function(req, res) {
      var ip = req.headers['x-forwarded-for'];
     var info = {
         'ipaddress': ip,
         'language': req.headers["accept-language"].split(',')[0],
         'software': req.headers['user-agent'].split(') ')[0].split(' (')[1]
     };
     res.send(info);
    });
    app.route('/test').get(function(req,res){
        res.send(req);
    });
    app.route('/info').get(function(req,res){
        res.send(req.headers);
    });
}; 