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
  console.log(params);
  const request = await fetch(
    `http://localhost:3002/api/question?category=${params.category}`
  );

  console.log("========================================================");
  const listQuestion = await request.json();

  console.log(listQuestion);

  return {
    props: {
      questions: listQuestion,
    },
  };
};

export const getStaticPaths: GetStaticPaths = async () => {
  const request = await fetch("http://localhost:3002/api/category");
  const category = await request.json();

  const paths = category.map((item: any) => ({
    params: { category: item.id.toString() },
  }));

  return {
    paths,
    fallback: false,
  };
};
