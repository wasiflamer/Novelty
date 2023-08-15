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
      <div class="grid grid-cols-4 gap-4 text-center m-8">
        <div>
          <div className="card lg:card-side bg-base-100 shadow-xl">
            <figure>
              <img src="/images/stock/photo-1494232410401-ad00d5433cfa.jpg" alt="Album" />
            </figure>
            <div className="card-body">
              <h2 className="card-title">New album is released!</h2>
              <p>Click the button to listen on Spotiwhy app.</p>
              <div className="card-actions justify-end">
                <button className="btn btn-primary">Listen</button>
              </div>
            </div>
          </div>
        </div>
        <div>2</div>
        <div>3</div>
        <div>4</div>
        <div>5</div>
        <div>6</div>
        <div>7</div>
        <div>8</div>
      </div>
    </>
  )
}
