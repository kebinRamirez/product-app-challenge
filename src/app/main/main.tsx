import React, {useEffect} from 'react'
//@ts-ignore
import { useSelector } from 'react-redux';
import { platosList } from './mainSlice';
import ListComponent from './components/ListComponent';


const Main: React.FC = () => {
    const platos = useSelector(platosList);

    useEffect(() => {
        console.log("estos son los platos")
        console.log(platos)
    }, [platos])

    return (
        <div>
            <h1>Platos</h1>
            <div className='contenedor'>
                <ListComponent platos={platos} />
            </div>
            

        </div>
    )
}

export default Main