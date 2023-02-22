import React, { useRef } from 'react';

const Cuadrado = () => {

    const estilo_cuadrado = {
        backgroundColor: 'black',
        height: '255px',
        width: '255px'
    }

    const cuadradoRef = useRef(null);
    var timerID = null;

    function cambiarColor(){
        timerID = setInterval(() => {
            const red = Math.floor(Math.random() * (255 - 1) + 1);
                const green = Math.floor(Math.random() * (255 - 1) + 1);
                const blue = Math.floor(Math.random() * (255 - 1) + 1);

                cuadradoRef.current.style.background = `rgb(${red},${green},${blue})`;
        }, 50);
    }

    function detenerCambio(){
        clearInterval(timerID);
    }

    return (
        <div>
            <div className='cuadrado' style={estilo_cuadrado} onMouseEnter={cambiarColor} onMouseOut={detenerCambio} onDoubleClickCapture={detenerCambio} ref={cuadradoRef}></div>
        </div>
    );
}

export default Cuadrado;
