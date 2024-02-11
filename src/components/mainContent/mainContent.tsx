import { Button, Card, List, Space, Typography } from 'antd';
import { Layout } from 'antd';
import classes from './mainContent.module.css';

import {
    AndroidFilled,
    AppleFilled,
    CalendarTwoTone,
    HeartFilled,
    IdcardOutlined,
} from '@ant-design/icons';
const { Content: AntContent } = Layout;
const { Paragraph, Text, Link } = Typography;

const ActionsList: React.FC = () => {
    const data: string[] = [
        'планировать свои тренировки на календаре, выбирая тип и уровень нагрузки;',
        'отслеживать свои достижения в разделе статистики, сравнивая свои результаты c нормами и рекордами;',
        'создавать свой профиль, где ты можешь загружать свои фото, видео и отзывы о тренировках;',
        'выполнять расписанные тренировки для разных частей тела, следуя подробным инструкциям и советам профессиональных тренеров.',
    ];

    return (
        <List
            style={{ border: 'none' }}
            className={classes.actionsList}
            header={<div className={classes.listHeader}>С CleverFit ты сможешь:</div>}
            dataSource={data}
            renderItem={(item) => (
                <List.Item className={classes.listItem}>&mdash; {item}</List.Item>
            )}
        />
    );
};

const ActionsBody: React.FC = () => {
    return (
        <Typography className={classes.actionsBody}>
            <Paragraph>
                <Text>
                    CleverFit — это не просто приложение а твой личный помощник в мире фитнеса. Не
                    откладывай на завтра — начни тренироваться уже сегодня!
                </Text>
            </Paragraph>
        </Typography>
    );
};

const ActionCards: React.FC = () => {
    return (
        <Space direction='horizontal' size='middle' className={classes.actionCards}>
            <Card title='Расписать тренеровки' size='small'>
                <HeartFilled style={{ color: '#2F54EB' }} />
                <span>Тренировки</span>
            </Card>
            <Card title='Назначить календарь' size='small'>
                <CalendarTwoTone twoToneColor='#2F54EB' />
                <span>Календарь</span>
            </Card>
            <Card title='Заполнить профиль' size='small'>
                <IdcardOutlined style={{ color: '#2F54EB' }} />
                <span>Профиль</span>
            </Card>
        </Space>
    );
};

const Footer: React.FC = () => {
    return (
        <div className={classes.footer}>
            <Link className={classes.reviewsLink}>Смотреть отзывы</Link>
            <DownloadCard />
        </div>
    );
};

const DownloadCard: React.FC = () => {
    return (
        <Card
            title={
                <div className={classes.downloadCardTitle}>
                    <Link>Скачать на телефон</Link>
                    <Text>Доступно в PRO-тарифе</Text>
                </div>
            }
            size='small'
            className={classes.downloadCard}
        >
            <Button type='link' icon={<AndroidFilled style={{ color: '#262626' }} />}>
                Android OS
            </Button>
            <Button type='link' icon={<AppleFilled style={{ color: '#262626' }} />}>
                Apple iOS
            </Button>
        </Card>
    );
};

export const MainContent: React.FC = () => {
    return (
        <AntContent className={classes.wrapper}>
            <Space direction='vertical' className={classes.content}>
                <ActionsList />
                <ActionsBody />
                <ActionCards />
            </Space>
            <Footer />
        </AntContent>
    );
};
