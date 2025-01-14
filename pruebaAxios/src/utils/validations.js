//objetos de validacion 

//validacion del pasword
export const password = {
    required: true,
    minLength: {
      value: 3,
      message: "El mínimo de carácteres es 3",
    },
    maxLength: {
      value: 6,
      message: "El máximo de carácteres es 6",
    },
  };
 
  //validacion del nombre
  export const name = {
      required: true,
      minLength: {
        value: 3,
        message: "El mínimo de carácteres es 3",
      },
      maxLength: {
          value: 20,
          message: "El máximo de carácteres es 20",
        },
  }