import './ArticlePage.css';
import { useParams, useNavigate } from 'react-router-dom'; // استخدام useNavigate بدلاً من useHistory
import './ArticlePage.css'; // ملف التنسيق الخاص بالصفحة
import { blogs } from '../../DB/blogData'; // استيراد بيانات المقالات

const ArticlePage = () => {
  const { id } = useParams(); // استخراج المعرف من الرابط
  const navigate = useNavigate(); // استخدام useNavigate بدلاً من useHistory
  const blog = blogs.find((blog) => blog.id === parseInt(id!)); // إيجاد المقال بناءً على المعرف

  // إذا لم يتم العثور على المقال، نعيد توجيه المستخدم إلى الصفحة الرئيسية
  if (!blog) {
    navigate('/'); // إعادة التوجيه إلى الصفحة الرئيسية باستخدام navigate
    return null; // عدم عرض الصفحة في حال عدم وجود المقال
  }

  return (
    <div className="article-page">
      <div className="article-hero">
        <img src={blog.blogImage} alt={blog.blogTitle} className="article-image" />
        <div className="article-overlay"></div>
        <h1 className="article-title">{blog.blogTitle}</h1>
      </div>
      <div className="article-content">
        <p className="article-category">/{" "}{blog.category}</p>
        
        <div className="article-text">
          {blog.sections.map((section, index) => (
            <div key={index}>
              <h2 className="section-title">{section.title}</h2>
              <p>{section.content}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ArticlePage;
