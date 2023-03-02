import React from 'react'
import ProductItem from './productItem'
import { products } from '../../assets/data'
import { VStack, Text, Box } from '@chakra-ui/react'
function ViewProduct() {
    return (
        <VStack gap={'6'}>
            <Box>
                <Text>
                    View Product
                </Text>
            </Box>
            <VStack 
            gap={'2'} 
            width={'100%'}
            >
            {
                products.map((item, index) => <ProductItem key={index+item.name} sn={index} name={item.name} price={item.price} />)
            }
            </VStack>
        </VStack>
    )
}

export default ViewProduct
