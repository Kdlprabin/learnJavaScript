import React from 'react'
import { Box, Text, HStack, Divider, Button } from '@chakra-ui/react'
function productItem(props) {
    return (
        <Box
            shadow={'0px 0px 5px 0.5px white'}
            width={'100%'}
            padding={'5px 10px'}
            borderRadius={'5px'}
        >
            <HStack gap={'6'}>
                <Text width={"5%"}>SN: {props.sn + 1}</Text>
                <Divider orientation='vertical' />
                <Text width={"20%"}>Name: {props.name}</Text>
                <Divider orientation='vertical' />
                <Text width={"10%"}>Price: {props.price}</Text>
                <Box width={'50%'}>
                    <Button width={'10%'} colorScheme='blue'>Edit</Button>
                    <Button width={'10%'}  marginLeft={'2'} colorScheme='red'>Delete</Button>
                </Box>
            </HStack>
        </Box>
    )
}

export default productItem
