import { GooglePlusOutlined } from '@ant-design/icons';
import { Button, Checkbox, Form, Input } from 'antd';

export const LoginForm: React.FC = () => {
    const onFinish = (values: any) => {
        console.log("Received values of form: ", values);
    };

    return (
        <Form
            name="normal_login"
            className="login-form"
            initialValues={{ remember: true }}
            onFinish={onFinish}
        >
            <Form.Item name="email" rules={[{ required: true, message: "Please input your Email!" }]}>
                <Input type="email" addonBefore="e-mail" />
            </Form.Item>
            <Form.Item
                name="password"
                rules={[{ required: true, message: "Please input your Password!" }]}
            >
                <Input.Password placeholder="Пароль" />
            </Form.Item>
            <Form.Item>
                <Form.Item name="remember" valuePropName="checked" noStyle>
                    <Checkbox>Запомнить меня</Checkbox>
                </Form.Item>
                <a className="login-form-forgot" href="/">
                    Забыли пароль?
                </a>
            </Form.Item>
            <Form.Item>
                <Button type="primary" htmlType="submit" className="login-form-button">
                    Войти
                </Button>
                <Button type="ghost" icon={<GooglePlusOutlined />} className="login-form-google">
                    Войти через Google
                </Button>
            </Form.Item>
        </Form>
    );
}
