import React, { Component } from 'react'
import Axios from "axios";
// import CardPlaneta from './CardPlaneta'

export default class Planeta extends Component{
    constructor(props){
        super(props)
        this.state = {
            // data: [],
            planet: '',
            planets: [],
            // films: [],
            idPlanet: 0,
            // numPlanets: 0,
            // range: []
            next: '',
            previous: '',
            selectedIndex: 0
        }
    }
    componentDidMount() {
        // this.getCountPanets()
        // this.getPlanet(1)
        this.getPlanets()
        document.title = "May the force be with you"
    }

    // getCountPanets = async props => {
    //     try {
    //         const response = await Axios.get(props || 'https://swapi.co/api/planets/')
    //         this.setState({ numPlanets: response.data.count })
    //     } catch (error) {
    //         console.log(error)
    //     }
    // }

    // getPlanet = async (id) => {
    //     try{
    //         const response = await Axios.get(`https://swapi.co/api/planets/${id}`)
    //         this.setState({ planet: response.data })
    //         this.setState({ films: response.data.films })
    //     } catch (error) {
    //         console.log(error)
    //     }
    // }

    getPlanets = async () => {
        try{
            const response = await Axios.get('https://swapi.co/api/planets/?page=1')
            this.setState({
                planets: response.data.results,
                next: response.data.next,
                previous: response.data.previous,
                selectedIndex: 0
            })
            console.log(this.state.planets)
            this.cardPlanet()
        } catch (error) {
            console.log(error)
        }
    }

    next = () => {
        if(this.state.selectedIndex === this.state.planets.length - 1)
            return;

        this.setState(prevState => ({
            selectedIndex: prevState.selectedIndex + 1
        }))
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
         var planeta = this.state.planets.filter((result, index, arr) => {
             return arr.indexOf(result) === this.state.selectedIndex
         })
        this.setState({planet: planeta})
    }

    render(){

        const planeta = this.state
        //const selectedIndex = this.state.selectedIndex
        // this.state.planets.map((plan,index) =>{
        //     console.log(plan)
        //     console.log(index)
        // })
        console.log(planeta.planets.results.name)
        return(
            <div>
                {/*<div className="ui hidden divider"/>*/}
                {/*<div className="ui centered card">*/}
                {/*    <div className="content">*/}
                {/*        <div className="header center aligned">{planeta.name}</div>*/}
                {/*    </div>*/}
                {/*    <div className="content">*/}
                {/*        <h4 className="ui sub header">Population: {planeta.population}</h4>*/}
                {/*        <h4 className="ui sub header">Climate: {planeta.climate}</h4>*/}
                {/*        <h4 className="ui sub header">Terrain: {planeta.terrain}</h4>*/}
                {/*        /!*<h4 className="ui sub header">Featured in {films} films</h4>*!/*/}
                {/*    </div>*/}

                {/*    <div className="extra content">*/}
                {/*        <div className="ui center aligned container">*/}

                {/*            <button className="ui left labeled icon button" onClick={(e) => this.iteratePlanet('previous')}>*/}
                {/*                <i className="left arrow icon"/>*/}
                {/*                Previous*/}
                {/*            </button>*/}
                {/*            <button className="ui right labeled icon button" onClick={(e) => this.iteratePlanet('next')}>*/}
                {/*                <i className="right arrow icon"/>*/}
                {/*                Next*/}
                {/*            </button>*/}
                {/*        </div>*/}
                {/*    </div>*/}
                {/*</div>*/}
            </div>
        )
    }
}