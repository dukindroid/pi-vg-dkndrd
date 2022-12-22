/* eslint-disable */
// const e = require('express')
const { Op } = require('sequelize')
/* eslint-disable */
const obj = {
  where: {
    someprop: { somevalue: '1' }
  }
}

const property1 = {
  value1: 'foo'
}

// const anotherProp = { property2: { value: 'bar' } }

// obj.where = property1

// console.dir({ 'Resultado:': obj, property1, anotherProp })
obj
obj.where =  {...obj,property1}   // ?
obj
console.dir({ 'Resultado:': obj })
1 + 1

const search = undefined
// const genres = // undefined //'Action'
const genres = 'Action'
const mensajito = 'holi!'

const resultado = (!search && !genres ) ? 'regresar' : 'todo bien'

resultado

let queryString = {}
// if (!search && !genres ) { return null}
// else
if(search)
  queryString = { where: { name: { [Op.iLike]: '%' + search + '%' } } }
if(genres)  
  queryString.where = { ...queryString.where,   genres: { [Op.contains]: [genres] } }
  queryString
  JSON.stringify(queryString)

  const list_ =[['35_2_20.png'],
        ['35_2_18.png'],
        ['35_2_9.png'],
        ['35_2_11.png'],
        ['35_2_7.png'],
        ['35_2_16.png'],
        ['35_2_6.png'],
        ['35_2_17.png'],
        ['35_2_1.png'],
        ['35_2_10.png'],
        ['35_2_19.png'],
        ['35_2_8.png'],
        ['35_2_4.png'],
        ['35_2_15.png'],
        ['35_2_3.png'],
        ['35_2_12.png'],
        ['35_2_2.png'],
        ['35_2_13.png'],
        ['35_2_5.png'],
        ['35_2_14.png']]

const newList = list_.flat().map(el => parseInt(el.split('_').at(2).split('.').at(0)))
const list = list_.flat()
let result = [19]
let order = 0
for (const index of newList) {
  result[index] = [list[order]]
  order++
}
result
newList.forEach(el => {result[el] = list_})
// result = newList.map((el,index) => list_[el] )
result
// list_.flat().map((el) => )
// .forEach(el => {result[el] = }) 
list_.ap
list_
const mascosas = list_.flat().map((el,index) =>   {
  const obj = {
    [newList[index]] : el
  }
  return obj 
} ).flat()
Object.values(list_)
const arreglo = []
for(const [key, value] of Object.entries(mascosas)){
  key
  value
}
arreglo
const sinobj = mascosas.keys().toString()
JSON.stringify(sinobj)
mascosas[0].getOwnPropertyNames()
mascosas
const cosas = mascosas.sort((a, b) => a - b)
const llaves = cosas.keys
llaves
cosas