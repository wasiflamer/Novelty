import Drawer from './components/drawer'
import Navbar from './components/navbar'

import { QueryClient, QueryClientProvider, useQuery } from '@tanstack/react-query'

const queryClient = new QueryClient()

export default function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Example />
    </QueryClientProvider>
  )
}

function Example() {
  return (
    <>
      <Navbar />
    </>
  )
}
