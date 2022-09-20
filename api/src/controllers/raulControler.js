router.get("/dogs", async (req,res) => {
  const name = req.query.name
  let dogsTotal = await getAllDogs()
  if(name){
  const dogName = await dogsTotal.filter(n => n.name.toLowerCase().includes(name.toLowerCase()))
  dogName.length ?
  res.status(200).send(dogName) :
  res.status(404).send(`Lo sentimos, ${name}, no se encontro.`)
  } else {
   res.status(200).send(dogsTotal)
  }
});