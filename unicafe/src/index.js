import React from 'react'
import ReactDOM from 'react-dom'
import Button from './components/Button'
import Statistics from './components/Statistics'

class App extends React.Component {
    constructor() {
        super()
        this.state = {
            hyva: 0,
            neutraali: 0,
            huono: 0
        }
    }

    /*
    asetaHyva = () => {
        return () => {
            this.setState({ })
        }
    }
    
    asetaNeutraali = () => {
        return () => {
            this.setState({ neutraali: this.state.neutraali + 1})
        }
    }

    asetaHuono = () => {
        return () => {
            this.setState({ huono: this.state.huono + 1})

        }
    }
    */

    asetaPalaute = (palaute) => {
        return () => {

            if(palaute === 'hyva'){
                this.setState({hyva: this.state.hyva + 1})
            }
            if(palaute === 'neutraali'){
                this.setState({neutraali: this.state.neutraali + 1})
            }
            if(palaute === 'huono'){
                this.setState({huono: this.state.huono + 1})
            }
        }
    }
    

    render() {
        
        return (
            <div>
                <div>
                <h1>anna palautetta</h1>
                <Button handleClick={this.asetaPalaute('hyva')} text={'hyvä'} />
                <Button handleClick={this.asetaPalaute('neutraali')} text={'neutraali'} />
                <Button handleClick={this.asetaPalaute('huono')} text={'huono'} />
                </div>
                
                <Statistics hyva={this.state.hyva} neutraali={this.state.neutraali} huono={this.state.huono} />
            </div>
        )
    }
   
}

ReactDOM.render(<App />, document.getElementById('root'));
