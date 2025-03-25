import { useRouter } from 'next/router';
import Layout from '../../components/Layout';
import { getAllPostIds, getPostData } from '../../lib/posts';
import Link from 'next/link';

export default function BlogPost({ postData }) {
  const router = useRouter();

  if (router.isFallback) {
    return <div>Loading...</div>;
  }

  return (
    <Layout title={`${postData.title} | Poojith's Blog`}>
      <article className="blog-post">
        <div className="container">
          <div className="blog-header">
            <span className="blog-category">{postData.category}</span>
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
            <Link href="/blog">
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