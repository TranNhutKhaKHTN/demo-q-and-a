import { GetStaticPaths } from "next";
import Link from "next/link";

const Question = ({ question, listQuestion }: any) => {
  return (
    <div>
      <div className="text-lg font-bold">{question?.name}</div>
      <hr className="mt-2 mb-4" />
      <div dangerouslySetInnerHTML={{ __html: question?.content }} />
      <div className="text-lg font-bold mt-10">Bài viết liên quan</div>
      <div className="space-y-4 py-4">
        {listQuestion?.map((item: any) => {
          return (
            <Link
              key={item.id}
              href={`/${item.category}/${item?.id}`}
              className="hover:underline block"
            >
              {item?.name}
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default Question;

export const getStaticProps = async ({ params }: any) => {
  const menu = await fetch("https://demo-q-and-a.vercel.app/api/menu");
  const menuData = await menu.json();

  const listQuestionReq = await fetch(
    `https://demo-q-and-a.vercel.app/api/question?category=${params.category}`
  );
  const listQuestion = await listQuestionReq.json();

  const questionReq = await fetch(
    `https://demo-q-and-a.vercel.app/api/question/${params?.question}`
  );

  const question = await questionReq.json();

  return {
    props: {
      question,
      menuData,
      listQuestion,
    },
    revalidate: 10,
  };
};

export const getStaticPaths: GetStaticPaths = async () => {
  const request = await fetch("https://demo-q-and-a.vercel.app/api/question");
  const questions = await request.json();

  const paths = questions.map((item: any) => ({
    params: {
      category: item.category?.toString(),
      question: item?.id?.toString(),
    },
  }));

  return {
    paths: [],
    fallback: true,
  };
};
