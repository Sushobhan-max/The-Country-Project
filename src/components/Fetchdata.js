import React from 'react'

const Fetchdata = (props) => {
    const { image, title, title2, title3 } = props;
    return (
        <div className=''>
            <div className="card text-center">
                <div className="card mb-3" style={{}}>
                    <img style={{
                        height: '242px', margin: 'auto'
                    }} src={image ? image : 'not available'} className="card-img-top" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title">{title ? title : ''}</h5>

                        <p className="card-text">{title2 ? title2 : ''}</p>
                        <p className="card-text">{title3 ? title3 : ''}</p>
                    </div>
                </div>

                <h2 className='my-5'>Information of the country </h2>
                <table className="table font-weight-bold">
                    <tbody>
                        <tr>
                            <th scope="row">Name In official language</th>
                            <td>
                                {props.nameinoglan ?
                                    props.nameinoglan : 'Not Available'}

                                {props.altSpellings ? ` (${props.altSpellings})` : ('Not Available')}
                            </td>
                        </tr>
                        <tr>
                            <th scope="row">Capital</th>
                            <td>
                                {props.capital ? props.capital : 'Not Available'}
                            </td>
                        </tr>
                        <tr>
                            <th scope="row">Independent</th>
                            <td>{props.independent ? props.independent : 'Not Available'}</td>
                        </tr>
                        <tr>
                            <th scope="row">Currency</th>
                            <td>{props.currencies ? Object.entries(props.currencies).map(([key, value]) => (
                                <p key={key}>{key}: {value}</p>
                            )) : 'Not Available'}</td>
                        </tr>
                        <tr>
                            <th scope="row">Continents</th>
                            <td> {props.region ? props.region : 'Not Available'} ({props.subregion ? props.subregion : 'Not Available'})</td>
                        </tr>
                        <tr>
                            <th scope="row">languages</th>
                            <td> {props.languages ? Object.entries(props.languages).map(([key, value]) => (
                                <p key={key}>{value}</p>
                            )) : 'Not Available'}</td>
                        </tr>

                        <tr>
                            <th scope="row">latitude and longitude</th>
                            <td>  {props.latlang ? Object.entries(props.latlang).map(([key, value]) => (
                                <p key={key}>{`${value}`}</p>
                            )) : 'Not Available'}</td>
                        </tr>

                        <tr>
                            <th scope="row">borders</th>
                            <td>
                                {props.borders ? Object.entries(props.borders).map(([key, value]) => (
                                    <p key={key}>{value}</p>
                                ))
                                    : <p>Not Available</p>}
                            </td>
                        </tr>

                        <tr>
                            <th scope="row">Total Area</th>
                            <td>{props.area ? props.area : 'Not Available'} sq.km</td>
                        </tr>
                        <tr>
                            <th scope="row">Maps</th>
                            <td>
                                <a target='_blank' rel="noreferrer" href={props.map.openStreetMaps ? props.map.openStreetMaps : 'Not Available'}>openstreetmap</a> <br />
                                <a target='_blank' rel="noreferrer" href={props.map.googleMaps ? props.map.googleMaps : 'Not Available'}>googleMaps</a>
                            </td>
                        </tr>
                        <tr>
                            <th scope="row">population</th>
                            <td> {props.population ? props.population : 'Not Available'}</td>
                        </tr>
                        <tr>
                            <th scope="row">Gini Index</th>
                            <td>
                                {props.gini ?
                                    Object.entries(props.gini).map(([key, value]) => (
                                        <p key={key}>{`${key}: ${value}`}</p>
                                    ))

                                    : <p>Not Available</p>}
                            </td>
                        </tr>
                        <tr>
                            <th scope="row">Cars & Driving Rules</th>
                            <td>  {props.car ? Object.entries(props.car).map(([key, value]) => (
                                <p key={key}>{`${key}: ${value}`}</p>
                            )) : 'Not Available'}</td>
                        </tr>
                        <tr>
                            <th scope="row">Timezone</th>
                            <td>  {props.timezones ? Object.entries(props.timezones).map(([key, value]) => (
                                <p key={key}>{value}</p>
                            )) : 'Not Available'}</td>
                        </tr>
                        <tr>
                            <th scope="row">coat Of Arms</th>
                            <td>
                                <img style={{ height: '140px' }} src={props.coatOfArms ? props.coatOfArms : 'Not Available'} alt="" />
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        

        </div >
    )
}

export default Fetchdata