import { useState } from 'react';
import { Link } from 'react-router-dom';
import './Blog.css';
import { blogs } from '../../DB/blogData';
import BlogBox from '../../components/shared/blogBox/blogBox';

const Blog = () => {
  const [selectedCategory, setSelectedCategory] = useState('All Categories');

  // فلترة المقالات بناءً على الفئة المحددة
  const filteredBlogs = selectedCategory === 'All Categories'
    ? blogs
    : blogs.filter(blog => blog.category === selectedCategory);

  const handleCategoryChange = (category: string) => {
    setSelectedCategory(category);
  };

  return (
    <div className="Blog">
      <div className="blog-hero">
        <h1>Our Blogs</h1>
        <div className="blog-filter">
          <p className="sub-Head">Our Blog</p>
          <ul className="blog-filter-options">
            <li onClick={() => handleCategoryChange('All Categories')}>All Categories</li>
            <li onClick={() => handleCategoryChange('Digital Marketing')}>Digital Marketing</li>
            <li onClick={() => handleCategoryChange('Branding & Communication')}>Branding & Communication</li>
            <li onClick={() => handleCategoryChange('Ecommerce')}>Ecommerce</li>
            <li onClick={() => handleCategoryChange('Web Development')}>Web Development</li>
            <li onClick={() => handleCategoryChange('Video Animation')}>Video Animation</li>
          </ul>
        </div>
      </div>

      <div className="blogList">
        {filteredBlogs.map((blog) => (
          <Link 
            to={`/article/${blog.id}`} 
            key={blog.id}>
            <BlogBox blog={blog} />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Blog;
