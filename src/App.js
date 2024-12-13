import { useEffect, useState } from 'react'
import './App.css'
import axios from 'axios'

const baseUrl = 'https://node-backend-cicd.onrender.com'

function App() {

  const [userName, setUserName] = useState('')

  useEffect(() => {
    getNames()
  }, [])

  const getNames = async () => {
    const response = await axios.get(`${baseUrl}/names`)
    setUserName(response.data.name)
  }

  return (
    <div >
      <h1>My Website</h1>
      <h3>My name is { userName } </h3>
      <p>URL: { process.env.VITE_APP_URL } </p>
    <p>META: { import.meta.env } </p>
    </div>
  );
}

export default App;
