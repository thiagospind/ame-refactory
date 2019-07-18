import React, { Component } from 'react'
import Axios from "axios";
import CardPlaneta from './CardPlaneta'
import LoadSpinner from './LoadingSpinner'
import 'bootstrap/dist/css/bootstrap.css'
import '../css/starwars.css'
import '../index.css'
import Button from './Button'

export default class Planeta extends Component{
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
            this.cardPlanet();
        })
    }

    previous = () => {
        if(this.state.selectedIndex === 0)
            return;

        this.setState(prevState => ({
            selectedIndex: prevState.selectedIndex - 1
        }))
    }

    // iteratePlanet = (operation) => {
    //     if(operation === 'next') {
    //         let id = this.state.idPlanet + 1
    //         if (id > this.state.numPlanets) {
    //             id = 1
    //             this.setState({idPlanet: 1}, function () {
    //                 console.log(this.state.idPlanet)
    //             })
    //         } else {
    //             this.setState(prevState => ({idPlanet: prevState.idPlanet + 1}),function () {
    //                 console.log(`callback: ${this.state.idPlanet}`)
    //             })
    //         }
    //         this.getPlanet(id)
    //     } else if (operation === 'previous') {
    //         let id = this.state.idPlanet - 1
    //         console.log(`id: ${id}`)
    //         if (id < 1) {
    //             id = this.state.numPlanets
    //             this.setState({idPlanet: id})
    //         } else {
    //             this.setState(prevState => ({idPlanet: prevState.idPlanet - 1}), function () {
    //                 console.log(this.state.idPlanet)
    //             })
    //         }
    //         console.log(`idPlanet: ${this.state.idPlanet}`)
    //         this.getPlanet(id)
    //     }
    //     console.log(`idPlanet: ${this.state.idPlanet}`)
    // }

    cardPlanet = () => {
         var plan = this.state.planets.filter((result, index, arr) => {
             return arr.indexOf(result) === this.state.selectedIndex
         })
        this.setState({planet: plan})
        console.log(this.state.selectedIndex)
        console.log(this.state.planet)
    }

    checkLoading = () => {
        const {planet} = this.state
        if (this.state.loading === true) {
            return <LoadSpinner/>
        } else {
            return <div><CardPlaneta planet={planet}/><Button next={this.next}/></div>
        }
    }

    render(){

        console.log(this.state.loading)
        return(
            <div>
                {this.checkLoading()}
            </div>
        )
    }
}