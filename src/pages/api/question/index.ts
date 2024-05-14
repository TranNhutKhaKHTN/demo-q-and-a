import { NextApiRequest } from "next";

const questions = (req: NextApiRequest, res: any) => {
  const category = req.query.category as string;

  res.status(200).json(
    [
      {
        category: 1,
        name: "Lợi ích khi liên kết MoMo với tài khoản ngân hàng",
      },
      {
        category: 1,
        name: "Cách liên kết MoMo với tài khoản ngân hàng Việt Nam Phương Đông (OCB)",
      },
      {
        category: 1,
        name: "Cách liên kết MoMo với tài khoản ngân hàng Vietcombank (VCB)",
      },
      {
        category: 2,
        name: "123123",
      },
      {
        category: 3,
        name: "Nạp tiền từ thẻ quốc tế/ thẻ ATM",
      },
    ]?.filter((item) =>
      req?.query?.category ? category === item.category.toString() : true
    )
  );
};

export default questions;
