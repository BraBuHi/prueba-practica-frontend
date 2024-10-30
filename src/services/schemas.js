import * as yup from 'yup';

export const Productschema = yup.object({
    nombre: yup.string().required('Este campo es obligatorio'),
    precio: yup.number().positive('El precio debe ser un número positivo').required('Este campo es obligatorio'),
    tipo: yup.string().oneOf(['Perecedero', 'No-Perecedero'], 'Selecciona un tipo válido').required('Este campo es obligatorio'),
}).required();

export const Storeschema = yup.object({
    nombre: yup.string().min(3,"Debe ser mayor a 3 letras").required('Este campo es obligatorio'),
    ciudad: yup.string().max(3, "Ciudad solo debe ser un codigo de 3 letras").required('Este campo es obligatorio'),
    direccion: yup.string().required('Este campo es obligatorio'),
}).required();