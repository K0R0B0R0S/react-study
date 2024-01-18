import styles from "./Tabela.module.css"

const Tabela = ({imc}) => {

    return (
        <>
            <table className={styles.tabela}>
                <thead>
                    <tr>
                        <th>IMC</th>
                        <th>Classificação</th>
                    </tr>
                </thead>
                <tbody>
                    <tr className={imc < 18.5 ? styles.marked : ""}>
                        <td>Menor do que 18,5</td>
                        <td>Abaixo do peso normal</td>
                    </tr>
                    <tr className={imc >= 18.5 && imc < 24.9 ? styles.marked : ""}>
                        <td>18,5 - 24,9</td>
                        <td>Peso normal</td>
                    </tr>
                    <tr className={imc >= 25.0 && imc < 29.9 ? styles.marked : ""}>
                        <td>25,0 - 29,9</td>
                        <td>Excesso de peso</td>
                    </tr>
                    <tr className={imc >= 30.0 && imc < 34.9 ? styles.marked : ""}>
                        <td>30,0 - 34,9</td>
                        <td>Obesidade classe I</td>
                    </tr>
                    <tr className={imc >= 35.0 && imc < 39.9 ? styles.marked : ""}>
                        <td>35,0 - 39,9</td>
                        <td>Obesidade classe II</td>
                    </tr>
                    <tr className={imc >= 40.0 ? styles.marked : ""}>
                        <td>Maior ou igual a 40,0</td>
                        <td>Obesidade classe III</td>
                    </tr>
                </tbody>
            </table>
        </>
    )
}

export default Tabela;