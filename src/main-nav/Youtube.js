import React, { useState} from 'react'
import './Youtube.css'
export default function Youtube() {
    const [modalstatus,setModalstate] = useState(false)
 
    return (
      <div>
        <button className='en' onClick={()=>setModalstate(true)}>Enquire Now</button>
        {/* <div className='modalstatus'></div> */}
        <div onClick={()=>setModalstate(false)} className={`modaoverlay ${modalstatus ? 'modalshow' : ''}  `  }></div>
        <div className={`Modaldiv ${modalstatus ? 'showmodal' : ''}  `  }></div>
        
            <h3>Enquiry Now <span onClick={()=>setModalstate(false)}>&times;</span></h3>
        
      </div>
    )
  }

