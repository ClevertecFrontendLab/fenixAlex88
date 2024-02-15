import { Tabs } from "antd";
import { LoginForm } from "../../components/LoginForm";
import { RegisterForm } from "../../components/RegisterForm";

import classes from "./auth-page.module.css";

export const AuthPage: React.FC = () => {
    const tabsItems = [
        {
            tab: "Login",
            label: "Вход",
            key: "Login",
            children: <LoginForm />,
        },
        {
            tab: "Register",
            label: "Регистрация",
            key: "Register",
            children: <RegisterForm />,
        },
    ];

    return (
        <div className={classes.wrapper}>
            <Tabs items={tabsItems} />
        </div>
    );
};
