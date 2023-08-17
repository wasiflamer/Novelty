function Navbar({ label }) {
  return (
    <div className="nav navbar bg-base-100 text-secondary sticky top-0 z-20 enabledrag ">
      <div>
        {label}
        <a className="btn btn-ghost normal-case text-xl disabledrag">Novelty</a>
      </div>
    </div>
  )
}
export default Navbar
