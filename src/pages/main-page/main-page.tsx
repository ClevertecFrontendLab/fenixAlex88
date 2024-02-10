import { Layout } from 'antd';

import './main-page.css';

const { Header, Sider, Content } = Layout;

export const MainPage: React.FC = () => {
    return (
        <Layout>
            <Sider>Навигационное меню</Sider>
            <Layout>
                <Header>Header сайта</Header>
                <Content>Контентная часть</Content>
            </Layout>
        </Layout>
    );
};
