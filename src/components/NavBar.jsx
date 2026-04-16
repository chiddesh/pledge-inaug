import React from 'react'
import { BsBank } from "react-icons/bs";
function NavBar() {
    return (
        <div className='flex p-5 items-center text-2xl gap-2 shadow'>
            <BsBank size={35} />
            <p>இராணிப்பேட்டை மாவட்டம் / Ranipet District</p>
        </div>
    )
}

export default NavBar