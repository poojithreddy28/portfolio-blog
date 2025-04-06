import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import Layout from '../../components/Layout';
import { getAllPostIds, getPostData } from '../../lib/posts';
import Link from 'next/link';
import Icon from '../../components/Icon';

export default function BlogPost({ postData }) {
  const router = useRouter();
  const [likes, setLikes] = useState(0);

  // Handle case when the page is directly accessed
  if (router.isFallback || !postData) {
    return (
      <Layout title="Loading...">
        <div className="loading-container">
          <div className="loading">Loading...</div>
        </div>
      </Layout>
    );
  }
  
  // Load likes from localStorage on component mount
  // eslint-disable-next-line react-hooks/rules-of-hooks
  useEffect(() => {
    const savedLikes = localStorage.getItem('blogPostLikes');
    if (savedLikes) {
      const likesData = JSON.parse(savedLikes);
      setLikes(likesData[postData.slug] || 0);
    }
  }, [postData.slug]);
  
  // Handle like button click
  const handleLike = () => {
    const newLikeCount = likes + 1;
    setLikes(newLikeCount);
    
    // Update localStorage
    const savedLikes = localStorage.getItem('blogPostLikes');
    const likesData = savedLikes ? JSON.parse(savedLikes) : {};
    
    localStorage.setItem('blogPostLikes', JSON.stringify({
      ...likesData,
      [postData.slug]: newLikeCount
    }));
  };
  
  // Handle share functionality
  const handleShare = () => {
    // Check if Navigator Share API is available
    if (navigator.share) {
      navigator.share({
        title: postData.title,
        text: postData.excerpt || 'Check out this post',
        url: window.location.href,
      })
      .catch(error => console.log('Error sharing', error));
    } else {
      // Fallback to copying URL to clipboard
      navigator.clipboard.writeText(window.location.href)
        .then(() => alert('Link copied to clipboard!'))
        .catch(err => console.error('Failed to copy: ', err));
    }
  };

  if (router.isFallback) {
    return <div className="loading">Loading...</div>;
  }

  return (
    <Layout title={`${postData.title} | Poojith's Blog`}>
      <article className="blog-post">
        <div className="container">
          <div className="blog-header">
            <div className="blog-header-top">
              <span className="blog-category">{postData.category}</span>
              <div className="blog-actions">
                <button className="like-button" onClick={handleLike} aria-label="Like post">
                  <Icon name="heart" /> <span>{likes}</span>
                </button>
                <button className="share-button" onClick={handleShare} aria-label="Share post">
                  <Icon name="share" />
                </button>
              </div>
            </div>
            <h1 className="blog-title">{postData.title}</h1>
            <div className="blog-meta">
              <time>{postData.date}</time>
            </div>
          </div>
          
          <div 
            className="blog-content"
            dangerouslySetInnerHTML={{ __html: postData.contentHtml }} 
          />
          
          <div className="blog-footer">
            <Link href="/blog" className="back-link">
              ← Back to all posts
            </Link>
            <div className="blog-footer-actions">
              {/* <button className="like-button" onClick={handleLike} aria-label="Like post">
                <Icon name="heart" /> <span>{likes}</span>
              </button> */}
              <button className="share-button" onClick={handleShare} aria-label="Share post">
                <Icon name="share" />
              </button>
            </div>
          </div>
        </div>
      </article>
    </Layout>
  );
}

export async function getStaticPaths() {
  const paths = getAllPostIds();
  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const postData = await getPostData(params.slug);
  return {
    props: {
      postData,
    },
  };
}