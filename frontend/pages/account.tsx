import React from 'react'
import AccountForm from '../Components/AccountForm/AccountForm'
import { SignupSchema } from '../validation/createAccountValidation'

export interface FieldInterface {
    fieldName: string,
    fieldLabel: string,
    fieldId: string,
    placeHolder: string,
    fieldType: string,
    icon: JSX.Element,
    validation: Function

}


class Field implements FieldInterface {
    fieldName: string;
    fieldLabel: string;
    fieldId: string;
    placeHolder: string;
    fieldType: string;
    icon: JSX.Element;
    validation: Function
    constructor(fieldName: string, fieldLabel: string, fieldId: string, placeHolder: string, fieldType: string, icon: JSX.Element, validation: Function) {
        this.fieldName = fieldName;
        this.fieldLabel = fieldLabel;
        this.fieldId = fieldId;
        this.placeHolder = placeHolder;
        this.fieldType = fieldType;
        this.icon = icon;
        this.validation = validation;
    }
}

let fields = [new Field('userName', 'Nome de usuário', 'user', 'Nome de usuário', 'text', <svg width="38" height="42" viewBox="0 0 38 42" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path fill-rule="evenodd" clip-rule="evenodd" d="M12.3919 10.616C12.3919 7.20951 15.1534 4.448 18.5599 4.448C21.9664 4.448 24.7279 7.20951 24.7279 10.616C24.7279 14.0225 21.9664 16.784 18.5599 16.784C15.1534 16.784 12.3919 14.0225 12.3919 10.616ZM18.5599 0.335999C12.8824 0.335999 8.27991 4.93851 8.27991 10.616C8.27991 16.2935 12.8824 20.896 18.5599 20.896C24.2374 20.896 28.8399 16.2935 28.8399 10.616C28.8399 4.93851 24.2374 0.335999 18.5599 0.335999ZM10.3359 25.008C7.60948 25.008 4.99472 26.0911 3.06685 28.0189C1.13898 29.9468 0.0559082 32.5616 0.0559082 35.288V39.4C0.0559082 40.5355 0.976411 41.456 2.11191 41.456C3.24741 41.456 4.16791 40.5355 4.16791 39.4V35.288C4.16791 33.6521 4.81775 32.0833 5.97447 30.9266C7.1312 29.7698 8.70005 29.12 10.3359 29.12H26.7839C28.4198 29.12 29.9886 29.7698 31.1453 30.9266C32.3021 32.0833 32.9519 33.6521 32.9519 35.288V39.4C32.9519 40.5355 33.8724 41.456 35.0079 41.456C36.1434 41.456 37.0639 40.5355 37.0639 39.4V35.288C37.0639 32.5616 35.9808 29.9468 34.053 28.0189C32.1251 26.0911 29.5103 25.008 26.7839 25.008H10.3359Z" fill="#4470C7" />
</svg>, function (param: any) {
    return 'Required'
})]


const Account = () => {

    let test = {

        fields,
        button: {
            buttonType: 'submit',
            buttonName: 'Criar a conta'
        },


    }
    return (
        <div style={{ padding: '2% 0', height: 'fit-content', border: '1px solid red' }}><AccountForm data={test} /></div>
    )
}

export default Account