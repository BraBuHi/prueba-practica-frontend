import * as yup from 'yup';

export const Productschema = yup.object({
    name: yup.string().required('Este campo es obligatorio'),
    price: yup.number().positive('El precio debe ser un número positivo').required('Este campo es obligatorio'),
    type: yup.string().oneOf(['Perecedero', 'No-Perecedero'], 'Selecciona un tipo válido').required('Este campo es obligatorio'),
}).required();

export const Storeschema = yup.object({
    name: yup.string().required('Este campo es obligatorio'),
    city: yup.string().required('Este campo es obligatorio'),
    address: yup.string().required('Este campo es obligatorio'),
}).required();