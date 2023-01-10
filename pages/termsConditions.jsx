import React from 'react';
import { Form, Checkbox } from 'antd';

export default function TermsConditions({formData, setFormData}) {
  return (
    <>
      <h3 className="tc-steps-section-title">General Consent</h3>
      <div className='tc-steps-body-overflow'>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequatur quisquam deserunt cum vitae omnis! Fugit distinctio excepturi maiores quas iure unde tempore reprehenderit laborum cum, illum ea id repudiandae, praesentium sit delectus minima explicabo necessitatibus ipsa repellendus architecto facilis corrupti debitis quidem! Provident deserunt laboriosam culpa molestias cupiditate omnis alias, aliquam natus libero, quisquam delectus, ipsa ullam nihil. Enim aperiam reprehenderit est, officiis repudiandae dolor odit ipsam similique architecto distinctio corporis nostrum vero ullam voluptatum culpa adipisci minima commodi pariatur exercitationem harum provident reiciendis tempora. Voluptatum illum temporibus non facere optio recusandae ab. Doloremque dolore obcaecati impedit modi debitis! Animi nostrum, aliquid, assumenda, quam ab voluptas eos nesciunt minus voluptates repellat iste! Doloremque laudantium debitis ipsam ea quidem recusandae, magnam ipsa numquam mollitia cumque aut perspiciatis, soluta doloribus quisquam voluptatum! Suscipit illo animi dolorem odit repellat unde id eos. Fuga deserunt quas aliquam nihil enim maxime soluta quis, maiores ipsa fugiat iste sapiente eaque ad natus iusto praesentium saepe magni. Soluta labore ducimus obcaecati ab illum, veritatis aut quisquam nemo deleniti consequatur beatae aliquid magni ipsam voluptas non perferendis qui, quaerat similique numquam? Nobis sunt, nulla dignissimos inventore consequatur qui labore voluptas tenetur, odit error reiciendis debitis? Quas error, voluptate facilis, vero ut quisquam porro temporibus corporis assumenda eius provident eveniet nam, rem quae omnis nulla tempore at doloremque sunt. Eligendi, quis? Itaque rem tempore omnis fuga expedita molestiae quaerat ea ipsam nulla. Magni quasi distinctio, sit odit ex ratione dicta dignissimos modi ipsam quis illo numquam quidem, beatae, reprehenderit asperiores laudantium adipisci est esse totam fugiat. Praesentium, necessitatibus, omnis reiciendis eaque porro tempora, cupiditate animi repellendus eius quam assumenda ab autem. Assumenda quis numquam laborum corrupti voluptatibus ipsum quasi aut laboriosam accusantium rerum vel nemo provident nostrum eaque enim corporis quo libero ducimus placeat, atque neque dignissimos molestias beatae.
        </p>
      </div>
      <Form.Item
        name="general-consent"
        className="tc-acceptance-checkbox"
        valuePropName="checked"
        rules={[{ required: true, message: "Campo obrigatório" }]}
      >
        <Checkbox
        className="details-update-checkbox"
        onChange={(e) => {setFormData({...formData, generalConsent: e.target.checked})}}>
          <span>Li e aceito os termos e as condições</span>
        </Checkbox>
      </Form.Item>
    </>
  )
}
