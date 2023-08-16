function Navbar({ label }) {
  return (
    <div className="navbar bg-secondary text-secondary-content">
      <div>
        {label}
        <a className="btn btn-ghost normal-case text-xl disabledrag">Novelty</a>
      </div>
    </div>
  )
}
export default Navbar
