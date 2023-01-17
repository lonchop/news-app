import { Inter } from "@next/font/google";
import Link from "next/link";
import PageLayout from "@/components/PageLayout";

const inter = Inter({ subsets: ["latin"] });

export default function Home({ articles }: { articles: [] }) {
  return (
    <PageLayout title="News App">
      <h1 className="text-center text-[30px] text-white">
        Aprendiendo Next.js
      </h1>
      <Link href="/about" className="text-white">
        Ir al about
      </Link>
      {articles.length === 0 && (
        <p className="text-center text-[20px] text-white">No hay datos</p>
      )}
      {articles.length > 0 &&
        articles.map((article: any, index: number) => (
          <div className="flex flex-col items-center mb-[40px]" key={index}>
            <h2 className="w-[80ch] text-center text-[30px] text-white">{article.title}</h2>
            <img className="w-[500px]" src={article.urlToImage} alt="image" />
            <p className="w-[80ch] text-[20px] text-white">
              {article.description}
            </p>
          </div>
        ))}
    </PageLayout>
  );
}

export async function getServerSideProps() {
  const response = await fetch(
    "https://newsapi.org/v2/everything?q=tesla&from=2022-12-17&sortBy=publishedAt&apiKey=27b820dc31154eaca3bdbdc8e0b1effe"
  );
  const { articles }: any = await response.json();
  return {
    props: {
      articles,
    },
  };
}
