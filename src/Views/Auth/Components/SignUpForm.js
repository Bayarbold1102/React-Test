import { useState } from "react";
import SignUpType from "./SignupType";
import { Form, Input, Button, Checkbox } from 'antd';
import {Redirect, Link}  from 'react-router-dom';
import SignUp from "../../../Assets/css/SignUp.css"

function SignUpForm() {
  const [state, setstate] = useState({
    selected: null,
  });
  const onFinish = (values) => {
    console.log('Success:', values);
  };

  const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo);
  };
  return (
    <div className='container'>
      <div className="auth__title">
        <p>Бүртгүүлэх</p>
      </div>
      <div className='form'>
      <Form
      name="basic"
      labelCol={{ span: 8 }}
      wrapperCol={{ span: 16 }}
      initialValues={{ remember: true }}
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
      autoComplete="off"
    >
      <Form.Item
        label="Username"
        name="username"
        rules={[{ required: true, message: 'Нэвтрэх нэрээ оруулна уу!' }]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        label="Password"
        name="password"
        rules={[{ required: true, message: 'Нууц үгээ оруулна уу!' }]}
      >
        <Input.Password />
      </Form.Item>

      <Form.Item name="remember" valuePropName="checked" wrapperCol={{ offset: 8, span: 16 }}>
        <Checkbox>Санах</Checkbox>
      </Form.Item>

      <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
        <Button className='button' type="primary" htmlType="submit">
          <Link to="/admin">Нэвтрэх</Link>
        </Button>
      </Form.Item>
    </Form></div>
      <SignUpType state={state} setstate={setstate} />
    </div>
  );
}
export default SignUpForm;
