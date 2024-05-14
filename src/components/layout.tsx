import { Card, Menu } from "antd";
import Link from "next/link";
import { PropsWithChildren } from "react";

const Layout = ({
  children,
  menuData,
}: PropsWithChildren<{ menuData?: any }>) => {
  console.log(menuData);

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
      className="!mx-auto w-[1000px] h-screen"
      styles={{
        body: { height: "100%", paddingLeft: 0 },
      }}
    >
      <div className="flex h-full">
        <Menu
          //   onClick={onClick}
          style={{ width: 256, backgroundColor: "white" }}
          defaultSelectedKeys={["1"]}
          defaultOpenKeys={["sub1"]}
          mode="inline"
          items={renderMenu}
        />
        <div className="flex flex-col pl-4 w-full">{children}</div>
      </div>
    </Card>
  );
};

export default Layout;
