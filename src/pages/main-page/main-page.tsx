import { Layout } from 'antd';

import './main-page.css';

import { Sidebar } from '@components/sidebar';
import { useState } from 'react';
const { Header, Sider, Content } = Layout;

export const MainPage: React.FC = () => {
    const [collapsed, setCollapsed] = useState<boolean>(false);
    return (
        <Layout>
            <Sider theme='light' trigger={null} collapsible collapsed={collapsed}>
                <Sidebar collapsed={collapsed} setCollapsed={setCollapsed}/>
            </Sider>
            <Layout>
                <Header>Header сайта</Header>
                <Content>Контентная часть</Content>
            </Layout>
        </Layout>
    );
};
