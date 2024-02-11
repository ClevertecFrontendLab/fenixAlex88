import { Button, Divider, Menu } from 'antd';
import { Layout } from 'antd';
import {
    CalendarTwoTone,
    HeartFilled,
    IdcardOutlined,
    MenuFoldOutlined,
    MenuUnfoldOutlined,
    TrophyFilled,
} from '@ant-design/icons';
import { Link } from 'react-router-dom';
import { ExitIcon } from '../Icons/exitIcon';
import classes from './sidebar.module.css';
import classNames from 'classnames';
import { useState } from 'react';
const { Sider: AntSider } = Layout;

export const Sidebar: React.FC = () => {
    const [collapsed, setCollapsed] = useState<boolean>(false);
    return (
        <AntSider
            theme='light'
            trigger={null}
            collapsible
            collapsed={collapsed}
            className={classes.sidebar}
            width={'208px'}
            collapsedWidth={'64px'}
        >
            <div>
                <div className={classNames(classes.logo, { [classes.logoCollapsed]: collapsed })} />
                <Menu
                    mode='inline'
                    inlineIndent={15}
                    className={classes.sidebarMenu}
                    items={[
                        {
                            key: 'Calendar',
                            icon: <CalendarTwoTone twoToneColor='var(--primary-light-9)' />,
                            label: <span className={classes.menuItemLabel}>Календарь</span>,
                        },
                        {
                            key: 'Training',
                            icon: <HeartFilled style={{ color: 'var(--primary-light-9)' }} />,
                            label: <span className={classes.menuItemLabel}>Тренировки</span>,
                        },
                        {
                            key: 'Trophy',
                            icon: <TrophyFilled style={{ color: 'var(--primary-light-9)' }} />,
                            label: <span className={classes.menuItemLabel}>Достижения</span>,
                        },
                        {
                            key: 'Profile',
                            icon: <IdcardOutlined style={{ color: 'var(--primary-light-9)' }} />,
                            label: <span className={classes.menuItemLabel}>Профиль</span>,
                        },
                    ]}
                />
            </div>
            <div className={classes.collapsBtnWrapper}>
                <Button
                    type='link'
                    icon={
                        collapsed ? (
                            <MenuUnfoldOutlined
                                style={{ color: 'var(--character-light-secondary-45)' }}
                            />
                        ) : (
                            <MenuFoldOutlined
                                style={{ color: 'var(--character-light-secondary-45)' }}
                            />
                        )
                    }
                    onClick={() => setCollapsed(!collapsed)}
                />
            </div>
            <div>
                <Divider style={{ margin: 0 }} />
                <Menu
                    mode='inline'
                    selectable={false}
                    className={classes.sidebarMenu}
                    inlineIndent={15}
                    items={[{ key: 'Exit', icon: <ExitIcon />, label: 'Выход' }]}
                />
            </div>
        </AntSider>
    );
};
