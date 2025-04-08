import { useFormik } from 'formik';
import * as Yup from 'yup'
import { useState } from 'react';


const validate = Yup.object({
    name: Yup.string().min(2).max(20).required("Name must be required..!"),
    email: Yup.string().email().required("Email must be required..!"),
    pass: Yup.string().min(6).matches('^[0-9]*$', 'enter only numbers').required("Password must be required..!"),
    cpass: Yup.string().oneOf([Yup.ref('pass')], 'Password not match..!').required("CPassword must be required..!"),
    gender: Yup.string().required("Gender must be required..!")
})



function Form() {

    const [data, setdata] = useState([]);


    const init = {
        name: "",
        email: "",
        pass: "",
        cpass: "",
        gender: ""
    }


    const { handleChange, handleSubmit, handleBlur, values, touched, errors } = useFormik({
        initialValues: init,
        validationSchema: validate,
        onSubmit: ((values) => {
            setdata([...data, values])
        })

    })




    return (
        <div>
            <form onSubmit={handleSubmit}>
                <table border={1} cellPadding={10} cellSpacing={0}>
                    <tbody>
                        <tr>
                            <td>Name : </td>
                            <td>
                                <input type="text" name="name" id="" value={values.name} onChange={handleChange} onBlur={handleBlur} /><br></br>
                                {(errors.name && touched.name) && <font color="red">{errors.name}</font>}
                            </td>
                        </tr>
                        <tr>
                            <td>Email : </td>
                            <td>
                                <input type="text" name="email" id="" value={values.email} onChange={handleChange} onBlur={handleBlur} />
                                {(errors.email && touched.email) && <font color="red">{errors.email}</font>}
                            </td>
                        </tr>
                        <tr>
                            <td>Password : </td>
                            <td>
                                <input type="password" name="pass" id="" value={values.pass} onChange={handleChange} onBlur={handleBlur} />
                                {(errors.pass && touched.pass) && <font color="red">{errors.pass}</font>}
                            </td>
                        </tr>
                        <tr>
                            <td>Confirm Password : </td>
                            <td>
                                <input type="password" name="cpass" id="" value={values.cpass} onChange={handleChange} onBlur={handleBlur} />
                                {(errors.cpass && touched.cpass) && <font color="red">{errors.cpass}</font>}
                            </td>
                        </tr>
                        <tr>
                            <td>Gender : </td>
                            <td>
                                <input type="radio" name="gender" value="male" onChange={handleChange} onBlur={handleBlur} />Male
                                <input type="radio" name="gender" value="female" onChange={handleChange} onBlur={handleBlur} />Female
                                {(errors.gender && touched.gender) && <font color="red">{errors.gender}</font>}
                            </td>
                        </tr>
                        <tr>
                            <td colSpan={2} align='center'>
                                <input type="submit" value="Submit" />
                            </td>
                        </tr>
                    </tbody>
                </table>
            </form>


            <table border={1} cellPadding={10} cellSpacing={10}>
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Gender</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        data.map((item, id) => {
                            return (
                                <tr key={id}>
                                    <td>{id + 1}</td>
                                    <td>{item.name}</td>
                                    <td>{item.email}</td>
                                    <td>{item.gender}</td>
                                </tr>
                            )
                        })
                    }
                </tbody>
            </table>
                    
        </div>
    )
}

export default Form;