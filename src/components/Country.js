import React, { useState } from 'react'
import CountryItem from './CountryItem'
import Earth from './Earth'

const Country = (props) => {
    const [swip, setswip] = useState(false)

    const PopUpBtnRes = ()=>{
        setswip(true)
    }
    return (
        <>
            <div className='' style={{position:'relative'}}>
                <div className={`earth-container ${swip? 'swipup': ''}`} style={{ position:'absolute', width:'100%', zIndex:'2'}}>
                    <Earth PopUpBtnRes={PopUpBtnRes} swip={swip} />
                </div>

                <div className={`${swip? 'd-block':'d-none'}`} style={{ position:'relative', zIndex:'1', width:'100%'}}>
                  <CountryItem setprogress={props.setprogress}/>
                </div>
            </div>
        </>
    )
}

export default Country