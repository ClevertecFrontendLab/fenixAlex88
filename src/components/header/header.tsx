import { SettingOutlined } from '@ant-design/icons';
import { Layout } from 'antd';
import classes from './header.module.css';
import { Button } from 'antd';
import { Typography } from 'antd';
const { Title, Text } = Typography;
const { Header: AntHeader } = Layout;

export const Header: React.FC = () => {
    return (
        <AntHeader className={classes.header}>
            <Text className={classes.breadcramp}>Главная</Text>
            <div className={classes.contentBlock}>
                <Title className={classes.title}>
                    Приветствуем тебя в CleverFit — приложении, которое поможет тебе добиться своей
                    мечты!
                </Title>
                    <Button
                        className={classes.settingBtn}
                        type='text'
                        icon={<SettingOutlined className={classes.settingsImg} />}
                    >
                        <span>Настройки</span>
                    </Button>
            </div>
        </AntHeader>
    );
};
