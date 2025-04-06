import { Blog } from '../../../DB/blogData';
import './blogBox.css';

interface BlogBoxProps {
  blog: Blog; // Define the type of 'blog' prop
}

const BlogBox = ({ blog }: BlogBoxProps) => {
  // Make sure there are sections to display content
  const excerpt = blog.sections.length > 0 ? blog.sections[0].content.slice(0, 180) : ''; // Get content of the first section

  return (
    <div className="blogBox">
      <img src={blog.blogImage} alt={blog.blogTitle} className="blogImage" />
      <div className="blogContent">
        <p className="blogCategory">{blog.category}</p>
        <h2 className="blogTitle">{blog.blogTitle}</h2>
        {/* Display excerpt from the first section */}
        <p className="blogExcerpt">{excerpt}...</p>
      </div>
    </div>
  );
};

export default BlogBox;
