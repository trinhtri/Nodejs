const Sourse = require('../models/course')
const {mongooseToObject} = require('../../util/mongoose')
class CourseController {
    // . [GET] detail  
    detail(req, res, next) {
        Sourse.findOne({ slug: req.params.slug})
        .then(result => {
             res.render('courses/show', {
                 dataDetail: mongooseToObject(result)
             })
            // res.json(result)
        })
        .catch(next)
    }
}
module.exports =new CourseController;