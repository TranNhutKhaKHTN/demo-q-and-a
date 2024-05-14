const getCategories = (_: any, res: any) => {
  res.status(200).json([
    {
      id: 1,
      name: "Liên kết tài khoản ngân hàng",
      des: "Chăm sóc sức khỏe 12123123",
      menu: 1,
    },
    {
      id: 2,
      name: "Nạp rút tiền với tài khoản ngân hàng",
      des: "Chăm sóc sức khỏe 12123123",
      menu: 1,
    },
    {
      id: 3,
      name: "Nạp tiền từ thẻ quốc tế/ thẻ ATM",
      des: "Nạp tiền từ thẻ quốc tế/ thẻ ATM",
      menu: 1,
    },
    {
      id: 4,
      name: "Update tài khoản",
      des: "Update tài khoản",
      menu: 1,
    },
  ]);
};

export default getCategories;
