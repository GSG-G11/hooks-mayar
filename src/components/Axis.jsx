import { useEffect } from 'react';
import { useState } from 'react';

function Axis() {
    const [x, setX] = useState(0);
    const [y, setY] = useState(0);
    const setAxis = () => {
        setX(window.event.clientX);
        setY(window.event.clientY);
        if( window.event.clientX > window.innerWidth/2){
            (document.body.style.background = 'tomato ')
        }else{
            (document.body.style.background = 'blue ')
        }
    };
    useEffect(() => {
        window.addEventListener('mousedown', setAxis);
        return () => {
        window.removeEventListener('mousedown', setAxis);
        };
    }, []);
    return (
        <div>
        I'm now on x:{x} and y:{y}
        </div>
    );
}
export default Axis;
