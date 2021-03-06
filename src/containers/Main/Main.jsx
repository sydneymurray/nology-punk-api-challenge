import React from 'react'
import BeerCard from '../../components/BeerCard/BeerCard'
import "./Main.scss"

const Main = (props) => {
    const {setDisplayedBeers, beers, searchText, setSelectedBeer, showHighABV, showClassic, selectedBeer, showAcidity} = props
    const filteredBeers = beers.filter(beer => {
        let returnBeer = true
        
        if (showHighABV && beer.abv <= 6) returnBeer = false
        if (showClassic && !beer.description.toUpperCase().includes("CLASSIC")) returnBeer = false 
        if (showAcidity && beer.ph >= 4) returnBeer = false
        if (searchText && !beer.name.toUpperCase().includes(searchText.toUpperCase())) returnBeer = false 

        return returnBeer
    })
    
    setDisplayedBeers(filteredBeers.length)

    return <>
        {!selectedBeer && <h2 className='beer-counter' id="the-beers">Available Beers: {beers.length}</h2>}
        <section className="main-container">
            {filteredBeers.map((beer, index) => <BeerCard key={index} beer={beer} setSelectedBeer={setSelectedBeer}/>)}
        </section>
    </>
}

export default Main

