import { Form, Input, InputNumber, Button, Select } from "antd";
const { Option } = Select;
function SignUpOrg() {
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
        label="Байгууллагын нэр"
        name="orgName"
        rules={[
          {
            required: true,
            message: "Заавал бөглөнө үү!",
          },
        ]}
      >
        <Input placeholder="Байгууллагын нэр" />
      </Form.Item>
      <Form.Item
        label="Байгууллагын төрөл"
        name="orgType"
        rules={[
          {
            required: true,
            message: "Заавал бөглөнө үү!",
          },
        ]}
      >
        <Select placeholder="Байгууллагын төрөл" allowClear>
          <Option value="Брокер">Брокер</Option>
          <Option value="Таваар нийлүүлэгч компани">
            Таваар нийлүүлэгч компани
          </Option>
          <Option value="Таваар агуулах компани">Таваар агуулах компани</Option>
          <Option value="Таваар тээвэрлэх компани">
            Таваар тээвэрлэх компани
          </Option>
          <Option value="Таваар худалдан авах компани">
            Таваар худалдан авах компани
          </Option>
        </Select>
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
        name="phone"
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
export default SignUpOrg;
