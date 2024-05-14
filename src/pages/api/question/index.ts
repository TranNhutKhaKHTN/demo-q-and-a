import { NextApiRequest } from "next";

const questions = (req: NextApiRequest, res: any) => {
  const category = req.query.category as string;

  res.status(200).json(
    [
      {
        id: 1,
        category: 1,
        name: "Lợi ích khi liên kết MoMo với tài khoản ngân hàng",
      },
      {
        id: 2,
        category: 1,
        name: "Cách liên kết MoMo với tài khoản ngân hàng Việt Nam Phương Đông (OCB)",
      },
      {
        id: 3,
        category: 1,
        name: "Cách liên kết MoMo với tài khoản ngân hàng Vietcombank (VCB)",
      },
      {
        id: 4,
        category: 2,
        name: "123123",
      },
      {
        id: 5,
        category: 3,
        name: "Nạp tiền từ thẻ quốc tế/ thẻ ATM",
      },
      {
        id: 6,
        category: 4,
        name: "Update account 1",
      },
      {
        id: 7,
        category: 4,
        name: "Update account 2",
      },
      {
        id: 8,
        category: 5,
        name: "Gia đình 1",
      },
      {
        id: 9,
        category: 5,
        name: "Gia đình 2",
      },
    ]?.filter((item) =>
      req?.query?.category ? category === item.category.toString() : true
    )
  );
};

export default questions;
