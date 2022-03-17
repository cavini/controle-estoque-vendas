import { Field, Form, Formik } from 'formik'
import React, { useEffect, useState } from 'react'
import { SignupSchema } from '../../validation/createAccountValidation'
import styles from './formStyles.module.css'

const AccountForm = ({ data }: any) => {
    const [value, setValue] = useState<any>({})
    useEffect(() => {
        console.log(value)
    }, [value])






    return (
        <div className={styles.formContainer}>

            <Formik onSubmit={(e: any) => console.log(e)} initialValues={data.fields.reduce((acc: { [x: string]: string }, curr: { fieldName: string | number }) => (acc[curr.fieldName] = '', acc), {})}>
                {({
                    values,
                    errors,
                    touched,

                    /* and other goodies */
                }) => (<Form className={styles.form}>
                    {data.fields.map(((field: { fieldName: string; fieldLabel: boolean | React.ReactChild | React.ReactFragment | React.ReactPortal | null | undefined; fieldId: any; placeHolder: any, fieldType: any, icon: any, validation: any }, index: any) =>
                        <>

                            <div className={styles.fieldContainer}>

                                {field.icon}
                                <Field validate={(e: any) => field.validation(e?.target?.value)} value={value?.field?.fieldName} onChange={(e: any) => setValue({ ...value, [e.target.name]: e.target.value })} className={styles.field} id={field.fieldId} placeHolder={field.placeHolder} type={field.fieldType} name={field.fieldName} />


                                {console.log(errors)}

                            </div>




                        </>
                    ))}
                    <p>Esqueceu a senha?</p>

                    <button className={styles.button} type={data.button.buttonType}>{data.button.buttonName}</button>
                </Form>)}
            </Formik>
        </div>)

}

export default AccountForm