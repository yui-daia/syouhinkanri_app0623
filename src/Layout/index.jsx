import { useState, useEffect } from 'react';
import { Menu, Layout, Row, Col,message } from 'antd';
import { Link } from 'react-router-dom';
import { Auth } from '@aws-amplify/auth';

const MainLayout = ({children}) => {
  const { Header, Footer, Content } = Layout;
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    checkAuthState();
  }, []);

  async function checkAuthState() {
    try {
      await Auth.currentAuthenticatedUser();
      setIsAuthenticated(true);
    } catch {
      setIsAuthenticated(false);
    }
  }

  async function handleLogout() {
    try {
      await Auth.signOut();
      setIsAuthenticated(false);
    } catch (error) {
      message.error('認証に失敗しました');
    }
  }

  return (
    <Layout>
      <Header style={{ display: 'flex', alignItems: 'center' }}>
        <div className="demo-logo" />
        <Row justify="end">
          <Col xs={24} sm={24} md={24} lg={24}>
            <Menu
              theme="dark"
              mode="horizontal"
              defaultSelectedKeys={['1']}
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
              {isAuthenticated && (
                <Menu.Item key="4" onClick={handleLogout}>
                  ログアウト
                </Menu.Item>
              )}
            </Menu>
          </Col>
        </Row>
      </Header>    
      <Row>
        <Col span={18} offset={3}>
          <Content>{children}</Content>
        </Col>
      </Row>
      <Footer>Footer</Footer>
    </Layout>
  );
}

export default MainLayout;
