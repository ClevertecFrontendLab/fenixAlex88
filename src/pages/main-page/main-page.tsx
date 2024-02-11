import { Layout } from 'antd';

import './main-page.css';

import { Sidebar } from '@components/sidebar';
import { useState } from 'react';
import { Header } from '@components/header';
import { MainContent } from '@components/mainContent';
const { Header: AntHeader, Sider: AntSider, Content: AntContent } = Layout;

export const MainPage: React.FC = () => {
    const [collapsed, setCollapsed] = useState<boolean>(false);
    return (
        <Layout
            style={{
                background: "url('/images/Main_page_light.jpg') no-repeat",
            }}
        >
            <AntSider theme='light' trigger={null} collapsible collapsed={collapsed}>
                <Sidebar collapsed={collapsed} setCollapsed={setCollapsed} />
            </AntSider>
            <Layout style={{ background: 'transparent' }}>
                <AntHeader style={{ padding: 0, height: 'auto' }}>
                    <Header />
                </AntHeader>
                <AntContent>
                    <MainContent />
                </AntContent>
            </Layout>
        </Layout>
    );
};
