import {
  Box,
  Button,
  Drawer,
  DrawerBody,
  DrawerContent,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  Image,
  Stack,
  Text,
  useDisclosure,
  AlertDialog,
  AlertDialogOverlay,
  AlertDialogContent,
  AlertDialogHeader,
  AlertDialogBody,
  AlertDialogFooter,
} from '@chakra-ui/react';
import React, { useState, useContext } from 'react';
import { CartContext } from '../context/CartContext';

export const Cart = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();  // Chakra UI hook para controlar el Drawer
  const [placement] = useState("right");  // Posición del Drawer (a la derecha)
  const { cart, remove } = useContext(CartContext);  // Obtenemos el carrito y la función remove desde el contexto

  // Estado para controlar el AlertDialog
  const [isAlertOpen, setIsAlertOpen] = useState(false);  // Si el AlertDialog está abierto o cerrado
  const [productToRemove, setProductToRemove] = useState(null);  // El producto a eliminar

  // Función para manejar el click en "Eliminar"
  const handleRemoveClick = (product) => {
    setProductToRemove(product);  // Establece el producto a eliminar
    setIsAlertOpen(true);  // Abre el AlertDialog
  };

  // Función para confirmar la eliminación del producto
  const handleConfirmRemove = () => {
    if (productToRemove) {
      remove(productToRemove.id);  // Elimina el producto del carrito
      setIsAlertOpen(false);  // Cierra el AlertDialog
    }
  };

  return (
    <>
      {/* Botón para abrir el Drawer */}
      <Button
        colorScheme="teal"
        onClick={onOpen}
        position="fixed"
        bottom="20px"
        right="20px"
      >
        Ver Carrito ({cart.length}) {/* Muestra el número de productos en el carrito */}
      </Button>

      {/* Drawer para mostrar el carrito */}
      <Drawer placement={placement} onClose={onClose} isOpen={isOpen}>
        <DrawerOverlay />
        <DrawerContent>
          <DrawerHeader borderBottomWidth="1px">Carrito de Compras</DrawerHeader>
          <DrawerBody>
            {cart.length === 0 ? (
              <Text>No hay productos en el carrito.</Text>
            ) : (
              <Stack spacing={4}>
                {cart.map((product) => (
                  <Box
                    key={product.id}
                    p={4}
                    border="1px"
                    borderColor="gray.200"
                    borderRadius="md"
                  >
                    <Text fontSize="lg" fontWeight="bold">
                      {product.name}
                    </Text>
                    <Text>Precio: ${product.price}</Text>
                    <Image src={product.image} alt={product.name} />
                    <Button
                      mt={2}
                      colorScheme="red"
                      onClick={() => handleRemoveClick(product)}  // Muestra el AlertDialog para eliminar el producto
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

      {/* AlertDialog para confirmar la eliminación del producto */}
      <AlertDialog
        isOpen={isAlertOpen}
        onClose={() => setIsAlertOpen(false)}  // Cierra el AlertDialog
        isCentered
      >
        <AlertDialogOverlay>
          <AlertDialogContent>
            <AlertDialogHeader fontSize="lg" fontWeight="bold">
              Confirmar eliminación
            </AlertDialogHeader>

            <AlertDialogBody>
              ¿Estás seguro de que deseas eliminar el producto{" "}
              {productToRemove?.name} del carrito?
            </AlertDialogBody>

            <AlertDialogFooter>
              <Button onClick={() => setIsAlertOpen(false)}>Cancelar</Button>
              <Button colorScheme="red" onClick={handleConfirmRemove} ml={3}>
                Eliminar
              </Button>
            </AlertDialogFooter>
          </AlertDialogContent>
        </AlertDialogOverlay>
      </AlertDialog>
    </>
  );
};

export default Cart;


/*  sin alert
import { Box, Button, Drawer, DrawerBody, DrawerContent, DrawerFooter, DrawerHeader, DrawerOverlay, Image, Stack, Text, useDisclosure } from '@chakra-ui/react'

import React from 'react'
import { useState, useContext} from 'react';
import { CartContext } from '../context/CartContext';

export const Cart = () => {
  const { isOpen, onOpen, onClose} = useDisclosure();  //se importa de chackra esta funcion para lograr el Drawer
  const [placement] = useState("right"); //placement:desde donde se va a desplazar(se abre desde la derecha). es un hook que se hace desde usestate y se recibe por parametro
  const { cart, remove } = useContext(CartContext)  // me traigo la info de cart para mostarla en el carrito


  return  (
    <>
      {/* Botón para abrir el Drawer 
      <Button colorScheme="teal" onClick={onOpen} position="fixed" bottom="20px" right="20px">
        Ver Carrito ({cart.length}) {/*cart,length me muestra la cantidad de productosen el boton *
      </Button>

      {/* Drawer del carrito *
      <Drawer placement={placement} onClose={onClose} isOpen={isOpen}>
        <DrawerOverlay />
        <DrawerContent>
          <DrawerHeader borderBottomWidth="1px">Carrito de Compras</DrawerHeader>
          <DrawerBody>
            {cart.length === 0 ? (
              <Text>No hay productos en el carrito.</Text>
            ) : (
              <Stack spacing={4}>
                {cart.map((product) => (
                  <Box
                    key={product.id}
                    p={4}
                    border="1px"
                    borderColor="gray.200"
                    borderRadius="md"
                  >
                    <Text fontSize="lg" fontWeight="bold">
                      {product.name}
                    </Text>
                    <Text>Precio: ${product.price}</Text>
                    <Image src={product.image} alt={product.name}/>
                    <Button
                      mt={2}
                      colorScheme="red"
                      onClick={() => remove(product.id)}
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
}

export default Cart


*/