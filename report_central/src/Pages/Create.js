import React from 'react';
import { Space, Card, Button, Form, Input, Select, Radio, DatePicker, } from 'antd';

const { Meta } = Card;
const { Option } = Select;
const layout = {
  labelCol: {
    span: 4,
  },
  wrapperCol: {
    span: 20,
  },
};
const tailLayout = {
  wrapperCol: {
    offset: 4,
    span: 20,
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
  const onChange_reporttype = (e) => {
    const value = (e.target.value == 'mom') ? (false) : (true);
    console.log(value)
    return (value);
  }
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
                  onChange={onChange_reporttype}
                />
              </Form.Item>
              <Form.Item name="topic" label="Topic">
                <Input />
              </Form.Item>
              <Form.Item name="date" label="Date" rules={[{ required: true, },]}>
                <DatePicker />
              </Form.Item>
              <Form.Item name="location" label="Location">
                <Input />
              </Form.Item>
              <Form.Item name="project" label="Project" rules={[{ required: { onChange_reporttype }, },]}>
                <Select
                  disabled={onChange_reporttype}
                  options={[
                    { value: 'project_a', label: 'Project A' },
                    { value: 'project_b', label: 'Project B' },
                    { value: 'project_c', label: 'Project C' },
                    { value: 'project_D', label: 'Project D' },
                  ]} />
              </Form.Item>
              <Form.Item name="intro" label="Intro">
                <Input.TextArea />
              </Form.Item>
              <Form.Item name="description" label="Description">
                <Input.TextArea rows={6} />
              </Form.Item>
              <Form.Item name="nextstep" label="Next step">
                <Input.TextArea disabled={onChange_reporttype} />
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
