//@ts-nocheck
import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
  {
    firstName: {
      type: String,
      required: true,
      unique: true,
      min: 3,
      max: 20,
    },
    lastName: {
      type: String,
      required: true,
      unique: true,
      min: 3,
      max: 20,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    phoneNumber: {
      type: String,
      required: true,
      unique: true,
    },
    emailVerified:{
      type:Boolean,
      default:false,

    },
    emailVerifiedDate:{
      type:Date,
      default:Date.now,
    },
    verificationToken:{
      type:String,
    },
    password: {
      type: String,
      required: true,
    },
    hashedPassword:{type:String},
    image: {
      type: String,
    },
    role: {
      type: String,
      enum: ['Admin','Finance','Marketing','Tutor','Student'],
      default:'Student',
      required:true,
    
      
    },
    isActive: {
      type: Boolean,
      default: true,
    },
   
    address: {
      type: String,
    },
    courseEnrolled:{
      type:String
    },
    currentProgress:{
      type:String
    },
    paymentComplete:{
      type:Boolean
    },
   
  },
  { timestamps: true }
);



const courseSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
      unique: true,
    },
    desc: {
      type: String,
      required: true,
    },
    price: {
      type: Number,
      required: true,
      min: 0,
    },
    weeks: {
      type: Number,
      required: true,
      min: 0,
    },
    noOfModules:{
      type:Number,
    },
    image: {
      type: String,
    },
    cohort: {
      type: String,
    },
    intake: {
      type: String,
    },
    days: {
      type: String,
    },
    
  },
  { timestamps: true }
);

const eventSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
      unique: true,
    },
    description: {
      type: String,
      required: true,
    },
    date: {
      type: Date,
      required: true,
      min: 0,
    },
    time: {
      type: String,
      required: true,
      min: 0,
    },
    image: {
      type: String,
   
    },
    location:{
      type:String,
    },
    


},
{ timestamps: true }
);
const blogSchema = new mongoose.Schema({
  name:{String}, // String is shorthand for {type: String}
  
  description:{ String},
  comments: [{ body: String, date: Date }],
 
  
  meta: {
    votes: Number,
    favs: Number
  },
  
  createdAt:{
    type:Date,default:Date.now,
    
  },
  image:{type:String},

});
//analtyics model
  
const analyticsSchema = new mongoose.Schema({
  SAT:{Number}, // String is shorthand for {type: String}
  GMAT:{Number},
  IELTS:{ Number},
  pageVisits:{Number},

  date: { type: Date, default: Date.now },
  createdAt:{
    type:Date,default:Date.now,
    
  },
});




export const User = mongoose.models.User || mongoose.model("User", userSchema);
export const Course = mongoose.models.Course || mongoose.model("Course", courseSchema);
export const Event=mongoose.models.Event || mongoose.model("Event",eventSchema);
export const Blog=mongoose.models.Blog || mongoose.model("Blog",blogSchema);
export const Analytics=mongoose.models.Analytics || mongoose.model("Analytics",analyticsSchema);
