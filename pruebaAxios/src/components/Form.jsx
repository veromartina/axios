import {
    Button,
    FormControl,
    FormErrorMessage,
    FormLabel,
    Heading,
    Input,
    InputGroup,
    InputRightElement,
    Text,
    VStack,
  } from "@chakra-ui/react";
  import { useState } from "react";
  import { useForm } from "react-hook-form";
  import { name, password } from "../utils/validations";
  
  //importar desde el paquete
  export const Form = () => {
    const [show, setShow] = useState(false);
    const handleClick = () => setShow(!show); //  ambos estados se piden desde el paquete de chackra(cuando copio) el codigo del input para mostrar la contraseña.
  
    const methods = useForm()  // importo desde react
  
    console.log(methods)
  
    //USO DESTRUCTURING PARA TRAER SOLO LO QUE NECESITO
    //*register:va registrar cada input para manejarlo con el hook
    //*handleSubmit:nos sirve para enviar la funcion o sea para  que haga el submit
    //formState:estado del formualrio(de este uso errors)
    //watch:
    const {
      register,
      handleSubmit,
      formState,
      watch,
    } = useForm();
    
    const { errors } = formState; //formState sin parentesis como el estado useState(). dentro de errors tengo mis errores
    console.log("errors:", errors);
  
    
    //para controlar el input {...register ('nombre del input'), un objeto de validación, }
    const emailWatch = watch('email')  //watch:ve todo el tiempo el contenido del input(observa y compara)(en consola muestra string uno por uno ingresado)
    console.log(emailWatch)
  
    const login = (data) => { //el paquete me da la data por parametros
      console.log(data); 
      alert("logueado");
    };
    return (
      <VStack as="form" onSubmit={handleSubmit(login)}>  {/* //hasta ahora veniamos manejando diferente el paquete lo ejecuta así.le doy el evento "onSubmit" y le paso la funcion que trae el paquete "handleSubmit" y como parametro la funcion que yo necesito*/}
        <Heading>Login</Heading>
        <Input
          {...register("email", {
            required: true, 
            pattern: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
          })}
          placeholder="xxxxxx@hotmail.com"
          type="email"
        />  {/*va entre llave por ser cod.js ...: operaitoy. register:es lo q a ejecutar, como  primer parametro recibe una key(el nombre del input; email). como segundo parametro un objeto(donde le digo que quiero que sea obligatorio,o que quiero que valide(condiciones). required: porqie obligatorio, requerido,x eso es true.  pattern:patron de vallidacion*/}

        <InputGroup size="md">  {/*input para la contraseña de chackra */}
          <Input
            pr="4.5rem"
            type={show ? "text" : "password"}
            placeholder="Enter password"
            {...register("password", password)} 
          />  {/* password: el primero es el nombre del input, el segundo es objeto que creo con todos sus datos ,para lo cual creo un archivo aparte dentro de la carpeta utils(validation.jsx*/}
          <InputRightElement width="4.5rem">
            <Button h="1.75rem" size="sm" onClick={handleClick}>
              {show ? "Ocultar" : "Mostrar"}
            </Button>
          </InputRightElement>
        </InputGroup>
        <Text>{errors.password?.message}</Text>
  {/*del objeto le digo cuando mostrar el error(password). del objeto obtengo el mensaje. el signo "?"pregunta si tengo errores para que me muestre el mensaje(si le puse mensaje) .con este signo evito el error del objeto vacio y que explote y evito usar "show"*/}

      {/* CON CHAKRA */}
      {/*para que el FormControl tome el error mensage hay que pasarle  "IsInvalid" */}
        <FormControl  isInvalid={errors.name}>
          <FormLabel>Name</FormLabel>
          <Input {...register('name',name)} placeholder='First name'/>
          <FormErrorMessage>{errors.name?.message}</FormErrorMessage>
        </FormControl>
  
        <Button type="submit">Login</Button>
      </VStack>
    );
  };