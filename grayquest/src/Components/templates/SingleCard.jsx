import React from 'react'
import Header from '../UI/molecules/Header/Header'
import AddressCard from '../UI/organisms/AddressCard/AddressCard'
import CompanyCard from '../UI/organisms/CompanyCard/CompanyCard'
import UserDetailCard from '../UI/organisms/UserDetailCard/UserDetailCard'
import "../style/SingleCardStyle.sass"
import H1 from '../UI/atoms/H1/H1'
const SingleCard = ({ data }) => {
    console.log(data.address.city)
    return (
        <div className='main_card_div'>
            <H1 content={"User Details"} />
            <div className='single_card_div'>
                <UserDetailCard data={data} />
                <AddressCard address={data.address} />
                <CompanyCard company={data.company} />
            </div>
            <iframe
                style={{ margin: 'auto', width: "100%" }}
                title='map'
                width="600"
                height="450"
                loading="lazy"
                allowFullScreen
                referrerPolicy="no-referrer-when-downgrade"
                src={`https://www.google.com/maps/embed/v1/place?key=AIzaSyAh1M1-YKtiXPChZ7uab63DhsMQtXQKkrA&q=${data.address.city}&zoom=18&maptype=satellite`}>
            </iframe>
        </div >
    )
}

export default SingleCard