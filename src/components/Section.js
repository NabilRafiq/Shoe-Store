import React, { Component } from 'react'
import Products from './section/Products'
import Details from './section/Details'
import {Route} from "react-router-dom"
import Contact from './section/Contact'
import About from './section/About'


export class Section extends Component {
    render() {
        return (
            <section>
                    <Route path="/" component={Products} exact />
                    <Route path="/product" component={Products} exact  />
                    <Route path="/product/:id" component={Details} exact />
                    <Route path="/contact" component={Contact} exact/>
                    <Route path="/about" component={About} exact/>
            </section>
         )
    }
}

export default Section
