import React, { useState , useEffect} from 'react';
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
import {List} from './List'
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

const getDatafromLS=()=>{
  const data = localStorage.getItem('admins');
  if(data){
    return JSON.parse(data);
  }else{
    return[]
  }
}
function AdminR () {
  const [form] = Form.useForm();
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
  const [admins, setAdmins] = useState(getDatafromLS());

   const [name, setName] = useState("");
   const [password, setPassword] = useState("");
   const [email, setEmail] = useState("");
   const [phone, setPhone] = useState("")

   const handleSubmit=(e)=>{
     e.preventDefault();
     let admin={
       name, password, email, phone
     };
     setAdmins([...admins, admin]);
     setName("");
     setPassword('');
     setPhone('');
     setEmail('');
   }


   useEffect(()=>{
    localStorage.setItem('admins', JSON.stringify(admins));
    localStorage.setItem('password', JSON.stringify(password));
    localStorage.setItem('name', JSON.stringify(name));
   },[ admins, password, name])
  return (  
    <Form
    onSubmit={handleSubmit}
      {...formItemLayout}
      form={form}
      name="register"
      scrollToFirstError
    >
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
      onChange={(e)=>setName(e.target.value)} value={name}
        name="Firstname"
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
        name="Companyname"
        label="Байгууллагын нэр"
        rules={[
          {
            required: true,
            message: 'Байгууллагын нэрээ оруулна уу!',
            whitespace: true,
          },
        ]}
      >
        <Input />
      </Form.Item>
      <Form.Item
        name="Position"
        label="Албан тушаал"
        rules={[
          {
            required: true,
            message: 'Албан тушаал оруулна уу!',
            whitespace: true,
          },
        ]}
      >
        <Input />
      </Form.Item>
      <Form.Item
      onChange={(e)=>setEmail(e.target.value)} value={email}
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
      onChange={(e)=>setPhone(e.target.value)} value={phone}
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
        name="Username"
        label="Нэвтрэх нэр"
        rules={[
          {
            required: true,
            message: 'Нэвтрэх нэрээ оруулна уу!',
            whitespace: true,
          },
        ]}
      >
        <Input />
      </Form.Item>
      <Form.Item
      onChange={(e)=>setPassword(e.target.value)} value={password}
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
        <Button  type="primary" htmlType="submit">
          Бүртгэх
        </Button>
      </Form.Item>
      
  
      <div className='view-container'>
          {admins.length>0&&<>
            <div className='table-responsive'>
              <table className='table'>
                <thead>
                  <tr>
                    <th>Name</th>
                    <th>Password</th>
                    <th>Email</th>
                    <th>Phone</th>
                  </tr>
                </thead>
                <tbody>
                  <List admins={admins} />
                </tbody>
              </table>
            </div>
          </>}
          {admins.length < 1 && <div>No admins are added yet</div>}
        </div>
    </Form>
  );
};
export default AdminR;
