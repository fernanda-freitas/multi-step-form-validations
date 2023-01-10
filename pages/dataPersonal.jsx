import { Form, Input } from 'antd';

export default function PersonalInformation({formData, setFormData}) {

  return (
    <>
      <h3 className="tc-steps-section-title">Personal information</h3>
      <div className='tc-steps-body'>
        <Form.Item
          label="Nome"
          name="name"
          status="error"
          rules={[{ required: true, message: "Campo obrigatório" }]}>
          <Input
            size="large"
            className="border-radius-input"
            value={formData.name}
            type="text"
            onChange={(e) => {setFormData({...formData, name: e.target.value})}}/>
        </Form.Item>
        <Form.Item
          label="Email pessoal"
          name="email"
          rules={[{ required: true, message: "Campo obrigatório" }]}>
          <Input
            size="large"
            className="border-radius-input"
            type="email"
            value={formData.email}
            onChange={(e) => {setFormData({...formData, email: e.target.value})}}
            />
        </Form.Item>
        <Form.Item
          label="Telemóvel pessoal"
          name="phone"
          rules={[{ required: true, message: "Campo obrigatório" }]}>
          <Input
            size="large"
            className="border-radius-input"
            type="number"
            value={formData.phone}
            onChange={(e) => {setFormData({...formData, phone: e.target.value})}}/>
        </Form.Item>
      </div>
    </>
  )
}
