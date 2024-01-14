import React, { useState } from 'react'
import video from './video.mp4'
import '../Res.css'

const Earth = (props) => {
    const [time, settime] = useState(false)
    const [text, settext] = useState(false)
    const [p, setp] = useState(false)
    const [fa, setfa] = useState(false)
    setInterval(() => {
        settime(true)
    }, 1000);
    setInterval(() => {
        setfa(true)
    }, 3000);


    setInterval(() => {
        settext(true)
    }, 1300);

    setInterval(() => {
        setp(true)
    }, 2000);

    return (
        <div className="main" style={{background:'black', height:'100vh'}}>


            <div className={` container d-flex align-item-center justify-content-center `} style={{ position: 'relative'}}>

                <h2 className={` slideDownAnimation `} style={{ position: 'absolute', top: text ? '45px' : '-105px', fontSize: '2.4rem' }}>The Country Project</h2>
                <p className={`text-center resp nomp slideDownAnimation slideDownAnimation2 ${p ? 'd-block' : 'd-none'}`} style={{ position: 'absolute', top: '110px' }}>Explore information about different countries: this COUNTRY PROJECT can serve as an educational resource, providing details about the geography, culture, history, and other interesting aspects of various countries.</p>

                <video className={`resv resn ${time ? 'slideDownAnimation ' : ''}`} autoPlay loop muted style={{top: time ? '165px' : '0' }}>
                    <source src={video} type="video/mp4" />
                    Your browser does not support the video tag.
                </video>


                <button onClick={props.PopUpBtnRes} className={` ${fa? ' slideUpAnimation slideDownAnimation2': ''} ${fa? 'bottom2':'bottom1'} ${props.swip? 'd-none': 'd-block'}`} style={{textShadow:'#ffbf00 0px 4px 5px', border: 'none', background: 'none', position: "absolute",  opacity: !fa && '0' }}><i style={{fontSize: '1.2rem'}} className="fa-solid text-light fa-angles-up"></i></button>

                <h5 className={`${fa? ' slideDownAnimation2 bottomtext2': 'bottomtext1'}`} style={{position: 'absolute', fontSize:'14px', opacity: !fa && '0', textShadow: '#ffbf00 0px 3px 11px'}}>Swip up</h5>
        </div>

        </div>
    )
}

export default Earth