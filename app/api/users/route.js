import { connectToDB } from "@/lib/utils/connectToDb";
import { NextResponse } from "next/server";
import bcrypt from "bcrypt";
import { User } from "@/lib/models";
//import token maker v4 and token encoder base64url
import base64url from "base64url";
import {v4 as uuidv4} from 'uuid'
export async function POST(request) {
  try {
    connectToDB();
    //extract the credentials
    const { firstName,lastName, email, password, role,phoneNumber } = await request.json();
    //Check if the user Already exists in the db
    const existingUser = await User.findOne({email:email});

    if (existingUser) {
      return NextResponse.json(
        {
          data: null,
          message: `User with this email ( ${email})  already exists in the Database`,
        },
        { status: 409 }
      );
    }
    else{
      console.log('email available')
    }
    // Encrypt the Password =>bcrypt
    const hashedPassword = await bcrypt.hash(password, 10);
  //GENERATE TOKEN TO SEND TO EMAIL FOR VERIFICATION
      // Generate a random UUID (version 4)
  const rawToken = uuidv4();

  // Encode the token using Base64 URL-safe format
  const base64Token = base64url.encode(rawToken);

  //SEND VERIFICATION TOKEN TO EMAIL
  
    // const newUser = new User({
  
    //     firstName,
    //     lastName,
    //     email,
    //     password,
    //     hashedPassword,
    //     verificationToken:base64Token
    //     role,
    //     phoneNumber,
      
    // });
    // await newUser.save();
    //  console.log(newUser);



     console.log(base64Token)
     
    return NextResponse.json(
      {
        // newUser,
        message: "User Created Successfully",
      },
      { status: 201 }
    );
  } catch (error) {
    console.log(error);
    return NextResponse.json(
      {
        error,
        message: "Server Error: Something went wrong",
      },
      { status: 500 }
    );
  }
}


//Get all users
export async function GET(request) {
  try {
    const users = await UserModel.find({}).sort({createdAt:"desc"})
    return NextResponse.json(users);
  } catch (error) {
    console.log(error);
    return NextResponse.json(
      {
        message: "Failed to Fetch Users",
        error,
      },
      { status: 500 }
    );
  }
}
