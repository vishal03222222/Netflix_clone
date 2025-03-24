import React, { useEffect, useRef } from 'react'
import './Titlecards.css'
import cards_data from '../../../assets/cards/Cards_data'

const Titlecards = ({title, category}) => {
  const cardsRef = useRef();

  const options = {
    method: 'GET',
    headers: {
        accept: 'application/json',
        Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI1ZTNlNzczZDI2YW2Y2NhNMQ4YWJmMjQzNTdlNDc1ZCI5InN1YiI6IjY2MjY1MDHfyWuUzODQzMDBdA2NHJtJMiIsInNjb3BlIjoiI6dyJhcGltfcmVtXCJdLCJ2ZXJzaW9uIjoxfQ.vPDW2QwNr9hIRd0vJx_x8hbnHDYzGHMtnZwfkqb38U'
    }
};

fetch('https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1', options)
    .then(response => response.json())
    .then(response => response.json())
.catch(err => console.error(err))


const handleWheel = (event) => {
    event.preventDefault();
    cardsRef.current.scrollLeft += event.deltaY;
}

useEffect(() => {

    fetch('https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1', options)
    .then(response => response.json())
    .then(response => response.json())
.catch(err => console.error(err))

    cardsRef.current.addEventListener('wheel', handleWheel);
}, [])

  return (
    <div className='titlecards'>
        <h2>{title ? title : "Popular on Netflix"}</h2>
        <div className='card-list' ref={cardsRef}>
            {cards_data.map((card, index)=>{
                return <div className="card" key={index}>
                    <img src={card.image} alt="" />
                    <p>{card.name}</p>
                </div>
            })}
        </div>
    </div>
);
}

export default Titlecards
