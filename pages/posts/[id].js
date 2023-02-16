import Layout from '../../components/layout';
import Head from 'next/head';
import Date from '../../components/date';
import { getAllPostIds, getPostData } from '../../lib/posts';
import utilStyles from '../../styles/utils.module.css';
export default function Post({ postData }) {
  return (
    <Layout>
      <Head>
        <title>{postData.title}</title>
      </Head>
      <article>
        <h1 className={utilStyles.headingXl}>{postData.title}</h1>
        <div className={utilStyles.lightText}>
          <Date dateString={postData.date} />
        </div>
        <div dangerouslySetInnerHTML={{ __html: postData.contentHtml }} />
      </article>
    </Layout>
  );
}
// export default function Post({ postData }) {
//   return (
//     <Layout>
//       {/* Add this <Head> tag */}
//       <Head>
//         <title>{postData.title}</title>
//       </Head>

//       {/* Keep the existing code here */}
//     </Layout>
//   );
// }
// export default function Post({ postData }) {
//   return (
//     <Layout>
//       {/* Keep the existing code here */}

//       {/* Replace {postData.date} with this */}
//       <Date dateString={postData.date} />

//       {/* Keep the existing code here */}
//     </Layout>
//   );
// }
export async function getStaticProps({ params }) {
    // Add the "await" keyword like this:
    const postData = await getPostData(params.id);
  
    return {
      props: {
        postData,
      },
    };
  }
export async function getStaticPaths() {
  const paths = getAllPostIds();
  return {
    paths,
    fallback: false,
  };
}
// export default function Post({ postData }) {
//     return (
//       <Layout>
//         {postData.title}
//         <br />
//         {postData.id}
//         <br />
//         {postData.date}
//         <br />
//         <div dangerouslySetInnerHTML={{ __html: postData.contentHtml }} />
//       </Layout>
//     );
//   }