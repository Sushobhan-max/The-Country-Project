import React, { useEffect, useState } from 'react'
import Fetchdata from './Fetchdata';
import Loading from './Loading';

const CountryItem = (props) => {

  const [api, setapi] = useState([])
  const [value, setvalue] = useState('')
  const [loadng, setloadng] = useState(false)

  let datafetching = async () => {
    try {
      setloadng(true)
      props.setprogress(10)
      let url = await `https://restcountries.com/v3.1/name/${value}`
      props.setprogress(50)
      let fetchdata = await fetch(url);
      props.setprogress(99)
      let fetcheddata = await fetchdata.json();
      props.setprogress(100)
      setloadng(false)
      setapi(fetcheddata)
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    datafetching()
    // eslint-disable-next-line
  }, [])

  const handleonchange = (e) => {
    setvalue(e.target.value)
  }

  const handleonsubmit = (e) => {
    e.preventDefault();
    setapi([])
    datafetching()
  }
  return (
    <>

      <div className="section1 d-flex align-items-center justify-content-center" style={{ background: 'transparent', position: 'relative', height: '350px' }}>
        <div className='' style={{ position: 'absolute', top: '56px' }}>

          <div className='text-center' style={{ position: 'relative', bottom: '1rem' }}>
            <h1 className='display-1 res'>Find Information of Any Country.</h1>
            <p className='h6 ress' >Find geographical location, Independency, Catipal, Gini Index, Polulation & more of a Country.
              Sign up The Country Project Free Account to monitor up to 5 Countries for free <br />
              continuously and be alerted when it updated!</p>
          </div>


          <div className='my-4 p-3' style={{ margin: '0' }}>

            <form onSubmit={handleonsubmit}>
              <div className='d-flex ' >
                <input style={{ position: 'relative', borderRadius: '0' }} onChange={handleonchange} type="text" className='form-control' placeholder='Enter The Country Name You Want to Search' />

                <div className='d-flex' style={{ background: 'black', border: '1px solid white' }}>
                  <button type='submit' style={{ background: 'none', border: 'none' }} className='text-light'><i className="p-1 fa-solid fa-magnifying-glass"></i></button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>

      <div style={{ background: "white", borderRadius: '10px' }} className='mt container d-flex align-items-center justify-content-center '>
        {loadng && <Loading />}
        <div className={`row row-cols-auto ${api.length === 1 ? 'row-cols-md-1' : 'row-cols-md-2'} ${api.length > 2 ? 'row-cols-md-3' : 'row-cols-md-1'}`}>
          {api.length > 0 ? api.map((e) => {
            let commonName
            if (e.name.nativeName && Object.values(e.name.nativeName)[1]?.official) {
              commonName = Object.values(e.name.nativeName)[1]?.official
            }
            else if (e.name.nativeName && Object.values(e.name.nativeName)[0]?.official) {

            }
            else {
              commonName = 'not defined'
            }

            let officialName
            if (e.name.nativeName && Object.values(e.name.nativeName)[1]?.common) {
              officialName = Object.values(e.name.nativeName)[1]?.common
            }
            else if (e.name.nativeName && Object.values(e.name.nativeName)[0]?.common) {
              officialName = Object.values(e.name.nativeName)[0]?.common
            }
            else {
              officialName = 'nothing found'
            }

            return <div key={e.flags?.png}> <Fetchdata timezones={e.timezones} car={e.car} gini={e.gini} population={e.population} map={e.maps} area={e.area} borders={e.borders} latlang={Object.values(e.capitalInfo)[0]} languages={e.languages} region={e.region} subregion={e.subregion} altSpellings={Object.values(e.altSpellings)[1] ? Object.values(e.altSpellings)[1] : Object.values(e.altSpellings)[0]} capital={e.capital} currencies={e.currencies && Object.values(e.currencies)[0]} nameinoglan={officialName} independent={e.independent ? 'Independent Country' : 'Not Independent'} title3={commonName}
              title2={e.name.official} image={e.flags.png} title={e.name.common} coatOfArms={e.coatOfArms.png} />
            </div>
          }) : (
            <div className='my-5'>
              {!loadng && (<p style={{ width: 'max-content' }} className='text-dark'>{value.length === 0? 'you have not search anything yet':'No data available '}</p>)}
            </div>
          )}
        </div>
      </div>

      <div className='my-5' >
        <div className='container my-5'>
          <h3>What is The Country Project ?</h3>
          <p>"The Country Project" aims to be a go-to resource for in-depth information about countries around the world. It offers a user-friendly platform where visitors can explore and learn about various aspects of different nations, from geographical and demographic details to cultural and historical insights, "The Country Project" envisions creating a platform that not only serves as an informative resource but also fosters curiosity, appreciation, and understanding of the diverse world we live in.</p>

          <div className='d-flex for-res align-items-center justify-content-center gap-5 my-5'>
            <h4>Was this Project Helpful ? <span><i className="fa-solid fa-thumbs-up"></i></span> <span><i className="fa-solid fa-thumbs-down"></i></span></h4>

            <div className='d-flex for-res align-items-center gap-5'>
              <span className='p-1 p-hvr my-1' ><span><i className="fa-regular fa-face-smile"></i></span> Yes, it Was Greate</span>
              <span className='p-1 p-hvr2 my-1' ><span><i className="fa-regular fa-face-frown-open"></i></span> Sort of, Thanks</span>
              <span className='p-1 p-hvr3 my-1' ><span><i className="fa-regular fa-face-frown"></i></span> Not Really</span>
            </div>
          </div>
        </div>
        <div className="container my-4">
          <h3>Related Resources</h3>

          <div className='d-flex for-res justify-content-center gap-3 my-5'>
            <div className='divsty p-4 d-flex flex-column align-items-center justify-content-center my-2'>
              <h4><span><i className="fa-regular fa-pen-to-square"></i></span> Blog</h4>
              <p>Updating an Existing Country <br /> Monitor to Add More info</p>
            </div>
            <div className='divsty p-4 d-flex flex-column align-items-center justify-content-center my-2'>
              <h4><span><i className="fa-solid fa-video"></i></span> video</h4>
              <p>Monitoring countries using the <br />Web Page Speed (Browser)</p>
            </div>
            <div className='divsty p-4 d-flex flex-column align-items-center justify-content-center my-2'>
              <h4><span><i className="fa-solid fa-microphone-lines"></i></span> Webinar</h4>
              <p>3 new features to enhance your  <br /> countrymonitoring experience</p>
            </div>
            <div className='divsty p-4 d-flex flex-column align-items-center justify-content-center my-2'>
              <h4><span><i className="fa-solid fa-handshake-angle"></i></span> Webinar</h4>
              <p>add a country monitor</p>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default CountryItem;