import React from 'react'
import P from '../../atoms/P/P'
import Header from '../../molecules/Header/Header'
import UserMap from '../map/UserMap'
import "./AddressCardStyle.sass"
const AddressCard = ({ address }) => {
    console.log(address)
    return (
        <div className='address_card_div'>
            <Header heading={"Address"} />
            <hr />
            <div >
                <P content={address.suite} />&nbsp;,
                <P content={address.street} />&nbsp;,
                <P content={address.city} />&nbsp;,
                <P content={address.zipcode} />.
            </div>
            {/* <UserMap lat={address.geo.lat} long={address.geo.lng} area={address.street} /> */}
        </div>
    )
}

export default AddressCard