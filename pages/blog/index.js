import Layout from '../../components/Layout';
import Link from 'next/link';
import { getSortedPostsData } from '../../lib/posts';

export default function Blog({ allPostsData }) {
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
          
          {/* New improved blog listing layout */}
          <div className="blog-posts-list">
            {allPostsData.length > 0 ? (
              allPostsData.map(({ id, title, date, excerpt, category }) => (
                <article className="blog-post-entry" key={id}>
                  <div className="post-entry-tag">{category}</div>
                  <h3 className="post-entry-title">
                    <Link href={`/blog/${id}`}>
                      {title}
                    </Link>
                  </h3>
                  <div className="post-entry-date">{date}</div>
                  <p className="post-entry-excerpt">{excerpt}</p>
                  <Link href={`/blog/${id}`} className="post-entry-link">
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