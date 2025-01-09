import { Button, Drawer, DrawerBody, DrawerContent, DrawerHeader, DrawerOverlay, useDisclosure } from '@chakra-ui/react'
import React from 'react'
import { useState } from 'react';

export const Cart = () => {
  const { isOpen, onOpen, onClose} = useDisclosure();  //se importa de chackra esta funcion para lograr el Drawer
  const [placement] = useState("right"); //placement:desde donde se va a desplazar(se abre desde la derecha). es un hook que se hace desde usestate y se recibe por parametro


  return (
   <>
   <Button colorScheme='teal' onClick={onOpen} position="fixed" botton="20px" right="20px">Ver carrito</Button>

   <Drawer placement={placement} onClose={onClose} isOpen={isOpen}>
    <DrawerOverlay/> {/*cuando hago click afuera se cierra el drawer */}
    <DrawerContent> {/*contenido del drawer */}
      <DrawerHeader borderBottomWidth="1px">Carrito de compras</DrawerHeader> {/*contenido del header(titulo)del drawer */}
    </DrawerContent>  
    <DrawerBody></DrawerBody>{/*donde muestro los productos que vienen de CartContext(hook) van a estar en cart(estado)*/}
   </Drawer>
   </>

  )
}

export default Cart



/*import { useContext, useState } from "react";
import {
  Box,
  Button,
  Stack,
  Text,
  Drawer,
  DrawerOverlay,
  DrawerContent,
  DrawerHeader,
  DrawerBody,
  DrawerFooter,
  useDisclosure,
} from "@chakra-ui/react";
import { CartContext } from "../context/CartContext";

const Cart = () => {
  const { cart, remove } = useContext(CartContext);
  const { isOpen, onOpen, onClose } = useDisclosure(); // Control del Drawer
  const [placement] = useState("right"); // Posición del Drawer (puedes cambiarla)

  return (
    <>
      {/* Botón para abrir el Drawer 
      <Button colorScheme="teal" onClick={onOpen} position="fixed" bottom="20px" right="20px">
        Ver Carrito ({cart.length})
      </Button>

      {/* Drawer del carrito 
      <Drawer placement={placement} onClose={onClose} isOpen={isOpen}>
        <DrawerOverlay />
        <DrawerContent>
          <DrawerHeader borderBottomWidth="1px">Carrito de Compras</DrawerHeader>
          <DrawerBody>
            {cart.length === 0 ? (
              <Text>No hay productos en el carrito.</Text>
            ) : (
              <Stack spacing={4}>
                {cart.map((course) => (
                  <Box
                    key={course.id}
                    p={4}
                    border="1px"
                    borderColor="gray.200"
                    borderRadius="md"
                  >
                    <Text fontSize="lg" fontWeight="bold">
                      {course.name}
                    </Text>
                    <Text>Precio: ${course.price}</Text>
                    <Button
                      mt={2}
                      colorScheme="red"
                      onClick={() => remove(course.id)}
                    >
                      Eliminar
                    </Button>
                  </Box>
                ))}
              </Stack>
            )}
          </DrawerBody>
          <DrawerFooter>
            <Button colorScheme="blue" mr={3} onClick={onClose}>
              Cerrar
            </Button>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    </>
  );
};

export default Cart;
*/