const Sourse = require('../models/course')
const { mutipleMongooseToObject } = require('../../util/mongoose')
class SiteController {
    // . [GET] Home  
    index(req, res,next){
          Sourse.find({})
             .then(courses => {
                res.render('home',{
                     courses : mutipleMongooseToObject (courses)
                    })
             })
             .catch(next)
    }

    // [GET] search
    search(req, res) {
        res.render("search");
    }
}
module.exports =new SiteController;