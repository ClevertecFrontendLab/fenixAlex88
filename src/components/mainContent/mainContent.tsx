import { Button, Card, List, Space, Typography } from 'antd';
import classes from './mainContent.module.css';
import {
    AndroidFilled,
    AppleFilled,
    CalendarTwoTone,
    HeartFilled,
    IdcardOutlined,
} from '@ant-design/icons';

const { Paragraph, Text, Link } = Typography;
const data: string[] = [
    `планировать свои тренировки на календаре, выбирая тип и уровень нагрузки;`,
    `отслеживать свои достижения в разделе статистики, сравнивая свои результаты c нормами и рекордами;`,
    `создавать свой профиль, где ты можешь загружать свои фото, видео и отзывы о тренировках;`,
    `выполнять расписанные тренировки для разных частей тела, следуя подробным инструкциям и советам профессиональных тренеров.`,
];

export const MainContent: React.FC = () => {
    return (
        <main className={classes.wrapper}>
            <Space direction='vertical' className={classes.content}>
                <List
                    className={classes.actionsList}
                    header={'С CleverFit ты сможешь:'}
                    dataSource={data}
                    renderItem={(item) => <List.Item>&mdash; {item}</List.Item>}
                />
                <Typography className={classes.actionsBody}>
                    <Paragraph>
                        <Text>
                            CleverFit — это не просто приложение а твой личный помощник в мире
                            фитнеса. Не откладывай на завтра — начни тренироваться уже сегодня!
                        </Text>
                    </Paragraph>
                </Typography>
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
            </Space>
            <div className={classes.footer}>
                <Link className={classes.reviewsLink}>Смотреть отзывы</Link>
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
            </div>
        </main>
    );
};
