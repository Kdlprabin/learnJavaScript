import { Routes, Route } from 'react-router-dom'
import Dashboard from '../components/dashboard'
import { lazy, Suspense } from 'react'
import { Box } from '@chakra-ui/react'
const AddProduct = lazy(() => import('../components/product/AddProduct'))
const ViewProduct = lazy(() => import('../components/product/ViewProduct'))
const AdminRouter = () => {
    return (
        <Box height={'100vh'} width={'100%'}>
            <Suspense>
                <Routes>
                    <Route path={'/'} element={<Dashboard />} />
                    <Route path={'/product/add'} element={<AddProduct />} />
                    <Route path={'/product/view'} element={<ViewProduct />} />
                </Routes>
            </Suspense>
        </Box>
    );
}


export default AdminRouter