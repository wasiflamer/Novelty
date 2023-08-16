import { useState } from 'react'

function Navbar({ label }) {
  const [Scroll, setScroll] = useState(false)
  // called when the window is scrolled.
  window.onscroll = function () {
    setScroll(true)
  }

  return (
    <div
      className={`navbar bg-secondary text-secondary-content sticky top-0 z-20 ${
        Scroll ? 'invisible' : 'visible'
      } `}
    >
      <div>
        {label}
        <a className="btn btn-ghost normal-case text-xl disabledrag">Novelty</a>
      </div>
    </div>
  )
}
export default Navbar
