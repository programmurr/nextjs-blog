import Head from "next/head";
import Layout, { siteTitle } from "../components/layout";
import { getSortedPostsData } from "../lib/posts";
import Link from "next/link";
import Date from "../components/date";
import { GetStaticProps } from "next";

export const getStaticProps: GetStaticProps = async () => {
  const allPostsData = getSortedPostsData();
  return {
    props: {
      allPostsData,
    },
  };
};

export default function Home({
  allPostsData,
}: {
  allPostsData: {
    date: string;
    title: string;
    id: string;
  }[];
}) {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className="flex flex-col items-center mb-5">
        <p className="text-xl mb-3">Cypress testing set up!</p>
        <p className="text-lg">
          (This is a sample website - you&apos;ll be building a site like this
          on <a href="https://nextjs.org/learn">our Next.js tutorial</a>.)
        </p>
      </section>
      <section>
        <h2 className="text-lg font-bold">Blog</h2>
        <ul className="mt-1">
          {allPostsData.map(({ id, date, title }) => (
            <li key={id} className="mt-2">
              <Link
                href={`/posts/${id}`}
                className="text-xl text-blue-600 hover:underline"
              >
                {title}
              </Link>
              <br />
              <div>
                <Date dateString={date} />
              </div>
            </li>
          ))}
        </ul>
      </section>
    </Layout>
  );
}
