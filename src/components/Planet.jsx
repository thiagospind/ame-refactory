import React, { Component } from 'react'
import Axios from "axios";
import CardPlanet from './CardPlanet'
import Button from './Button'
import LoadSpinner from './LoadingSpinner'
import 'bootstrap/dist/css/bootstrap.css'
import '../css/starwars.css'
import '../index.css'

export default class Planet extends Component{
    constructor(props){
        super(props)
        this.state = {
            planet: [],
            planets: [],
            numPlanets: 0,
            selectedIndex: 0,
            loading: true
        }
    }
    componentDidMount() {
        this.getPlanets()
        document.title = "May the force be with you"
    }

    getPlanets = async () => {
        try{
            var next = ''
            var url = 'https://swapi.co/api/planets/?page=1'
            var arrayPlanets = []
            this.setState({loading: true},function () {
                console.log(this.state.loading)
            })
            while (next != null) {
                var response = await Axios.get(url)
                next = response.data.next
                url = next
                for(let i = 0; i < response.data.results.length; i++){
                    arrayPlanets.push(response.data.results[i])
                }
            }
            this.setState({
                planets: arrayPlanets,
                numPlanets: response.data.count,
                loading: false
            },function () {
                console.log(this.state.loading)
            })
            this.cardPlanet()
        } catch (error) {
            console.log(error)
        }
    }

    next = () => {
        this.setState({selectedIndex: Math.floor(Math.random() * this.state.numPlanets)}, function () {
            this.cardPlanet()
        })
    }

    cardPlanet = () => {
         var plan = this.state.planets.filter((result, index, arr) => {
             return arr.indexOf(result) === this.state.selectedIndex
         })
        this.setState({planet: plan})
    }

    checkLoading = () => {
        const {planet} = this.state
        if (this.state.loading === true) {
            return <LoadSpinner/>
        } else {
            return <div><CardPlanet planet={planet}/><Button next={this.next}/></div>
        }
    }

    render(){
        return(
            <div>
                {this.checkLoading()}
            </div>
        )
    }
}