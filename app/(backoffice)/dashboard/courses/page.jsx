
import Image from "next/image";
import Link from 'next/link'

import styles from "@/app/ui/dashboard/courses/courses.module.css";
import Search from "@/app/ui/dashboard/search/search";
import Pagination from "@/app/ui/dashboard/pagination/pagination";
import { fetchCourses } from "@/lib/data";
import { deleteCourse } from "@/lib/actions";

const coursesPage = async ({ searchParams }) => {
  const q = searchParams?.q || "";
  const page = searchParams?.page || 1;
  const { count, courses } = await fetchCourses(q, page);

  return (
    <div className={styles.container}>
      <div className={styles.top}>
        <Search placeholder="Search for a course..." />
        <Link href="/dashboard/courses/add">
          <button className={styles.addButton}>Add New</button>
        </Link>
      </div>
      <table className={styles.table}>
        <thead>
          <tr>
          <td></td>
            <td>Title</td>
            <td>Description</td>
            <td>Price</td>
            <td>Intake</td>
            <td>Weeks</td>
            <td>Days</td>

            <td>Action</td>
          </tr>
        </thead>
        <tbody>
          {courses.map((course) => (
            <tr key={course.id}>
              <td>
                <div className={styles.course}>
                  <Image
                    src={course.image || "/nocourse.jpg"}
                    alt="courseImg"
                    width={80}
                    height={80}
                    className={styles.courseImage}
                  />
                  
                </div>
              </td>
              <td>{course.title}</td>
              <td>{course.desc}</td>
              <td>Kes.{course.price}</td>
              <td>{course.intake}</td>
              <td>{course.weeks}</td>
              <td>{course.days}</td>
              <td>
                <div className={styles.buttons}>
                  <Link href={`/dashboard/courses/${course.id}`}>
                    <button className={`${styles.button} ${styles.view}`}>
                      View
                    </button>
                  </Link>
                  <form action={deleteCourse}>
                    <input type="hidden" name="id" value={course.id} />
                    <button className={`${styles.button} ${styles.delete}`}>
                      Delete
                    </button>
                  </form>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <Pagination count={count} />
    </div>
  );
};

export default coursesPage;
