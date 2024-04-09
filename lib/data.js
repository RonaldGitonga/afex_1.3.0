import { Course, User,Blog,Event } from "./models";
import { connectToDB } from "./utils/connectToDb";


export const fetchUsers = async (q, page) => {
  const regex = new RegExp(q, "i");

  const ITEM_PER_PAGE = 2;

  try {
    connectToDB();
    const count = await User.find({ firstName: { $regex: regex } }).count();
    const users = await User.find({ firstName: { $regex: regex } })
      .limit(ITEM_PER_PAGE)
      .skip(ITEM_PER_PAGE * (page - 1));
    return { count, users };
  } catch (err) {
    console.log(err);
    throw new Error("Failed to fetch users!");
  }
};

export const fetchUser = async (id) => {
  console.log(id);
  try {
    connectToDB();
    const user = await User.findById(id);
    return user;
  } catch (err) {
    console.log(err);
    throw new Error("Failed to fetch user!");
  }
};

export const fetchCourses = async (q, page) => {
  console.log(q);
  const regex = new RegExp(q, "i");

  const ITEM_PER_PAGE = 2;

  try {
    connectToDB();
    const count = await Course.find({ title: { $regex: regex } }).count();
    const courses = await Course.find({ title: { $regex: regex } })
      .limit(ITEM_PER_PAGE)
      .skip(ITEM_PER_PAGE * (page - 1));
    return { count, courses };
  } catch (err) {
    console.log(err);
    throw new Error("Failed to fetch courses!");
  }
};
//fetch frontend courses
export const fetchfrontCourses = async () => {


  try {
    connectToDB();
   
    const courses = await Course.find({ })
      .limit(10)
      //.skip(ITEM_PER_PAGE * (page - 1));
    return {courses };
  } catch (err) {
    console.log(err);
    throw new Error("Failed to fetch courses!");
  }
};

export const fetchCourse = async (id) => {
  try {
    connectToDB();
    const course = await Course.findById(id);
    return course;
  } catch (err) {
    console.log(err);
    throw new Error("Failed to fetch course!");
  }
};


  export const fetchBlogs = async (q, page) => {
    console.log(q);
    const regex = new RegExp(q, "i");
  
    const ITEM_PER_PAGE = 1;
  
    try {
      connectToDB();
      const count = await Blog.find({ name: { $regex: regex } }).count();
      const blogs = await Blog.find({ name: { $regex: regex } })
        .limit(ITEM_PER_PAGE)
        .skip(ITEM_PER_PAGE * (page - 1));
      return { count, blogs };
    } catch (err) {
      console.log(err);
      throw new Error("Failed to fetch blogs!");
    }
  };

  //fetch events
  export const fetchEvents = async (q, page) => {
    console.log(q);
    const regex = new RegExp(q, "i");
  
    const ITEM_PER_PAGE = 4;
  
    try {
      connectToDB();
      const count = await Event.find({ title: { $regex: regex } }).count();
      const events = await Event.find({ title: { $regex: regex } })
        .limit(ITEM_PER_PAGE)
        .skip(ITEM_PER_PAGE * (page - 1));
      return events ;
    } catch (err) {
      console.log(err);
      throw new Error("Failed to fetch events!");
    }
  };







// DUMMY DATA

export const cards = [
  {
    id: 1,
    title: "Total Users",
    number: 10.928,
    change: 12,
  },

  {
    id: 2,
    title: "Revenue",
    number: 6.642,
    change: 18,
  },
];
