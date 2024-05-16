import { Card, Input, Menu } from "antd";
import Link from "next/link";
import { PropsWithChildren } from "react";

const Layout = ({
  children,
  menuData,
}: PropsWithChildren<{ menuData?: any }>) => {
  const renderMenu = menuData?.map((item: any) => ({
    key: item?.id,
    label: item?.name,
    children: item?.children?.map((c: any) => ({
      key: c.id,
      label: <Link href={`/${c.id}`}>{c.name}</Link>,
    })),
  }));

  return (
    <Card
      className="!mx-auto w-[1000px] h-screen !mt-5"
      styles={{
        body: { height: "100%", paddingLeft: 0 },
      }}
      title="Câu hỏi theo chủ đề"
      extra={<Input.Search placeholder="Tìm kiếm" />}
    >
      <div className="flex h-full">
        <div className="h-full">
          <Menu
            style={{ width: 256, backgroundColor: "white" }}
            openKeys={renderMenu?.map((i: any) => i.key.toString())}
            mode="inline"
            items={renderMenu}
          />
        </div>
        <div className="flex flex-col pl-10 pr-6 w-full">{children}</div>
      </div>
    </Card>
  );
};

export default Layout;
