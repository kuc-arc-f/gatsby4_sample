import React from "react"

export default function Layout({ children }) {

  return (
  <div>
    {/* navi */}
    <div>
      <a href="/">[ SysName ]
      </a>
      <a href="/home">[ Home ]
      </a>
    </div>    
    {children}
    <br />    
  </div>
  )
}
