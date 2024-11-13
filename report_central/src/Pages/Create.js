import React from 'react';
import { Space, Card, Button, Form, Input, Select, Radio, DatePicker, } from 'antd';

const { Meta } = Card;
const { Option } = Select;
const layout = {
  labelCol: {
    span: 4,
  },
  wrapperCol: {
    span: 12,
  },
};
const tailLayout = {
  wrapperCol: {
    offset: 4,
    span: 12,
  },
};

const reportType = [
  {
    label: 'Minute of meeting',
    value: 'mom',
  },
  {
    label: 'General report',
    value: 'gp',
  },
];

function Create() {

  const [form] = Form.useForm();
  const onFinish = (values) => {
    console.log(values);
  };
  const onReset = () => {
    form.resetFields();
  };
  return (
    <div>
      <Space direction="vertical" size="middle" style={{ display: 'flex', }}>
        <Card>
          <Meta title="Report" description="Create a report" />
          <div>
            <Form {...layout} form={form} name="control-hooks"
              onFinish={onFinish}
              style={{ margin: '20px' }}
            >
              <Form.Item name="reportype" label="Repor type" rules={[{ required: true, },]}>
                <Radio.Group
                  block
                  options={reportType}
                  optionType="button"
                  buttonStyle="solid"
                />
              </Form.Item>
              <Form.Item name="topic" label="Topic" rules={[{ required: true, },]}>
                <Input />
              </Form.Item>
              <Form.Item name="date" label="Date" rules={[{ required: true, },]}>
                <DatePicker />
              </Form.Item>


              <Form.Item {...tailLayout}>
                <Space>
                  <Button type="primary" htmlType="submit">
                    Submit
                  </Button>
                  <Button htmlType="button" onClick={onReset}>
                    Reset
                  </Button>
                </Space>
              </Form.Item>
            </Form>
          </div>
        </Card>
      </Space>
    </div>
  );
}

export default Create;
