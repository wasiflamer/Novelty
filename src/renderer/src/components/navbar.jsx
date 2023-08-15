import Drawer from './drawer'

function Navbar() {
  return (
    <div className="navbar bg-base-200">
      <div>
        <Drawer />
        <a className="btn btn-ghost normal-case text-xl">Novelty</a>
      </div>
    </div>
  )
}
export default Navbar
