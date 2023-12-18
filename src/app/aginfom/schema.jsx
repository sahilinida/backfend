import * as  Yup from 'yup'
  const schema=Yup.object({
    firname:Yup.string().required('plaes inter fir name'),
    sir:Yup.string().required('inter sir name'),
    // email:string().email().required('inter email'),
    phone:Yup.number().required('inter phone phone'),
    password:Yup.number().required('inter must password requere'),



  })
  export default schema;
  


















  
//   import * as Yup from 'yup'
//   const Formscima = Yup.object({
//       fname:Yup.string().required('inter name'),
//       email:Yup.string().email().required('inter eamil requered'),
//       sir:Yup.string().required('inter seir name '),
//       password:Yup.number().required('numinter')
//   });
  
  
  
  
//   export default Formscima;
  