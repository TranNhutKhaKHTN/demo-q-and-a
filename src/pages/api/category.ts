const getCategories = (_: any, res: any) => {
  res.status(200).json([
    {
      id: 1,
      name: "Liên kết tài khoản",
      des: "Chăm sóc sức khỏe 12123123",
      menu: 1,
    },
    {
      id: 2,
      name: "Nạp rút tiền",
      des: "Chăm sóc sức khỏe 12123123",
      menu: 1,
    },
    {
      id: 3,
      name: "Thẻ ATM",
      des: "Thẻ ATM",
      menu: 1,
    },
    {
      id: 4,
      name: "Update tài khoản",
      des: "Update tài khoản",
      menu: 2,
    },
    {
      id: 5,
      name: "Gia đình",
      des: "Gia đình",
      menu: 2,
    },
  ]);
};

export default getCategories;
