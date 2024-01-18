import { useState } from 'react'
import styles from './Formulario.module.css'

const Formulario = ({submitHandler}) => {

    const [peso, setPeso] = useState(0);
    const [altura, setAltura] = useState(0);

    function imcCalc(peso, altura) {
        return peso / altura**2
    }

    function submit(e){
        e.preventDefault();
        const imc = imcCalc(peso, altura);
        submitHandler(imc)
    }

    return (
        <>
        <form className={styles.formulario} action="">
            <div className={styles.fomularioItem}>
                <b>Calculadora de IMC</b>
            </div>
            <div className={styles.fomularioItem}>
                <p>Peso</p>
                <input className={styles.fomularioField} type='number' step="0.01" onChange={(e) => {setPeso(parseFloat(e.target.value))}}/>
            </div>
            <div className={styles.fomularioItem}>
                <p>Altura</p>
                <input className={styles.fomularioField} type='number' step="0.01" onChange={(e) => {setAltura(parseFloat(e.target.value))}}/>
            </div>
            <div className={styles.fomularioItem}>
                <button className={styles.fomularioButton} type='submit' onClick={(e) => submit(e)}>Calcular</button>
            </div>
        </form>
        </>
    )
}

export default Formulario;