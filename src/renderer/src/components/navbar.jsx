function Navbar() {
  return (
    <div className="navbar bg-accent text-accent-content sticky top-24 z-20 ED rounded-lg mt-5 mx-2 ">
      <div>
        <a className="btn btn-ghost normal-case text-2xl DD m-2 ">Novelty</a>
        <label htmlFor="my-drawer-2" className="btn btn-square btn-ghost drawer-button m-2 DD">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            className="inline-block w-8 h-8 stroke-current"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16M4 18h16"
            ></path>
          </svg>
        </label>
      </div>
    </div>
  )
}
export default Navbar
