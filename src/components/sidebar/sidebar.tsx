import { Button, Divider, Menu } from 'antd';
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

interface SidebarProps {
    collapsed: boolean;
    setCollapsed: (value: boolean) => void;
}

export const Sidebar: React.FC<SidebarProps> = ({ collapsed, setCollapsed }) => {
    return (
        <aside className={classes.sidebar}>
            <div>
                <div className={classNames(classes.logo, { [classes.logoCollapsed]: collapsed })}>
                    <Link to='/' />
                </div>
                <Menu
                    mode='inline'
                    items={[
                        {
                            key: 'Calendar',
                            icon: <CalendarTwoTone twoToneColor='#061178' />,
                            label: 'Календарь',
                        },
                        {
                            key: 'Training',
                            icon: <HeartFilled style={{ color: '#061178' }} />,
                            label: 'Тренировки',
                        },
                        {
                            key: 'Trophy',
                            icon: <TrophyFilled style={{ color: '#061178' }} />,
                            label: 'Достижения',
                        },
                        {
                            key: 'Profile',
                            icon: <IdcardOutlined style={{ color: '#061178' }} />,
                            label: 'Профиль',
                        },
                    ]}
                />
                <div className={classes.collapsBtnWrapper}>
                    <Button
                        type='link'
                        icon={
                            collapsed ? (
                                <MenuUnfoldOutlined style={{ color: '#8C8C8C' }} />
                            ) : (
                                <MenuFoldOutlined style={{ color: '#8C8C8C' }} />
                            )
                        }
                        onClick={() => setCollapsed(!collapsed)}
                    />
                </div>
            </div>
            <div>
                <Divider style={{ margin: 0 }} />
                <Menu mode='inline' items={[{ key: 'Exit', icon: <ExitIcon />, label: 'Выход' }]} />
            </div>
        </aside>
    );
};
