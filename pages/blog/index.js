import { useState, useEffect } from 'react';
import Layout from '../../components/Layout';
import Link from 'next/link';
import { getSortedPostsData } from '../../lib/posts';
import Icon from '../../components/Icon';

export default function Blog({ allPostsData }) {
  // State to track likes for each post
  const [likes, setLikes] = useState({});
  
  // Load likes from localStorage on component mount
  useEffect(() => {
    const savedLikes = localStorage.getItem('blogPostLikes');
    if (savedLikes) {
      setLikes(JSON.parse(savedLikes));
    }
  }, []);
  
  // Update localStorage when likes change
  useEffect(() => {
    localStorage.setItem('blogPostLikes', JSON.stringify(likes));
  }, [likes]);
  
  // Handle like button click
  const handleLike = (id, e) => {
    e.preventDefault(); // Prevent navigation to post
    e.stopPropagation(); // Prevent event bubbling
    
    setLikes(prevLikes => {
      const currentLikes = prevLikes[id] || 0;
      return {
        ...prevLikes,
        [id]: currentLikes + 1
      };
    });
  };
  
  // Handle share functionality
  const handleShare = (post, e) => {
    e.preventDefault();
    e.stopPropagation();
    
    // Check if Navigator Share API is available
    if (navigator.share) {
      navigator.share({
        title: post.title,
        text: post.excerpt,
        url: `${window.location.origin}/blog/${post.id}`,
      })
      .catch(error => console.log('Error sharing', error));
    } else {
      // Fallback to copying URL to clipboard
      const url = `${window.location.origin}/blog/${post.id}`;
      navigator.clipboard.writeText(url)
        .then(() => alert('Link copied to clipboard!'))
        .catch(err => console.error('Failed to copy: ', err));
    }
  };

  return (
    <Layout title="Blog | Poojith Reddy">
      <section className="blog-index-section">
      <div className="container">
          <div className="section-name center">
            <div className="content">
              <p className="above-title">My Blog</p>
              <h4 className="title">Technical Insights</h4>
            </div>
          </div>
          
          {/* Category filters could go here */}
          
          {/* Blog posts list */}
          <div className="blog-posts-list">
            {allPostsData.length > 0 ? (
              allPostsData.map((post) => (
                <article className="blog-post-entry" key={post.id}>
                  <div className="post-entry-meta">
                     <div className="post-entry-tag">{post.category}</div>
                    <div className="post-actions">
                      {/* <button 
                        className={`like-button ${likes[post.id] > 0 ? 'liked' : ''}`} 
                        onClick={(e) => handleLike(post.id, e)}
                        aria-label="Like post"
                      >
                        <Icon name="heart" /> 
                        <span>{likes[post.id] || 0}</span>
                      </button> */}
                      <button 
                        className="share-button" 
                        onClick={(e) => handleShare(post, e)}
                        aria-label="Share post"
                      >
                        <Icon name="share" />
                      </button>
                    </div>
                  </div>
                  
                  <h2 className="post-entry-title">
                    <Link href={`/blog/${post.id}`}>
                      {post.title}
                    </Link>
                  </h2>
                  
                  <div className="post-entry-date">{post.date}</div>
                  
                  <p className="post-entry-excerpt">{post.excerpt}</p>
                  
                  <Link href={`/blog/${post.id}`} className="post-entry-link">
                    Continue Reading <span className="entry-arrow">→</span>
                  </Link>
                </article>
              ))
            ) : (
              <p className="no-posts">No blog posts yet. Check back soon!</p>
            )}
          </div>
        </div>
      </section>
    </Layout>
  );
}

export async function getStaticProps() {
  const allPostsData = getSortedPostsData();
  return {
    props: {
      allPostsData,
    },
  };
}