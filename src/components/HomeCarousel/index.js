import React from 'react'
import '../../pages/Home/Home.css'

function index({ children, className, className2 }) {
  return (
    <div className={className} style={{height:'640px', display:'flex', justifyContent:'center', alignItems:'center'}}>
        <div className={className2} style={{fontWeight:600, fontSize:'24px'}}>{children}</div>
    </div>
  )
}

export default index