class NewController {
    // . [GET] News  
    index(req, res){
        console.log('req', req.query);
        res.render('news');
    }

    show(req, res) {
        res.send('hello !!!!')
    }
}
module.exports =new NewController;