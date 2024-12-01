import React from 'react';
import { Flex, Button, Form, Input, Card, Row, Col, Image, message } from "antd";
import logo from '../Components/image/PTT_RAISE_logo.png';
import { useNavigate, Link } from "react-router-dom";
import axios from 'axios'

const { Meta } = Card;

export default function Register() {

  const [form] = Form.useForm();

  const navigate = useNavigate();

  const onFinish = async (values) => {
    console.log("Success:", values);

    const response = await axios.post("http://localhost:8000/users/register", values);
    if (response.status === 201) {
      message.success("Submitted, Please wait for admin approve")
      form.resetFields();
      navigate("/");
    }

  };
  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  return (
    <div style={{ backgroundColor: "#001529" }}>
      <Row justify="center">
        <Col xs={24} sm={22} md={20} lg={18} xl={16} xxl={14}>
          <Flex style={{ height: '100vh' }} justify="center" align="center" >
            <Card hoverable style={{ width: '100%', }}>
              <Flex vertical justify='center' align='center' style={{ width: '100%', }}>
                <Image preview={false} src={logo} width='250px' />
                <h1>Report Central</h1>
                <p>An application to create the report.</p>
                <h3>Register</h3>
                <Form
                  form={form}
                  name="basic"
                  labelCol={{ span: 6, }} wrapperCol={{ span: 18, }}
                  style={{
                    width: '100%', padding: 10,
                  }}
                  initialValues={{
                    remember: true,
                  }}
                  onFinish={onFinish}
                  onFinishFailed={onFinishFailed}
                  autoComplete="off"
                >

                  <Form.Item
                    label="First name"
                    name="firstname"
                    rules={[
                      {
                        required: true,
                        message: "Please input your first name!",
                      },
                    ]}
                  >
                    <Input />
                  </Form.Item>

                  <Form.Item
                    label="Last name"
                    name="lastname"
                    rules={[
                      {
                        required: true,
                        message: "Please input your last name!",
                      },
                    ]}
                  >
                    <Input />
                  </Form.Item>

                  <Form.Item
                    label="Employee ID"
                    name="employee_id"
                    rules={[
                      {
                        required: true,
                        message: "Please input your employee ID!",
                      },
                    ]}
                  >
                    <Input />
                  </Form.Item>

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
                    hasFeedback
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
                    label="Confirm Password"
                    name="confirmpassword"
                    hasFeedback
                    dependencies={['password']}
                    rules={[
                      {
                        required: true,
                        message: "Please input your password!",
                      },
                      ({ getFieldValue }) => ({
                        validator(rule, value) {
                          if (!value || getFieldValue('password') === value) {
                            return Promise.resolve();
                          }
                          return Promise.reject('Please ensure that the confirm password matches the password.')
                        }
                      })
                    ]}
                  >
                    <Input.Password />
                  </Form.Item>

                  <Form.Item
                    label="E-mail"
                    name="email"
                    rules={[
                      {
                        required: true,
                        type: "email",
                        message: "The input is not valid E-mail!",
                      },
                    ]}
                  >
                    <Input />
                  </Form.Item>

                  <Form.Item
                    wrapperCol={{
                      offset: 8,
                      span: 16,
                    }}
                  >
                    <Button type="primary" htmlType="submit">
                      Register
                    </Button>
                    <Button color="primary" variant="link" style={{ padding: '0px 0px 0px 10px' }}>
                      <Link to='/'>Back to Login</Link>
                    </Button>
                  </Form.Item>
                </Form>
              </Flex>
            </Card>
          </Flex >
        </Col>
      </Row >
    </div >
  )
}
