import { useState, useEffect } from 'react';
import Layout from '../../components/Layout';
import Link from 'next/link';
import { getSortedPostsData } from '../../lib/posts';
import Icon from '../../components/Icon';
import { initPortfolioScripts } from '../../lib/portfolioScripts';

export default function Blog({ allPostsData }) {
  const [stats, setStats] = useState({});

  useEffect(() => {
    // Initialize portfolio scripts for header functionality
    const cleanup = initPortfolioScripts();
    
    return () => {
      if (cleanup) cleanup();
    };
  }, []);

  useEffect(() => {
    const fetchStats = async () => {
      const updates = {};
      for (const post of allPostsData) {
        try {
          const res = await fetch(`${process.env.NEXT_PUBLIC_STATS_URL}?postId=${post.id}`);
          const data = await res.json();
          updates[post.id] = {
            likes: data.likes || 0,
            views: data.views || 0,
          };
        } catch (e) {
          console.error('Failed to load stats for:', post.id);
        }
      }
      setStats(updates);
    };
    fetchStats();
  }, [allPostsData]);

  const handleShare = (post, e) => {
    e.preventDefault();
    const url = `${window.location.origin}/blog/${post.id}`;
    if (navigator.share) {
      navigator.share({ title: post.title, text: post.excerpt, url }).catch(console.error);
    } else {
      navigator.clipboard.writeText(url).then(() => alert('Link copied!')).catch(console.error);
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

          <div className="blog-posts-list">
            {allPostsData.map((post) => (
              <article className="blog-post-entry" key={post.id}>
                <div className="post-entry-meta">
                  <div className="post-entry-tag">{post.category}</div>

                  <div
                    className="post-actions"
                    style={{ display: 'flex', alignItems: 'center', gap: '16px', fontSize: '0.9rem', color: '#555' }}
                  >
                    {/* 👁 Views */}
                    <div style={{ display: 'flex', alignItems: 'center', gap: '6px', color: '#999dac' }}>
                      <span role="img" aria-label="views">👁</span>
                      <span>{stats[post.id]?.views || 0} Views</span>
                    </div>

                    {/* ❤️ Likes */}
                    <div style={{ display: 'flex', alignItems: 'center', gap: '6px', color: '#999dac' }}>
                      <Icon name="heart" />
                      <span>{stats[post.id]?.likes || 0}</span>
                    </div>

                    {/* 🔗 Share */}
                    <button
                      onClick={(e) => handleShare(post, e)}
                      style={{ background: 'none', border: 'none', cursor: 'pointer', color: '#999dac' }}
                      aria-label="Share post"
                    >
                      <Icon name="share" />
                    </button>
                  </div>
                </div>

                <h2 className="post-entry-title">
                  <Link href={`/blog/${post.id}`}>{post.title}</Link>
                </h2>

                <div className="post-entry-date">{post.date}</div>
                <p className="post-entry-excerpt">{post.excerpt}</p>
                <Link href={`/blog/${post.id}`} className="post-entry-link">
                  Continue Reading <span className="entry-arrow">→</span>
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
}

export async function getStaticProps() {
  const allPostsData = getSortedPostsData();
  return { props: { allPostsData } };
}