import { Button } from "antd";
import { GetStaticPaths } from "next";

const CategoryPage = ({ questions }: any) => {
  return (
    <div className="flex flex-col gap-4">
      {questions?.map((item: any) => {
        return <Button key={item.id}>{item?.name}</Button>;
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

  const menu = await fetch("https://demo-q-and-a.vercel.app/api/menu");
  const menuData = await menu.json();

  return {
    props: {
      questions: listQuestion,
      menuData,
    },
    revalidate: 10,
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
    fallback: true,
  };
};
