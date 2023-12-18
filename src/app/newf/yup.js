import   * as Yup from 'yup'

const fomscma=Yup.object({
    fname:Yup.string().required('inter value'),
    last:Yup.string().required('inter value'),
    age:Yup.number().required('inter value'),
    phone:Yup.number() .required('inter value'),
    email:Yup.email().required('inter value'),

})

export default fomscma;
// fname:'',
// last:'',
// age:'',
// phone:'',
// email:''