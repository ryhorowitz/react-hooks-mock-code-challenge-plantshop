import React, {useState, useEffect} from "react";
import NewPlantForm from "./NewPlantForm";
import PlantList from "./PlantList";
import Search from "./Search";

function PlantPage() {
  const [plants, setPlants] = useState([])
  const [search, setSearch] = useState('')
  useEffect( () => {
    fetch(`http://localhost:6001/plants`)
    .then(r => r.json())
    .then(plants => setPlants(plants))
    .catch(err => console.error('ERROR', err))
  }, [])

  let displayedPlants = plants.filter( plant => {
    //plant does equal what in search bar
    return plant.name.includes(search)
  })

  function handleAddPlant(form) {
    //copy form with added id
    // console.log('form', form)
    const body = { ...form }
    body.price = Number(body.price)
    // console.log('body', body)
    fetch(`http://localhost:6001/plants`, {
      method: 'POST',
      headers: {"Content-Type": "application/json"},
      body: JSON.stringify(body)
    })
    .then(r => r.json())
    .then(newPlant => {
      setPlants( [ ...plants, newPlant ])
    })
    .catch(err => console.error('ERROR', err))
  }
  return (
    <main>
      <NewPlantForm onAddPlant={handleAddPlant}/>
      <Search onSearch={setSearch}/>
      <PlantList plants={displayedPlants}/>
    </main>
  );
}

export default PlantPage;
