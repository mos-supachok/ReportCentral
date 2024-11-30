import React from 'react';
import { Flex, Button, Form, Input, Card, Row, Col, Image, } from "antd";
import logo from '../Components/image/PTT_RAISE_logo.png';
import { useNavigate, Link } from "react-router-dom";


function Login() {
  const navigate = useNavigate();

  const onFinish = (values) => {
    console.log("Success:", values);
    navigate("/report/home");
  };
  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  return (
    <div style={{ backgroundColor: "#001529" }}>
      <Row justify="center">
        <Col xs={24} sm={20} md={16} lg={12} xl={10} xxl={8}>
          <Flex style={{ height: '100vh' }} justify="center" align="center" >
            <Card hoverable style={{ width: '100%' }}>
              <Flex vertical justify='center' align='center' >
                <Image preview={false} src={logo} width='250px' />
                <h1>Report Central</h1>
                <p>An application to create the report.</p>
                <h3>Login</h3>
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
                      Login
                    </Button>
                    <Button color="primary" variant="link" style={{ padding: '0px 0px 0px 30px' }}>
                      <Link to='/register'>Register</Link>
                    </Button>
                  </Form.Item>
                </Form>

              </Flex>
            </Card>
          </Flex >
        </Col>
      </Row >
    </div >
  );
}

export default Login;
