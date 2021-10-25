import { Form, Input, InputNumber, Button } from "antd";
function SignUpUser() {
  const [form] = Form.useForm();
  const onFinish = () => {
    try {
      alert("Server лүү илгээхэд бэлэн боллоо");
    } catch (e) {
      return;
    }
  };
  return (
    <Form layout="vertical" name="userForm" form={form} onFinish={onFinish}>
      <Form.Item
        label="Регистрийн дугаар"
        name="regnumber"
        rules={[
          {
            required: true,
            message: "Заавал бөглөнө үү!",
          },
        ]}
      >
        <Input placeholder="Регистрийн дугаар" />
      </Form.Item>
      <Form.Item
        label="Овог"
        name="lastname"
        rules={[
          {
            required: true,
            message: "Заавал бөглөнө үү!",
          },
        ]}
      >
        <Input placeholder="Овог" />
      </Form.Item>
      <Form.Item
        label="Нэр"
        name="name"
        rules={[
          {
            required: true,
            message: "Заавал бөглөнө үү!",
          },
        ]}
      >
        <Input placeholder="Нэр" />
      </Form.Item>
      <Form.Item
        label="Утасны дугаар"
        name="phone"
        rules={[
          {
            type: "number",
            required: true,
            message: "Заавал бөглөнө үү!",
          },
        ]}
      >
        <InputNumber placeholder="Утасны дугаар" />
      </Form.Item>

      <Form.Item
        label="Имэйл хаяг"
        name="email"
        rules={[
          {
            type: "email",
            required: true,
            message: "Заавал бөглөнө үү!",
          },
        ]}
      >
        <Input placeholder="Имэйл хаяг" />
      </Form.Item>
      <Form.Item
        label="Нэвтрэх нэр"
        name="username"
        rules={[
          {
            required: true,
            message: "Заавал бөглөнө үү!",
          },
        ]}
      >
        <Input placeholder="Нэвтрэх нэр" />
      </Form.Item>

      <Form.Item
        label="Нууц үг"
        name="password"
        rules={[
          {
            min: 6,
            message: "Хамгийн багадаа 6 гийн урттай байна!",
          },
          {
            required: true,
            message: "Заавал бөглөнө үү!",
          },
        ]}
      >
        <Input.Password placeholder="Нууц үг" autoComplete="new-password" />
      </Form.Item>

      <Form.Item
        name="confirm"
        label="Давтан нууц үг"
        dependencies={["password"]}
        hasFeedback
        rules={[
          {
            required: true,
            message: "Заавал бөглөнө үү!",
          },
          ({ getFieldValue }) => ({
            validator(_, value) {
              if (!value || getFieldValue("password") === value) {
                return Promise.resolve();
              }
              return Promise.reject(new Error("Нууц үг таарахгүй байна "));
            },
          }),
        ]}
      >
        <Input.Password
          placeholder="Давтан нууц үг"
          autoComplete="new-password"
        />
      </Form.Item>
      <Form.Item>
        <Button type="primary" htmlType="submit">
          Бүртгүүлэх
        </Button>
      </Form.Item>
    </Form>
  );
}
export default SignUpUser;
