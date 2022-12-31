import React from 'react'
import Body from '../../molecules/Body/Body'
import Header from '../../molecules/Header/Header'

const CompanyCard = ({ company }) => {
    return (
        <div>
            <Header heading={"Company"} />
            <hr />
            <Body title={"Company name"} desc={company.name} />
            <Body title={"Catch Phrase"} desc={company.catchPhrase} />
            <Body title={"bs"} desc={company.bs} />
        </div>
    )
}

export default CompanyCard