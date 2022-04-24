import React from 'react'
import "./SideBar.scss"

const SideBar = (props) => {
    const {beerArray, setBeers, showHighABV, setShowHighABV, showClassic, setShowClassic, showAcidity, setShowAcidity} = props

    const handleInput = (event) => {
        let filteredBeers = beerArray.filter(beer => {
            return beer.name.toUpperCase().includes(event.target.value.toUpperCase())
        })
        setBeers(filteredBeers)
    }

    return <>
        <section className="sidebar-container">
            <div className="options-heading">
                <h2>Search:</h2>
                <input type="text" onInput={handleInput}/>
            </div>
            <div className="options">
                <h3 className="options__label">High ABV > 6%</h3>
                <input className="options__input" type="checkbox" checked={showHighABV} onChange={() => setShowHighABV(!showHighABV)}/>
            </div>
            <div className="options">
                <h3 className="options__label">Classic Range</h3>
                <input className="options__input" type="checkbox" checked={showClassic} onChange={() => setShowClassic(!showClassic)}/>
            </div>
            <div className="options">
                <h3 className="options__label">Acidity PH 4</h3>
                <input className="options__input" type="checkbox" checked={showAcidity} onChange={() => setShowAcidity(!showAcidity)}/>
            </div>
        </section>
    </>
}

export default SideBar