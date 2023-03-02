import { HStack } from '@chakra-ui/react'
import Sidebar from './components/Sidebar'
import AdminRouter from './router/AdminRouter'
function App(){
  return (
    <HStack className='App' height={'100vh'}>
      <Sidebar />
      <AdminRouter />
    </HStack>
  )
}

export default App