
import { Menu,Layout } from 'antd';
import { Link } from 'react-router-dom';

const MainLayout = ({children}) => {
    const { Header, Footer, Content } = Layout;
  return (
    <Layout>
      <Header style={{ display: 'flex', alignItems: 'center' }}>
        <div className="demo-logo" />
        <Menu
          theme="dark"
          mode="horizontal"
          defaultSelectedKeys={['2']}
        >
          <Menu.Item key="1">
            <Link to="/item">アイテムページ</Link>
          </Menu.Item>
          <Menu.Item key="2">
            <Link to="/my_page">マイページへ</Link>
          </Menu.Item>
          <Menu.Item key="3">
            <Link to="/file_uploader">ファイルアップ</Link>
          </Menu.Item>
        </Menu>
      </Header>
      <Content>{children}</Content>
      <Footer>Footer</Footer>
    </Layout>
  );
}

export default MainLayout;