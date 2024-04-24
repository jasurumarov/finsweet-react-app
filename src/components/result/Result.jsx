import React from 'react'

const Result = () => {
    const data = [
        {
            id: 1,
            age: "15+",
            title: "Awards received"
        },
        {
            id: 2,
            age: "500+",
            title: "Clients served"
        },
        {
            id: 3,
            age: "34",
            title: "Employees"
        },
        {
            id: 4,
            age: "130+",
            title: "Custom solutions"
        },
    ]

    let cards = data?.map(el => (
        <div key={el.id} className="results-section__card">
            <h2>{el.age}</h2>
            <h3>{el.title}</h3>
            <p>Lorem ipsum dolor sit amet, <br /> consectetur adipiscin. Curabitur <br /> sit amet eros elit et.</p>
        </div>
    ))
  return (
    <div className='results-section'>
        <div className="container">
            <div className="results-section__content">
                <div className="results-section__title">
                    <h2>The energy of a start-up combined with 30 years of experience</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur sit amet eros blandit, hendrerit elit et, mattis purus. Vivamus commodo suscipit tellus et pellentesque.</p>
                </div>
                <div className="results-section__cards">
                    {cards}
                </div>
            </div>
        </div>
    </div>
  )
}

export default Result