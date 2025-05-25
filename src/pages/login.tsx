import React from "react";
import { Form, Input, Button, Card, Layout, Typography } from "antd";
import { UserOutlined, LockOutlined } from "@ant-design/icons";
import { useNavigate } from "react-router-dom";

const { Content } = Layout;
const { Title } = Typography;

const Login: React.FC = () => {
  const seccsess = () => {
    window.location.href = "/";
  };

  const onFinish = (values: any) => {
    console.log("Received values:", values);
    localStorage.setItem("isLoggedIn", "true");
    window.location.href = "/";
  };

  return (
    <Layout style={{ minHeight: "100vh" }}>
      <Content
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Card style={{ width: 400, padding: "24px" }}>
          <Title
            level={2}
            style={{ textAlign: "center", marginBottom: "32px" }}
          >
            Login
          </Title>
          <Form
            name="login"
            initialValues={{ remember: true }}
            onFinish={onFinish}
            layout="vertical"
          >
            <Form.Item
              name="username"
              rules={[
                { required: true, message: "Please input your username!" },
              ]}
            >
              <Input
                prefix={<UserOutlined />}
                placeholder="Username"
                size="large"
              />
            </Form.Item>

            <Form.Item
              name="password"
              rules={[
                { required: true, message: "Please input your password!" },
              ]}
            >
              <Input.Password
                prefix={<LockOutlined />}
                placeholder="Password"
                size="large"
              />
            </Form.Item>

            <Form.Item>
              <Button
                type="primary"
                htmlType="submit"
                size="large"
                block
                onClick={seccsess}
              >
                Login
              </Button>
            </Form.Item>
          </Form>
        </Card>
      </Content>
    </Layout>
  );
};

export default Login;
