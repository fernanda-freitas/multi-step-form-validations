import { Form, Checkbox } from 'antd';
import Link from "next/link";

export default function DataCollection({formData, setFormData}) {
  return (
    <>
      <h3 className="tc-steps-section-title">Consent of personal data</h3>
      <div className='tc-steps-body'>
        <Form.Item
          name="name-consent"
          className="tc-data-acceptance-checkbox"
          valuePropName="checked"
          rules={[{ required: true, message: "Campo obrigatório" }]}
        >
          <Checkbox
            className="details-update-checkbox"
            onChange={(e) => {setFormData({...formData, nameConsent: e.target.checked})}}
          >
            I agree and accept to provide name
          </Checkbox>
        </Form.Item>
        <Form.Item
          name="email-consent"
          className="tc-data-acceptance-checkbox"
          valuePropName="checked"
          rules={[{ required: true, message: "Campo obrigatório" }]}
        >
          <Checkbox
            className="details-update-checkbox"
            onChange={(e) => {setFormData({...formData, emailConsent: e.target.checked})}}
          >
            I agree and accept to provide email
          </Checkbox>
        </Form.Item>
        <Form.Item
          name="phone-consent"
          className="tc-data-acceptance-checkbox"
          valuePropName="checked"
          rules={[{ required: true, message: "Campo obrigatório" }]}
        >
          <Checkbox
            className="details-update-checkbox"
            onChange={(e) => {setFormData({...formData, phoneConsent: e.target.checked})}}
          >
            I agree and accept to provide phone
          </Checkbox>
        </Form.Item>
        <Form.Item
          name="address-consent"
          className="tc-data-acceptance-checkbox"
          valuePropName="checked"
          rules={[{ required: true, message: "Campo obrigatório" }]}
        >
          <Checkbox
            className="details-update-checkbox"
            onChange={(e) => {setFormData({...formData, addressConsent: e.target.checked})}}
          >
            I agree and accept to provide address
          </Checkbox>
        </Form.Item>
      </div>
    </>
  )
}
