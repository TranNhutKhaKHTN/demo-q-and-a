import { GetStaticPaths } from "next";

const CategoryPage = ({ questions }: any) => {
  return (
    <div className="flex flex-col">
      {questions?.map((item: any) => {
        return <div key={item.id}>{item?.name}</div>;
      })}
    </div>
  );
};

export default CategoryPage;

export const getStaticProps = async ({ params }: any) => {
  const request = await fetch(
    `https://demo-q-and-a.vercel.app/api/question?category=${params.category}`
  );
  const listQuestion = await request.json();

  return {
    props: {
      questions: listQuestion,
    },
  };
};

export const getStaticPaths: GetStaticPaths = async () => {
  const request = await fetch("https://demo-q-and-a.vercel.app/api/category");
  const category = await request.json();

  const paths = category.map((item: any) => ({
    params: { category: item.id.toString() },
  }));

  return {
    paths,
    fallback: false,
  };
};
