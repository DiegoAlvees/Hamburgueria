import { useState } from "react";
import Header from "./components/Header";
import Menu from "./components/Menu";
import { useEffect } from "react";


export default function App() {

  const [data, setData] = useState()

  useEffect(() => {
    fetch('/menu.json')
      .then((response) => response.json())
      .then((data) => {
        setData(data)
      })
  }, [])

  return (
<div className="">
  < Header />
  < Menu data={data}/>
</div>
  )
}