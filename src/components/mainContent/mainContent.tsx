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
        <Paragraph className={classes.actionsBody}>
            <Text>
                CleverFit — это не просто приложение а твой личный помощник в мире фитнеса. Не
                откладывай на завтра — начни тренироваться уже сегодня!
            </Text>
        </Paragraph>
    );
};

const ActionCards: React.FC = () => {
    return (
        <Space direction='horizontal' size={16} className={classes.actionCards}>
            <Card
                size='small'
                title={<div className={classes.actionCardTitle}>Расписать тренеровки</div>}
                className={classes.actionCard}
            >
                <HeartFilled style={{ color: 'var(--primary-light-6)' }} />
                <Button type='link' className={classes.actionCardBtn}>
                    Тренировки
                </Button>
            </Card>
            <Card
                size='small'
                title={<div className={classes.actionCardTitle}>Назначить календарь</div>}
                className={classes.actionCard}
            >
                <CalendarTwoTone twoToneColor='var(--primary-light-6)' />
                <Button type='link' className={classes.actionCardBtn}>
                    Календарь
                </Button>
            </Card>
            <Card
                size='small'
                title={<div className={classes.actionCardTitle}>Заполнить профиль</div>}
                className={classes.actionCard}
            >
                <IdcardOutlined style={{ color: 'var(--primary-light-6)' }} />
                <Button type='link' className={classes.actionCardBtn}>
                    Профиль
                </Button>
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
            size='small'
            className={classes.downloadCard}
            title={
                <div className={classes.downloadCardTitle}>
                    <Link className={classes.downloadCardTitleLink}>Скачать на телефон</Link>
                    <Text className={classes.downloadCardSubtitle}>Доступно в PRO-тарифе</Text>
                </div>
            }
        >
            <Button
                type='link'
                className={classes.downloadCardBtn}
                icon={<AndroidFilled style={{ color: 'var(--character-light-title-85)' }} />}
            >
                Android OS
            </Button>
            <Button
                type='link'
                className={classes.downloadCardBtn}
                icon={<AppleFilled style={{ color: 'var(--character-light-title-85)' }} />}
            >
                Apple iOS
            </Button>
        </Card>
    );
};

export const MainContent: React.FC = () => {
    return (
        <AntContent className={classes.wrapper}>
            <Space direction='vertical' size={0} className={classes.content}>
                <ActionsList />
                <ActionsBody />
                <ActionCards />
            </Space>
            <Footer />
        </AntContent>
    );
};
