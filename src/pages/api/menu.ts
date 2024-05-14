const menus = (_: any, res: any) => {
  res.status(200).json([
    {
      id: 1,
      name: "Nạp/Rút tiền",
    },
    {
      id: 2,
      name: "Chuyển/Nhận tiền",
    },
  ]);
};

export default menus;
