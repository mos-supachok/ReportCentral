import React from 'react';
import { Flex, Button, Form, Input, Card, Row, Col } from "antd";
import logo from './image/PTT_RAISE_logo.png';

const onFinish = (values) => {
    console.log("Success:", values);
};
const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
};

function Login() {
    return (
        <div style={{ backgroundColor: "#2E75B6" }}>
            <Row justify="center">
                <Col xs={24} sm={20} md={16} lg={12} xl={10} xxl={8}>
                    <Flex style={{ height: '100vh' }} justify="center" align="center" >
                        <Card hoverable style={{ width: '100%' }}>
                            <Flex vertical justify='center' align='center' >
                                <img alt="PTT RAISE Logo" src={logo} style={{ width: '250px', }} />
                                <h1>Report Central</h1>
                                <p>An application to create the report.</p>
                                <Form
                                    name="basic"
                                    labelCol={{
                                        span: 8,
                                    }}
                                    wrapperCol={{
                                        span: 16,
                                    }}
                                    style={{
                                        maxWidth: 600,
                                    }}
                                    initialValues={{
                                        remember: true,
                                    }}
                                    onFinish={onFinish}
                                    onFinishFailed={onFinishFailed}
                                    autoComplete="off"
                                >
                                    <Form.Item
                                        label="Username"
                                        name="username"
                                        rules={[
                                            {
                                                required: true,
                                                message: "Please input your username!",
                                            },
                                        ]}
                                    >
                                        <Input />
                                    </Form.Item>

                                    <Form.Item
                                        label="Password"
                                        name="password"
                                        rules={[
                                            {
                                                required: true,
                                                message: "Please input your password!",
                                            },
                                        ]}
                                    >
                                        <Input.Password />
                                    </Form.Item>

                                    <Form.Item
                                        wrapperCol={{
                                            offset: 8,
                                            span: 16,
                                        }}
                                    >
                                        <Button type="primary" htmlType="submit">
                                            Submit
                                        </Button>
                                    </Form.Item>
                                </Form>
                            </Flex>
                        </Card>
                    </Flex >
                </Col>
            </Row >
        </div>
    );
}

export default Login;
