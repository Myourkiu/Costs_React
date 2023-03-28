import {useState, useEffect} from 'react'

import Input from "../form/Input";
import Select from "../form/Select";
import SubmitButton from "../form/SubmitButton";
import styles from "./ProjectForm.module.css";

function ProjectForm({btnText}) {

  const [categories, setCategories] = useState([])

  useEffect(() => {

    fetch('http://localhost:5000/categories', {
    method: "GET",
    headers: {
      'Content-Type': 'application/json'
    }
  })
  .then((resp) => resp.json()) //puxa a response da api e transforma em json
  .then((data) => {
    setCategories(data) //armazena os dados da response.json e joga pro setCategories
  })
  .catch(err => console.log(err))

  }, [])

  return (
    <form>
      <Input
        type="text"
        text="Nome do projeto"
        name="name"
        placeholder="Insira o nome do projeto"
      />
      <Input
        type="number"
        text="Orçamento do projeto"
        name="budget"
        placeholder="Insira o orçamento total"
      />

      <Select name='category_id' text='Selecione a categoria' options={categories}/>

      <SubmitButton text={btnText}/>
    </form>
  );
}

export default ProjectForm;
