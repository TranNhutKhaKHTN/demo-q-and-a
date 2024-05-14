import { NextApiRequest } from "next";
import { QUESTIONS } from ".";

const getQuestionDetail = (req: NextApiRequest, res: any) => {
  const id = req.query.id as string;
  res
    .status(200)
    .json(QUESTIONS.find((item) => id.toString() === item.id.toString()));
};

export default getQuestionDetail;
