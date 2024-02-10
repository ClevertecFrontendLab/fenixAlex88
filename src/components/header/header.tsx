import { SettingOutlined } from '@ant-design/icons';
import classes from './header.module.css';
import { Button } from 'antd';
import { Typography } from 'antd';
const { Title, Text } = Typography;

export const Header: React.FC = () => {
    return (
        <div className={classes.header}>
            <Text className={classes.breadcramp}>Главная</Text>
            <div className={classes.contentBlock}>
                <Title className={classes.title}>
                    Приветствуем тебя в CleverFit — приложении, которое поможет тебе добиться своей
                    мечты!
                </Title>
                <div className={classes.settingBtnBlock}>
                    <Button
                        className={classes.settingBtn}
                        type='text'
                        icon={<SettingOutlined className={classes.settingsImg} />}
                    >
                        <span>Настройки</span>
                    </Button>
                </div>
            </div>
        </div>
    );
};
