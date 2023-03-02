import React from 'react'
import { VStack, Breadcrumb, BreadcrumbItem, BreadcrumbLink } from '@chakra-ui/react'
import { Link } from 'react-router-dom'
function AddProduct() {
    return (
        <VStack>
            <Breadcrumb spacing='8px'>
                <BreadcrumbItem>
                    <Link to={'/product'}>
                        <BreadcrumbLink>product</BreadcrumbLink>
                    </Link>
                </BreadcrumbItem>
                <BreadcrumbItem isCurrentPage>
                    <Link to={'/product/add'}>
                        <BreadcrumbLink>add product</BreadcrumbLink>
                    </Link>
                </BreadcrumbItem>
            </Breadcrumb>
        </VStack>
    )
}

export default AddProduct
