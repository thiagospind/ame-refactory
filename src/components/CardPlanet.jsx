import React, {Component} from 'react'
import 'bootstrap/dist/css/bootstrap.css'
import '../css/starwars.css'
import '../index.css'

export default class CardPlanet extends Component {
    constructor(props){
        super(props)
        this.state = {
            planet: []
        }
    }
 render(){
    const planet = this.props.planet
     console.log(planet)
     return(
         <div>
             { planet.map(plan => (
                 <div key={plan.name}>
                     <div className="text-center mb-1 pb-1">
                         <p className="h1 title">Star Wars Planets</p>
                     </div>
                     <div className="card border-warning rounded">
                         <div className="card-header">
                             <p className="h3">{plan.name}</p>
                         </div>
                         <div className="card-body">
                             <h4 className="ui sub header">Population: {plan.population}</h4>
                             <h4 className="ui sub header">Climate: {plan.climate}</h4>
                             <h4 className="ui sub header">Terrain: {plan.terrain}</h4>
                             <h4 className="ui sub header">Featured in {plan.films.length} films</h4>
                         </div>
                     </div>
                 </div>
             ))}
         </div>
     )
 }

}