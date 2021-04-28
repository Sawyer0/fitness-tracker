const Workout = require("../models/workout");
const router = require("express").Router();

router.post("/api/workouts", function (req, res) {
  Workout.create({})
    .then((dbWorkout) => {
      res.json(dbWorkout);
    })
    .catch((err) => {
      res.json(err);
    });
});


router.get("/api/workouts", function (req, res) {
  Workout.find({})
    .then((dbWorkout) => {
      res.json(dbWorkout);
    })
    .catch((err) => {
      res.json(err);
    });
});


module.exports = router;