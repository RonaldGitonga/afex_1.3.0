import Image from "next/image";
import Link from "next/link";
import styles from "@/app/ui/dashboard/courses/courses.module.css";
import Search from "@/app/ui/dashboard/search/search";
import Pagination from "@/app/ui/dashboard/pagination/pagination";
import { fetchBlogs } from "@/lib/data";
import { deleteBlog } from "@/lib/actions";

const blogsPage = async ({ searchParams }) => {
  const q = searchParams?.q || "";
  const page = searchParams?.page || 1;
  const { count, blogs } = await fetchBlogs(q, page);

  return (
    <div className={styles.container}>
      <div className={styles.top}>
        <Search placeholder="Search for a blog..." />
        <Link href="/dashboard/blogs/add">
          <button className={styles.addButton}>Add New</button>
        </Link>
      </div>
      <table className={styles.table}>
        <thead>
          <tr>
            <td>Title</td>
            <td>Description</td>
        
          </tr>
        </thead>
        <tbody>
          {blogs.map((blog) => (
            <tr key={blog.id}>
              <td>
                <div className={styles.courses}>
                  <Image
                    src={blog.image || "/nocourse.jpg"}
                    alt=""
                    width={70}
                    height={70}
                    className={styles.blogImage}
                  />
                  {blog.name}
                </div>
              </td>
              <td>{blog.description.slice(0,30)}...</td>
           
              <td>
                <div className={styles.buttons}>
                  <Link href={`/dashboard/blogs/${blog.id}`}>
                    <button className={`${styles.button} ${styles.view}`}>
                      View
                    </button>
                  </Link>
                  <form action={deleteBlog}>
                    <input type="hidden" name="id" value={blog.id} />
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

export default blogsPage;
