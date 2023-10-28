import Head from "next/head";
import Image from "next/image";
import Link from "next/link";

const name = "Conor";
export const siteTitle = "Conor's Blog";

export default function Layout({
  children,
  home,
}: {
  children: React.ReactNode;
  home?: boolean;
}) {
  return (
    <div className="flex flex-col items-center">
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <meta
          name="description"
          content=":earn how to build a personal website using Next.js"
        />
        <meta
          property="og:image"
          content={`https://og-image.vercel.app/${encodeURI(
            siteTitle,
          )}.png?theme=light&md=0&fontSize=75px&images=https%3A%2F%2Fassets.vercel.com%2Fimage%2Fupload%2Ffront%2Fassets%2Fdesign%2Fnextjs-black-logo.svg`}
        />
        <meta name="og:title" content={siteTitle} />
        <meta name="twitter:card" content="summar_large_image" />
      </Head>
      <header className="flex flex-col items-center mt-3 mb-3">
        {home ? (
          <>
            <Image
              priority
              src="/images/profile.jpg"
              height={144}
              width={144}
              alt="Profile Image"
              className="rounded-full"
            />
            <h1 className="text-3xl font-bold mt-2">{name}</h1>
          </>
        ) : (
          <>
            <Link href="/">
              <Image
                priority
                src="/images/profile.jpg"
                width={108}
                height={108}
                alt="Profile Image"
                className="rounded-full"
              />
            </Link>
            <h2 className="mt-2">
              <Link href="/" className="text-3xl font-bold">
                {name}
              </Link>
            </h2>
          </>
        )}
      </header>
      <main>{children}</main>
      {!home && (
        <div>
          <Link href="/" className="text-blue-600 hover:underline">
            Back to home
          </Link>
        </div>
      )}
    </div>
  );
}
