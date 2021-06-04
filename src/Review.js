import { Reviews } from './Data';
import { useState, useEffect } from 'react';
import { AiOutlineArrowLeft, AiOutlineArrowRight } from 'react-icons/ai';
 
export default function Review() {
    const [index, setIndex] = useState(0);
    const {id, write, name} = Reviews[index]

    const checkNumber = (number) => {
        if(number > Reviews.length - 1){
            return 0;
        }
        if(number < 0){
            return Reviews.length - 1;
        }
        return number;
    }
    const nextPerson = (index) => {
        setIndex((index) => {
            let newIndex = index + 1;
            return checkNumber(newIndex);
        })
    }

    const prevPerson = (index) => {
        setIndex((index) => {
            let newIndex = index - 1;
            return checkNumber(newIndex);
        })
    }



    return (
        <div className="review">
            <h1>What our Customers say...</h1>
            <img src="./img/stars.png" alt="" />
            <button onClick={prevPerson} className='prev btn'><AiOutlineArrowLeft/></button>
                <p>{write}</p>
                <h2>{name}</h2>
            <button onClick={nextPerson} className='next btn'><AiOutlineArrowRight/></button>
        </div>       
    )
}
