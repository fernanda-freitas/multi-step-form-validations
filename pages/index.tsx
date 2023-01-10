import React, { useEffect, useState } from 'react';
import { Steps, Button, Form, Row, Col } from 'antd';
import DataPersonal from './dataPersonal';
import TermsConditions from './termsConditions';
import DataCollection from './dataCollection';

interface dataFormType {
    name: string,
    email: string,
    phone: number,
    generalConsent: boolean,
    nameConsent: boolean,
    emailConsent: boolean,
    phoneConsent: boolean,
    addressConsent: boolean,
}

export default function TermsAndConditions(props:dataFormType) {
    const logo = '/assets/images/logotype-dark.svg'
    const [form] = Form.useForm();
    const steps = [
        {
            id: 1,
            title: 'Informações pessoais',
        },
        {
            id: 2,
            title: 'Termos e condições',
        },
        {
            id: 3,
            title: 'Tratamento de dados',
        },
    ]
    const [current, setCurrent] = useState(0)
    const [formData, setFormData] = useState(props)

    const next = () => {
        setCurrent(current + 1)
    }

    const prev = () => {
        setCurrent(current - 1)
    }

    const stepsContent = () => {
        if (current === 0) {
            return <DataPersonal formData={formData} setFormData={setFormData}/>
        } else if ( current === 1 ) {
            return <TermsConditions formData={formData} setFormData={setFormData} />
        } else if (current === 2 ) {
            return <DataCollection formData={formData} setFormData={setFormData} />
        }
    }

    const validateNext = () => {
        if (current === 0) {
            (form.validateFields(['name', 'email', 'phone'])).then(() => {next()})
        } else if (current === 1) {
            (form.validateFields(['general-consent'])).then(() => {next()})
        }
    }

    const validateSubmit = () => {
        if (current === 2) {
            (form.validateFields(['name-consent', 'email-consent', 'phone-consent', 'address-consent'])).then(() => {handleSubmit()})
        }
    }

    const handleSubmit = () => {
        alert("Form Submited")
    }

    const items = steps.map((item) => ({ key: item.id, title: item.title }))

    return (
        <div className='container'>
            <Row className='tc-structure'>
                <Col span={0} offset={0} lg={{ span: 4, offset: 1 }} className="tc-navigation-steps">
                    <Steps
                        current={current}
                        items={items}
                        progressDot
                        direction="vertical"
                    />
                </Col>
                <Col span={24} lg={{ span: 12 }} className='tc-wrapper'>
                    <h1 className="tc-title">Multi-step form</h1>
                    <Form form={form} layout="vertical" className='tc-steps-content'>{stepsContent()}</Form>
                    <div className='tc-steps-action'>
                        {current > 0 && (
                            <Button
                                className="button-secondary"
                                onClick={prev}
                            >Anterior
                            </Button>
                        )}
                        <Button
                            className="site-button-solid"
                            onClick={current === steps.length - 1 ? validateSubmit : validateNext}>
                          {current === (steps.length - 1) ? "Submenter" : "Prosseguir"}
                        </Button>
                    </div>
                </Col>
            </Row>
        </div>
    )
}
