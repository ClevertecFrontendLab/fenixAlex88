import { useState } from 'react';
import { Layout, Button, Divider, Menu } from 'antd';
import {
    CalendarTwoTone,
    HeartFilled,
    IdcardOutlined,
    MenuFoldOutlined,
    MenuUnfoldOutlined,
    TrophyFilled,
} from '@ant-design/icons';
import { ExitIcon } from '../Icons/exitIcon';
import classNames from 'classnames';
import { useWindowDimensions } from '@hooks/useWindowDimensions';

import classes from './sidebar.module.css';

const { Sider: AntSider } = Layout;

export const Sidebar: React.FC = () => {
    const [collapsed, setCollapsed] = useState<boolean>(false);
    const { width } = useWindowDimensions();
    return (
        <AntSider
            theme='light'
            trigger={null}
            collapsible
            collapsed={collapsed}
            className={classes.sidebar}
            width={width > 768 ? '208px' : '106px'}
            collapsedWidth={'64px'}
        >
            <div>
                <div className={classNames(classes.logo, { [classes.logoCollapsed]: collapsed })} />
                <Menu
                    mode='inline'
                    inlineIndent={width > 768 ? 15 : 0}
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
            <div className={classes.collapsMobileBtnWrapper} data-test-id='sider-switch-mobile'>
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
            <div className={classes.collapsBtnWrapper} data-test-id='sider-switch'>
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
                    className={classNames(classes.sidebarMenu, classes.sidebarMenuExit)}
                    inlineIndent={15}
                    items={[
                        {
                            key: 'Exit',
                            icon: <ExitIcon />,
                            label: <span className={classes.sidebarMenuExitLabel}>Выход</span>,
                        },
                    ]}
                />
            </div>
        </AntSider>
    );
};