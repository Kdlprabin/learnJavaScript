import React from 'react'
import { VStack, Text, Button, Box } from '@chakra-ui/react'
import { Link } from 'react-router-dom'
function Sidebar() {
    return (
        <VStack 
        shadow={'0px 3px 10px gray'}
        minWidth={'20%'}
        maxWidth={'30%'}
        height={'100vh'}>
            <Text>
                E-Commerce
            </Text>
            <VStack gap={'6'}>
                <Box>
                    <VStack>
                        <Text>
                            Dashboard
                        </Text>
                        <Link to={'/'}>
                            <Button>
                                Dashboard
                            </Button>
                        </Link>
                    </VStack>
                </Box>
                <Box>
                    <VStack>
                        <Text>
                            Product
                        </Text>
                        <Link to={'/product/add'}>
                            <Button>
                                Add Product
                            </Button>
                        </Link>
                        <Link to={'/product/view'}>
                            <Button>
                                View Product
                            </Button>
                        </Link>
                    </VStack>
                </Box>
                <Box>
                    <Button colorScheme='red'>Logout</Button>
                </Box>
            </VStack>
        </VStack>
    )
}

export default Sidebar
