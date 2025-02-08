const { Router } = require("express");
const router = Router();
const userMiddleware = require("../middleware/user");
const { User, Course } = require("../db");

// User Routes
router.post('/signup', async (req, res) => {
    const username = req.headers.username;
    const password = req.headers.password;

    await User.create({
        username,
        password
    })

    res.json({
        msg : "User Created Successfully"
    })
});

router.get('/courses', async (req, res) => {

    const response = await Course.find({});
    res.json({
        courses: response
    })

});

router.post('/courses/:courseId', userMiddleware, async (req, res) => {
    const courseId = req.params.courseId;
    const username = req.headers.username;

   await User.updateOne({
        username: username
    },{
        "$push":{
            purchasedCourse: courseId
        }
    });
    res.json({
        message: "Purchased Complete."
    })
});

router.get('/purchasedCourses', userMiddleware, async (req, res) => {
   const user = await User.findOne({
    username : req.headers.username
   }) 

   const courses  = await Course.find({
    _id: {
        "$in" : user.purchasedCourse
    }
   });

   res.json({
    courses: courses
   })

});

module.exports = router