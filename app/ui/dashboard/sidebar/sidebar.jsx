
import Image from "next/image";
import MenuLink from "./menuLink/menuLink";
import styles from "./sidebar.module.css";
import SignOut from "../SignOut";



import {
  MdDashboard,
  MdSupervisedUserCircle,

  MdWork,
  MdAnalytics,
  MdPeople,

  MdLogout,
  MdEvent,
  MdSchool,
} from "react-icons/md";
// import { User2 } from "lucide-react";
import{FaBlogger} from 'react-icons/fa'
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/authOptions";
import  {signOut} from "next-auth/react";






const adminItems = [
  {
    title: "Admin",
    list: [
      {
        title: "Dashboard",
        path: "/dashboard",
        icon: <MdDashboard />,
      },

      {
        title: "Users",
        path: "/dashboard/users",
        icon: <MdSupervisedUserCircle />,
      },
      {
        title: "Courses",
        path: "/dashboard/courses",
        icon: <MdSchool />,
      },
      {
        title: "Events",
        path: "/dashboard/events/add",
        icon: <MdEvent />,
      },
      {
        title: "Blogs",
        path: "/dashboard/blogs",
        icon: <FaBlogger/>,
      },
      {
        title: "Tutors",
        path: "/dashboard/tutors",
        icon: <MdPeople />,
      },
      {
        title: "Revenue",
        path: "/dashboard/revenue",
        icon: <MdWork />,
      },
      {
        title: "Engagements",
        path: "/dashboard/reports",
        icon: <MdAnalytics />,
      },
      
    ],
  },


];
    
const marketingItems=[
  {
    title:'Marketing',
    list:[
    {
      title: "Events",
      path: "/dashboard/events/add",
      icon: <MdEvent />,
    },
    {
      title: "Blogs",
      path: "/dashboard/blogs",
      icon: <FaBlogger/>,
    },
  ]
  } 
  ]

  const tutorItems=[{
    title:'Tutor',
    list:[
      {
        title: "Tutors",
        path: "/dashboard/tutors",
        icon: <MdPeople />,
      },
    ]
  }]

  const studentItems=[{
    title:'Students',
    list:[
      {
        title: "Students",
        path: "/dashboard/My Courses",
        icon: <MdPeople />,
      },
    ]
  }]

const Sidebar = async () => {
  const session=await getServerSession(authOptions)

const menuItems=
session?.user?.role==='Admin'
  ? adminItems
  : session?.user?.role==="Marketing"
  ? marketingItems
  : session?.user?.role==="Tutor"
  ? tutorItems
  : studentItems
  

  return (
    <div className={styles.container}>
      <div className={styles.user}>
        <Image
          className={styles.userImage}
          
          src={"/noavatar.png"}
          alt=""
          width="50"
          height="50"
        />
        <div className={styles.userDetail}>
          {/* Return User after fixing auth user.username to line 96 */}
          <span className={styles.username}>{session?.user?.firstName}</span>
          <span className={styles.userTitle}>{session?.user?.role}</span>
        </div>
      </div>
      <ul className={styles.list}>
        {menuItems.map((cat) => (
          <li key={cat.title}>
            <span className={styles.cat}>{cat.title}</span>
            {cat.list.map((item) => (
              <MenuLink item={item} key={item.title} />
            ))}
          </li>
        ))}
      </ul>
 <SignOut/>

    </div>
  );
};

export default Sidebar;
