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
      name: "Cập nhật số tài khoản",
      des: "Cập nhật số tài khoản",
      menu: 3,
    },
    {
      id: 5,
      name: "Cập nhật số điện thoại",
      des: "Cập nhật số điện thoại",
      menu: 3,
    },
    {
      id: 6,
      name: "Chuyển tiền từ tài khoản A sang B",
      des: "Chuyển tiền từ tài khoản A sang B",
      menu: 2,
    },
  ]);
};

export default getCategories;
