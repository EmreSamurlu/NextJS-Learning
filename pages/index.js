import Head from "next/head";
import Layout, { siteTitle } from "../components/layout";
import utilStyles from "../styles/utils.module.css";
import { getSortedPostsData } from "../lib/posts";

export async function getStaticProps() {
  const allPostsData = getSortedPostsData();
  return {
    props: {
      allPostsData,
    },
  };
}

export default function Home({ allPostsData }) {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <p>
          Greetings everyone. I am Emre. I am working as a Mobile Developer at
          Inavitas. I started my software life with basic knowledge such as HTML
          and CSS. Then I learned JS, React, React Native and Node.js. I learned
          all of this through my own work 🤓. I am currently working as a React
          Native developer. At the same time, I am on the way to become a Full
          Stack Developer by continuing my React, Next.js and Node.js education.
          During this process I got a lot of help from Patika.dev while learning
          these languages and frameworks. So thank you very much Patika.dev. 🙂
        </p>
        <p>
          You can reach my repos from
          <a href="https://github.com/EmreSamurlu"> GitHub</a>. And you can
          contact me from
          <a href="https://twitter.com/SamurluEmre"> Twitter</a> or
          <a href="https://www.linkedin.com/in/emre-samurlu/"> LinkedIn</a>
        </p>
        <p>
          (This is a sample website - you’ll be building a site like this on{" "}
          <a href="https://nextjs.org/learn">our Next.js tutorial</a>.)
        </p>
      </section>

      <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
        <h2 className={utilStyles.headingLg}>Blog</h2>
        <ul className={utilStyles.list}>
          {allPostsData.map(({ id, date, title }) => (
            <li className={utilStyles.listItem} key={id}>
              {title}
              <br />
              {id}
              <br />
              {date}
            </li>
          ))}
        </ul>
      </section>
    </Layout>
  );
}
