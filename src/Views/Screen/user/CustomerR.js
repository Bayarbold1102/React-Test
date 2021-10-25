import React, { useState } from 'react';
import {
  Form,
  Input,
  InputNumber,
  Cascader,
  Select,
  Row,
  Col,
  Checkbox,
  Button,
  AutoComplete,
} from 'antd';
const { Option } = Select;

const formItemLayout = {
  labelCol: {
    xs: {
      span: 24,
    },
    sm: {
      span: 8,
    },
  },
  wrapperCol: {
    xs: {
      span: 24,
    },
    sm: {
      span: 16,
    },
  },
};
const tailFormItemLayout = {
  wrapperCol: {
    xs: {
      span: 24,
      offset: 0,
    },
    sm: {
      span: 16,
      offset: 8,
    },
  },
};

function CustomerR  () {
  const [form] = Form.useForm();

  const onFinish = (values) => {
    console.log('Received values of form: ', values);
  };

  const prefixSelector = (
    <Form.Item name="prefix" noStyle>
      <Select
        style={{
          width: 70,
        }}
      >
      </Select>
    </Form.Item>
  );
  const suffixSelector = (
    <Form.Item name="suffix" noStyle>
      <Select
        style={{
          width: 70,
        }}
      >
        <Option value="USD">$</Option>
        <Option value="CNY">¥</Option>
      </Select>
    </Form.Item>
  );
  const [autoCompleteResult, setAutoCompleteResult] = useState([]);

  const onEmailChange = (value) => {
    if (!value) {
      setAutoCompleteResult([]);
    } else {
      setAutoCompleteResult(['@gmail.com', '@yahoo.com'].map((domain) => `${value}${domain}`));
    }
  };

  const websiteOptions = autoCompleteResult.map((website) => ({
    label: website,
    value: website,
  }));

  return (
      
    <Form
      {...formItemLayout}
      form={form}
      name="register"
      onFinish={onFinish}
      scrollToFirstError
    >
        <Form.Item
        name="register"
        label="Регистрийн дугаар"
        rules={[
          {
            required: true,
            message: 'Регистрийн дугаар!',
            whitespace: true,
          },
        ]}
      >
        <Input />
      </Form.Item>
      <Form.Item
        name="Lastname"
        label="Овог"
        rules={[
          {
            required: true,
            message: 'Овгоо оруулна уу!',
            whitespace: true,
          },
        ]}
      >
        <Input />
      </Form.Item>
      <Form.Item
        name="Username"
        label="Нэр"
        rules={[
          {
            required: true,
            message: 'Нэрээ оруулна уу!',
            whitespace: true,
          },
        ]}
      >
        <Input />
      </Form.Item>
      <Form.Item
        name="email"
        label="E-mail"
        rules={[
          {
            type: 'email',
            message: 'E-mail-ээ зөв оруулна уу!',
          },
          {
            required: true,
            message: 'E-mail-ээ оруулна уу!',
          },
        ]}
      ><AutoComplete options={websiteOptions} onChange={onEmailChange} placeholder="e-mail">
        <Input />
        </AutoComplete>
      </Form.Item>

      <Form.Item
        name="phone"
        label="Утасны дугаар"
        rules={[
          {
            required: true,
            message: 'Утасны дугаараа оруулна уу!',
          },
        ]}
      >
        <Input
          type="number"
          style={{
            width: '100%',
          }}
        />
      </Form.Item>

      <Form.Item
        name="password"
        label="Нууц үг"
        rules={[
          {
            required: true,
            message: 'Нууц үгээ оруулна уу!',
          },
        ]}
        hasFeedback
      >
        <Input.Password />
      </Form.Item>

      <Form.Item
        name="confirm"
        label="Нууц үг давтан"
        dependencies={['password']}
        hasFeedback
        rules={[
          {
            required: true,
            message: 'Нууц үгээ давтан оруулна уу!',
          },
          ({ getFieldValue }) => ({
            validator(_, value) {
              if (!value || getFieldValue('password') === value) {
                return Promise.resolve();
              }

              return Promise.reject(new Error('Нууц үгс хоорондоо таарахгүй байна!'));
            },
          }),
        ]}
      >
        <Input.Password />
      </Form.Item>
      <Form.Item
        name="agreement"
        valuePropName="checked"
        rules={[
          {
            validator: (_, value) =>
              value ? Promise.resolve() : Promise.reject(new Error('Зөвшөөрөх')),
          },
        ]}
        {...tailFormItemLayout}
      >
        <Checkbox>
          <a href="">Зөвшөөрч</a> байна
        </Checkbox>
      </Form.Item>
      <Form.Item {...tailFormItemLayout}>
        <Button type="primary" htmlType="submit">
          Бүртгэх
        </Button>
      </Form.Item>
    </Form>
  );
};
 export default CustomerR;
