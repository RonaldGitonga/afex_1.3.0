import NextAuth from "next-auth";
import { connectToDB } from "./utils/connectToDb";
import CredentialsProvider from "next-auth/providers/credentials";
import { User } from "./models";
import { compare } from "bcrypt";

export const authOptions = {
 // adapter: PrismaAdapter(db),
  secret: process.env.NEXTAUTH_SECRET,
  session: {
    strategy: "jwt",
  },
  pages: {
    signIn: "/login",
  },
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: { label: "Email", type: "email", placeholder: "jb@gmail.com" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials) {
        try {
          connectToDB();
          console.log(
            "Authorize function called with credentials:",
            credentials
          );
          // Check if user credentials are Correct
          if (!credentials?.email || !credentials?.password) {
            throw { error: "No Inputs Found", status: 401 };
          }
          console.log("Pass 1 checked ");
          //Check if user exists
          const existingUser = await User.findOne({email:credentials.email})
          if (!existingUser) {
            console.log("No user found");
            throw { error: "No user found", status: 401 };
          }

          console.log("Pass 2 Checked");
          console.log(existingUser);
          //Check if Password is correct
          const passwordMatch = await compare(
            credentials.password,
            existingUser.hashedPassword
          );
          if (!passwordMatch) {
            console.log("Password incorrect");
            throw { error: "Password Incorrect", status: 401 };
          }
          console.log("Pass 3 Checked");
          //next auth returns user object from db
          const user = {
            id: existingUser.id,
            firstName: existingUser.firstName,
            lastName:existingUser.lastName,
            email: existingUser.email,
            role: existingUser.role,
            image:existingUser.image,
            emailVerified:existingUser.emailVerified,
          };
          //
          console.log("User Compiled");
          console.log(user);
          return user;
        } catch (error) {
          console.log("aLL Failed");
          console.log(error);
          throw { error: "Something went wrong", status: 401 };
        }
      },
    }),
  ],
  callbacks: {
    // async signIn({ account, profile }) {
    //   if (account.provider === "google") {
    //     const existingUser = await db.user.findUnique({
    //       where: { email: profile.email },
    //     });
    //     if (existingUser) {
    //       console.log("User Already exists in the DB");
    //     } else {
    //       const newUser = await db.user.create({
    //         data: {
    //           name: profile.name,
    //           email: profile.email,
    //           image: profile.picture,
    //           // emailVerified: profile.email_verified,
    //           role: "USER",
    //         },
    //       });
    //       console.log(newUser);
    //     }
    //     console.log(profile);
    //   }
    //   return profile;
    // },
    async session({ session,token }) {
      if (token) {
        console.log(`token:${token} in session`);
        session.user.id = token.id;
        session.user.firstName = token.firstName;
        session.user.lastName = token.lastName;
        session.user.email = token.email;
        session.user.role = token.role;
        session.user.image = token.image;
        session.user.emailVerified = token.emailVerified;
      }
      return session;
    },
    async jwt({ token, user }) {
   if(user){
    console.log(`token:${token} in session`)

        token.id= user.id,
        token.firstName= user.firstName,
        token.lastName=user.lastName,
        token.email=user.email,
        token.role= user.role,
        token.image= user.image,
        token.emailVerified=user.emailVerified
    
    };
    return token;
    },
  },
};  