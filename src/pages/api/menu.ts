const menus = async (req: any, res: any) => {
  const menu = [
    {
      id: 1,
      name: "Nạp/Rút tiền",
    },
    {
      id: 2,
      name: "Chuyển/Nhận tiền",
    },
    {
      id: 3,
      name: "Cập nhật thông tin",
    },
  ];

  const categoryReq = await fetch(
    "https://demo-q-and-a.vercel.app/api/category"
  );
  const categories = await categoryReq.json();

  const result = menu?.map((item) => ({
    ...item,
    children: categories?.filter((c: any) => c.menu === item.id),
  }));

  res.status(200).json(result);
};

export default menus;
