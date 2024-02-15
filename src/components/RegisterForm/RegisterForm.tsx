import { GooglePlusOutlined } from "@ant-design/icons";
import { Button, Form, Input } from "antd";

export const RegisterForm: React.FC = () => {
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
            <Form.Item
                name="email"
                rules={[{ required: true, message: "Please input your Email!" }]}
            >
                <Input type="email" addonBefore="e-mail" />
            </Form.Item>
            <Form.Item
                name="password"
                rules={[{ required: true, message: "Please input your Password!" }]}
            >
                <Input.Password placeholder="Пароль" />
            </Form.Item>
            <Form.Item
                name="confirm"
                dependencies={["password"]}
                hasFeedback
                rules={[
                    {
                        required: true,
                        message: "Please confirm your password!",
                    },
                    ({ getFieldValue }) => ({
                        validator(_, value) {
                            if (!value || getFieldValue("password") === value) {
                                return Promise.resolve();
                            }
                            return Promise.reject(
                                new Error("The two passwords that you entered do not match!"),
                            );
                        },
                    }),
                ]}
            >
                <Input.Password placeholder="Повторите пароль" />
            </Form.Item>
            <Form.Item>
                <Button type="primary" htmlType="submit" className="login-form-button">
                    Войти
                </Button>
                <Button type="ghost" icon={<GooglePlusOutlined />} className="login-form-google">
                    Регистрация через Google
                </Button>
            </Form.Item>
        </Form>
    );
};
