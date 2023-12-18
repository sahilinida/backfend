import React from 'react';
import * as Yup from 'yup'
const Formscima = Yup.object({
    fname:Yup.string().required('inter name'),
    email:Yup.string().email().required('inter eamil requered'),
    sir:Yup.string().required('inter seir name '),
    password:Yup.number().required('numinter')
});




export default Formscima;
