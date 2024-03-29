import { Layout } from 'antd';

import { Sidebar } from '@components/sidebar';
import { Header } from '@components/header';
import { MainContent } from '@components/mainContent';

import './main-page.css';

export const MainPage: React.FC = () => {
    return (
        <Layout
            style={{
                background: "top / cover url('/images/Main_page_light.jpg') no-repeat",
            }}
        >
            <Sidebar />
            <Layout style={{ background: 'transparent' }}>
                <Header />
                <MainContent />
            </Layout>
        </Layout>
    );
};
