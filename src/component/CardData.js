import React from 'react'

export default function CardData() {

    const Cardlist = [
        {
            id: 1,
            title: "Ruby",
            description: "Ruby is a precious gemstone known for its deep red color.",
            image: "https://images.unsplash.com/photo-1712666410511-4e84e3db6457?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw0fHx8ZW58MHx8fHx8"
        },
        {
            id: 2,
            title: "Sapphire",
            description: "Sapphire is a gemstone known for its rich blue color.",
            image: "https://images.unsplash.com/photo-1712346226699-e415ad57e22f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxNXx8fGVufDB8fHx8fA%3D%3D"
        },
        {
            id: 3,
            title: "Emerald",
            description: "Emerald is a green gemstone prized for its color and rarity.",
            image: "https://images.unsplash.com/photo-1710170601723-54d0420b8773?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxNHx8fGVufDB8fHx8fA%3D%3D"
        }
    ]
    return (
        <div>
            {Cardlist.map((card) => {
                return <div className="card w-25" key={card.id}>
                    <img src={card.image} className="card-img-top" alt="..."/>
                        <div className="card-body">
                            <h5 className="card-title">Card title</h5>
                            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                            <a href="#" className="btn btn-primary">Go somewhere</a>
                        </div>
                </div>

            }
            )}  
        </div>
    )
}