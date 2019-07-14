const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
  name: String,
  password: String
});

const ExerciseSchema = new mongoose.Schema({
  name: String,
  sets_min: Number,
  sets_max: Number,
  reps_min: Number,
  reps_max: Number,
  target_muscle: String
})

const WorkoutSchema = new mongoose.Schema({
  sequence: Number,
  exercise_1a: [ExerciseSchema],
  exercise_1b: [ExerciseSchema],
  exercise_2a: [ExerciseSchema],
  exercise_2b: [ExerciseSchema],
  exercise_3a: [ExerciseSchema],
  exercise_3b: [ExerciseSchema]
})

const LogSchema = new mongoose.Schema({
  user: [UserSchema],
  exercise: [ExerciseSchema],
  date: Date,
  set1_weight: Number,
  set1_reps: Number,
  set2_weight: Number,
  set2_reps: Number,
  set3_weight: Number,
  set3_reps: Number,
  set4_weight: Number,
  set4_reps: Number,
  set5_weight: Number,
  set5_reps: Number,
  set6_weight: Number,
  set6_reps: Number,
})

module.exports = mongoose.model('Counter', CounterSchema);
