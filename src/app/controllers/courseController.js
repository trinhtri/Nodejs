const Course = require("../models/course");
const { mongooseToObject } = require("../../util/mongoose");
const { mutipleMongooseToObject } = require("../../util/mongoose");
class CourseController {
  // . [GET] detail
  detail(req, res, next) {
    Course.findOne({ slug: req.params.slug })
      .then((result) => {
        res.render("courses/show", {
          dataDetail: mongooseToObject(result),
        });
      })
      .catch(next);
  }

  list(req, res, next) {
    Course.find({})
    .then(courses => {
       res.render('courses/list',{
            courses : mutipleMongooseToObject (courses)
           })
    })
    .catch(next)
  }

  create(req, res, next) {
    res.render("courses/create");
  }

  // POST
  store(req, res, next) {
      console.log('data', req.body )
      res.json(req.body)
    //   const course = new Sourse(req.body);
    //   course.save()
    //   res.send('luu thanh cong')
    // res.json(req.body);
  }
  edit(req, res, next){
    Course.findById(req.params.id)
           .then(course => res.render('courses/edit',{
             course : mongooseToObject(course)
          }))
           .catch(next)
  }

  // put
  update(req, res, next){
    console.log('trinhtri', req.body);
    Course.updateOne({_id: req.params.id }, req.body)
          .then(() => res.redirect('/courses/list'))
          .catch(next)
  }
}
module.exports = new CourseController();
