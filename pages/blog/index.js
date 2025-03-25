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
          
          <div className="blog-grid">
            {allPostsData.length > 0 ? (
              allPostsData.map(({ id, title, date, excerpt, category }) => (
                <article className="blog-card" key={id}>
                  <div className="blog-card-content">
                    <span className="blog-card-category">{category}</span>
                    <h3 className="blog-card-title">{title}</h3>
                    <div className="blog-card-meta">
                      <time>{date}</time>
                    </div>
                    <p className="blog-card-excerpt">{excerpt}</p>
                    <div className="blog-card-footer">
                      <Link href={`/blog/${id}`} className="blog-read-more">
                        Continue Reading →
                      </Link>
                    </div>
                  </div>
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