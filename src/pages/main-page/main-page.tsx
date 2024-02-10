import { Layout } from 'antd';

import './main-page.css';

import { Sidebar } from '@components/sidebar';
import { useState } from 'react';
import { Header } from '@components/header';
const { Header: AntHeader, Sider: AntSider, Content: AntContent } = Layout;

export const MainPage: React.FC = () => {
    const [collapsed, setCollapsed] = useState<boolean>(false);
    return (
        <Layout>
            <AntSider theme='light' trigger={null} collapsible collapsed={collapsed}>
                <Sidebar collapsed={collapsed} setCollapsed={setCollapsed} />
            </AntSider>
            <Layout>
                <AntHeader style={{ padding: 0, height: 'auto' }}>
                    <Header />
                </AntHeader>
                <AntContent>Контентная часть</AntContent>
            </Layout>
        </Layout>
    );
};
