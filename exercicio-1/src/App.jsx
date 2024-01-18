import { useState } from "react"
import Formulario from "./components/Formulario"
import Tabela from "./components/Tabela"


function App() {
  const [imc, setImc] = useState()

  const handleImcChange = (value) => {
    setImc(value)
  }

  return (
    <>
      <div className="container">
        <Formulario submitHandler={handleImcChange} />
        {isNaN(imc) && imc!=0 ? "" : <div>Seu IMC é de {imc}</div>}
      </div>
      <div className="container">
        <Tabela imc={imc}/>
      </div>
    </>
  )
}

export default App
