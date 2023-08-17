function Card() {
  return (
    <div className="card rounded-lg bg-base-100 shadow-xl DD ">
      <figure>
        <img
          src="https://images.unsplash.com/photo-1525966222134-fcfa99b8ae77?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8c2hvZXN8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60"
          alt="Shoes"
          className="w-96 h-60 rounded-lg shadow-xl "
        />
      </figure>
    </div>
  )
}

function Pagecontent() {
  return (
    <div className=" grid grid-cols-3  gap-6 m-10 justify-items-center grid-flow-row-dense ED ">
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
    </div>
  )
}
export default Pagecontent
