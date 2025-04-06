import blogImage from '../assets/blog-1.webp';
// Define the structure for each section of the blog
export interface Section {
    title: string;
    content: string;
  }
export interface Blog {
    id: number;
    category: string;
    blogTitle: string;
    blogImage: string;
    blogContent?: string;  // Optional content field for backward compatibility
    sections: Section[];  // Add the sections as an array of Section objects
  }
export const blogs: Blog[] = [
  {
    id: 1,
    category: 'Digital Marketing',
    blogTitle: 'The Future of Digital Marketing',
    blogImage: blogImage,
    sections: [
      {
        title: 'Introduction',
        content: `
          Digital marketing is evolving rapidly. In this article, we will explore trends, tools, and strategies shaping the industry.
          As businesses increasingly move online, digital marketing has become more important than ever before. The future of digital marketing will likely involve a greater emphasis on artificial intelligence, machine learning, and personalization. These technologies allow marketers to target the right audience with the right message, at the right time.
        `
      },
      {
        title: 'Trends and Tools',
        content: `
          Platforms like social media and search engines are continuously evolving, providing new opportunities for marketers to reach consumers. Video content, influencer marketing, and data-driven strategies are expected to dominate the landscape in the coming years.
        `
      },
      {
        title: 'The Role of AI and Automation',
        content: `
          With the advent of new tools and platforms, digital marketing is becoming more integrated with other aspects of business strategy. Companies will need to focus on creating a seamless experience for their customers across all digital touchpoints. Whether it's through paid ads, content marketing, or email campaigns, digital marketing will remain at the forefront of business growth.
        `
      }
    ]
  },
  {
    id: 2,
    category: 'Branding & Communication',
    blogTitle: 'Effective Branding Strategies',
    blogImage: blogImage,
    sections: [
      {
        title: 'Introduction',
        content: `
          Branding is essential for any business. Here are the key branding strategies you should focus on to build a successful brand.
          One of the most important aspects of branding is consistency. Your brand's voice, tone, and visual identity should remain consistent across all channels. This creates a cohesive experience for your audience and helps build trust.
        `
      },
      {
        title: 'Understanding Your Target Audience',
        content: `
          Another crucial element is understanding your target audience. By deeply knowing who your customers are, their needs, and their pain points, you can create a brand that resonates with them. Focus on building a relationship with your customers rather than just selling a product.
        `
      },
      {
        title: 'Storytelling and Innovation',
        content: `
          Storytelling plays a vital role in modern branding. Brands that can tell compelling stories that connect emotionally with their audience often see greater engagement and loyalty. Whether it's through customer testimonials or brand narratives, storytelling humanizes your brand.
          Innovation is key to staying ahead of the competition. Continuously adapt your branding strategies to align with changing market trends, customer preferences, and technology.
        `
      }
    ]
  },
  {
    id: 3,
    category: 'Branding & Communication',
    blogTitle: 'Effective Branding Strategies',
    blogImage: blogImage,
    sections: [
      {
        title: 'Introduction',
        content: `
          Branding is essential for any business. Here are the key branding strategies you should focus on to build a successful brand.
          One of the most important aspects of branding is consistency. Your brand's voice, tone, and visual identity should remain consistent across all channels. This creates a cohesive experience for your audience and helps build trust.
        `
      },
      {
        title: 'Understanding Your Target Audience',
        content: `
          Another crucial element is understanding your target audience. By deeply knowing who your customers are, their needs, and their pain points, you can create a brand that resonates with them. Focus on building a relationship with your customers rather than just selling a product.
        `
      },
      {
        title: 'Storytelling and Innovation',
        content: `
          Storytelling plays a vital role in modern branding. Brands that can tell compelling stories that connect emotionally with their audience often see greater engagement and loyalty. Whether it's through customer testimonials or brand narratives, storytelling humanizes your brand.
          Innovation is key to staying ahead of the competition. Continuously adapt your branding strategies to align with changing market trends, customer preferences, and technology.
        `
      }
    ]
  },
  // يمكنك إضافة المزيد من المقالات هنا مع الأقسام الخاصة بهم
];
