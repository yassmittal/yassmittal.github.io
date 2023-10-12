function Blogs({ Blogs ,handleDelete }) {
  return (
    <div>
      {Blogs.map((blog) => {
        return (
          <div >
            {" "}
            {blog.title} is the title of the blog and {blog.id} is the id of the
            blog and and and finally {blog.body} is the body of the {blog.title}{" "}

            <button onClick={() => handleDelete(blog.id)}>delete this blog</button>
          </div>
        );
      })}
    </div>
  );
}

export default Blogs;
