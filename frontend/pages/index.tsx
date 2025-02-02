// import { INotifyApp } from '@/interfaces';
import { appConfigFetcher } from '@/services/requests';
// import { MenuProps, notification } from 'antd';
// import { Breadcrumb, Layout, Menu, MenuProps, notification } from 'antd';
import React from 'react';
import useSWR from 'swr';
// import { FaSitemap } from "react-icons/fa";
// import { IoSettingsOutline } from "react-icons/io5";
import { Button } from '@chakra-ui/react';

// const { Header, Content, Footer, Sider } = Layout;
// type MenuItem = Required<MenuProps>['items'][number];

export default function Home(): React.JSX.Element {

  // const [api, contextHolder] = notification.useNotification();

  const { data: appConfig, isLoading: isAppConfigLoading } = useSWR('/api/app_config', appConfigFetcher, { refreshInterval: 1000 });

  console.log("appConfig", appConfig);
  console.log("isAppConfigLoading", isAppConfigLoading);

  // const notifyApp: INotifyApp = {
  //   error: (message: string) => api.error({ closable: true, message }),
  //   success: (message: string) => api.success({ closable: true, message }),
  //   info: (message: string) => api.info({ closable: true, message }),
  // };

  // const [collapsed, setCollapsed] = React.useState(false);

  // const items: MenuItem[] = [
  //   { key: "1", label: "Sites", icon: <FaSitemap /> },
  //   { key: "2", label: "Settings", icon: <IoSettingsOutline /> },
  // ];

  return (
    <div>
      {/* {contextHolder} */}
      {/* <h1>{appConfig?.title}</h1> */}
      <Button>Teste</Button>
    </div>
  );

  // return (
  //   <Layout style={{ minHeight: '100vh' }}>
  //     {contextHolder}
  //     <Sider collapsible collapsed={collapsed} onCollapse={(value) => setCollapsed(value)}>
  //       <div className="header-title">
  //         <div className='title'>
  //           {appConfig ? appConfig.title : "Lists App"}
  //         </div>
  //       </div>
  //       <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline" items={items} />
  //     </Sider>
  //     <Layout>
  //       <Header style={{ padding: 0 }} />
  //       <Content style={{ margin: '0 16px' }}>
  //         <Breadcrumb style={{ margin: '16px 0' }} items={[{ title: "Home", key: "Home" }]} />
  //         <div className='content'>
  //           <span>teste</span>
  //         </div>
  //       </Content>
  //       <Footer style={{ textAlign: 'center' }}>
  //         Ant Design ©{new Date().getFullYear()} Created by Ant UED
  //       </Footer>
  //     </Layout>
  //   </Layout>
  // );
}