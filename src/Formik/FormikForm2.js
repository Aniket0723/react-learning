import React from "react";
import { Field, Form, Formik } from "formik";

function FormikForm2() {
  return (
    <div>
      <Formik
        initialValues={{ name: " ", age: "", pass: "", gender: "",hobby:"",country:"" }}
        onSubmit={(values) => {
          console.log(values);
        }}
      >
        <Form>
          <label htmlFor="">Enter Name :</label>
          <Field type="text" name="name" />
          <br />
          <br />
          <label htmlFor="">Enter Age :</label>
          <Field type="number" name="age" />
          <br />
          <br />
          <label htmlFor="">Enter Password :</label>
          <Field type="password" name="pass" />
          <br />
          <br />
          <label htmlFor="">GENDER : &nbsp; </label>
          <label htmlFor="">MALE&nbsp;</label>
          <Field type="radio" name="gender" value="MALE" />
          &nbsp;
          <label htmlFor="">FEMALE&nbsp;</label>
          <Field type="radio" name="gender" value="FEMALE" />
          <br />
          <br />
          <label htmlFor="">HOBBIES:&nbsp;</label>
          <label htmlFor="">Writting &nbsp;</label>
          <Field type="checkbox" name="hobby" value="writting" />
          &nbsp;
          <label htmlFor="">Reading &nbsp;</label>
          <Field type="checkbox" name="hobby" value="reading" />
          &nbsp;
          <label htmlFor="">Playing&nbsp;</label>
          <Field type="checkbox" name="hobby" value="playing" />
          <br />
          <br />
          <label htmlFor="">Country</label>
          <Field name="country" as="select">
          <option value="INDIA">IN</option>
          <option value="UK">UK</option>
          <option value="USA">USA</option>
          </Field>
          <button type="submit">SUBMIT</button>
        </Form>
      </Formik>
    </div>
  );
}

export default FormikForm2;
