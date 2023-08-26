import { QueryClient, QueryClientProvider, useQuery } from '@tanstack/react-query'

const queryClient = new QueryClient()

function Landing() {
  return (
    <QueryClientProvider client={queryClient}>
      <B_logic />
    </QueryClientProvider>
  )
}

function B_logic() {
  const { isLoading, error, data } = useQuery({
    queryKey: ['repoData'],
    queryFn: () => fetch('https://wallhaven.cc/api/v1/search?q=car').then((res) => res.json())
  })

  if (isLoading)
    return (
      <div className="flex justify-center items-center h-screen w-[140vh]">
        <div className="loading loading-spinner text-secondary w-10 h-10"></div>
      </div>
    )

  if (error)
    return (
      <div>
        <p>error</p>
      </div>
    )

  var array = []

  data.data.map((all) => array.push(all))

  console.log(array)

  return (
    <div>
      <div className="grid grid-cols-3 gap-6 m-10 justify-items-center grid-flow-row-dense ED ">
        {array.map((x) => (
          <Cards url={x.thumbs.large} />
        ))}
      </div>
    </div>
  )
}

function Cards({ url }) {
  return (
    <div className="card rounded-lg shadow-md shadow-black DD ">
      <figure>
        <img src={url} alt="img" className="w-96 h-60 rounded-lg shadow-xl outline-8 " />
      </figure>
    </div>
  )
}

function Pagecontent() {
  return <Landing />
}
export default Pagecontent
