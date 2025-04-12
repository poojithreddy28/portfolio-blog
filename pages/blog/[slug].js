import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import Layout from '../../components/Layout';
import { getAllPostIds, getPostData } from '../../lib/posts';
import Link from 'next/link';
import Icon from '../../components/Icon';

export default function BlogPost({ postData }) {
  const router = useRouter();
  const [stats, setStats] = useState({ views: 0, likes: 0 });
  const [hasLiked, setHasLiked] = useState(false);

  const fetchStats = async () => {
    const res = await fetch(`/api/getStats?postId=${postData.slug}`);
    const data = await res.json();
    setStats(data);
  };

  useEffect(() => {
    fetchStats();
  }, [postData.slug]);

  useEffect(() => {
    fetch('/api/updateView', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ postId: postData.slug }),
    }).then(fetchStats);
  }, [postData.slug]);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const liked = localStorage.getItem(`liked-${postData.slug}`);
      setHasLiked(!!liked);
    }
  }, [postData.slug]);

  const handleLike = async () => {
    if (hasLiked) return;
    await fetch('/api/updateLike', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ postId: postData.slug }),
    });
    localStorage.setItem(`liked-${postData.slug}`, 'true');
    setHasLiked(true);
    fetchStats();
  };

  const handleShare = () => {
    if (navigator.share) {
      navigator.share({
        title: postData.title,
        text: postData.excerpt || 'Check out this post',
        url: window.location.href,
      }).catch(console.log);
    } else {
      navigator.clipboard.writeText(window.location.href)
        .then(() => alert('Link copied to clipboard!'))
        .catch(console.error);
    }
  };

  if (router.isFallback || !postData) {
    return (
      <Layout title="Loading...">
        <div className="loading-container">
          <div className="loading">Loading...</div>
        </div>
      </Layout>
    );
  }

  return (
    <Layout title={`${postData.title} | Poojith's Blog`}>
      <article className="blog-post">
        <div className="container">
          <div className="blog-header">

            {/* Category and stats in a single clean row */}
            <div style={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              flexWrap: 'wrap',
              gap: '12px',
              marginBottom: '1rem',
            }}>
              <span className="blog-category">{postData.category}</span>
              <div style={{
                display: 'flex',
                alignItems: 'center',
                gap: '16px',
                fontSize: '0.95rem',
                color: '#444',
              }}>
                <span style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                  👁 Viewed by <strong>{stats.views}</strong>
                </span>

                <button
                  onClick={handleLike}
                  aria-label="Like post"
                  disabled={hasLiked}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    border: 'none',
                    background: 'none',
                    fontSize: '1rem',
                    cursor: hasLiked ? 'not-allowed' : 'pointer',
                    color: hasLiked ? '#aaa' : '#333',
                    opacity: hasLiked ? 0.6 : 1
                  }}
                >
                  <Icon name="heart" />
                  <span style={{ marginLeft: '6px' }}>{stats.likes}</span>
                </button>

                <button
                  onClick={handleShare}
                  aria-label="Share post"
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    border: 'none',
                    background: 'none',
                    fontSize: '1rem',
                    color: '#333',
                    cursor: 'pointer',
                  }}
                >
                  <Icon name="share" />
                </button>
              </div>
            </div>

            <h1 className="blog-title">{postData.title}</h1>

            <div className="blog-meta" style={{ marginTop: '8px', color: '#888' }}>
              <time>{postData.date}</time>
            </div>
          </div>

          <div
            className="blog-content"
            dangerouslySetInnerHTML={{ __html: postData.contentHtml }}
          />

          <div className="blog-footer" style={{ marginTop: '3rem' }}>
            <Link href="/blog" className="back-link">
              ← Back to all posts
            </Link>
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