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
      {/* Botón para abrir el Drawer */}
      <Button colorScheme="teal" onClick={onOpen} position="fixed" bottom="20px" right="20px">
        Ver Carrito ({cart.length}) {/*cart,length me muestra la cantidad de productosen el boton */}
      </Button>

      {/* Drawer del carrito */}
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


