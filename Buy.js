import React, {Component} from 'react';

class Buy extends Component {
    constructor(props){
        super(props)
        this.state = {
            username: '',
            comments: '',
            cake: 'Vanilla Cake with Sprinkles',
            bread: 'Whole-Wheat Bread'
        }
    }
    handleUsernameChange = (event) => {
        this.setState({
            username: event.target.value
        })

    }
    handleCommentsChange = (event) => {
        this.setState({
            comments: event.target.value
        })
    }
    handleCakeChange = (event) => {
        this.setState({
            cake: event.target.value
        })
    }
    handleBreadChange = (event) => {
        this.setState({
            bread: event.target.value
        })
    }
    handleSubmit = (event) => {
        alert(`${this.state.username} ${this.state.comments} ${this.state.cake} ${this.state.bread}` )
        event.preventDefault()
    }
    render () {
       
        return(
            <form onSubmit={this.handleSubmit}>
                <div>
                    <label>Customer Name:</label>
                    <input type="text" value={this.state.username}  onChange={this.handleUsernameChange}/>
                </div>
                <div>
                    <label>Comments:</label>
                    <textarea value={this.state.comments} onChange={this.handleCommentsChange}></textarea>
                </div> 
                <div>
                    <label>Cake:</label>
                    <select value={this.state.cake} onChange={this.handleCakeChange}>
                        <option value="Vanilla Cake with Sprinkles">1. Vanilla Cake with Sprinkles</option>
                        <option value="Vanilla and Strawberry Cake">2. Vanilla and Strawberry Cake</option>
                        <option value="Strawberry Cake with Sprinkles">3. Strawberry Cake with Sprinkles  </option>
                        <option value="Cookies and Cream Cake">4. Cookies and Cream Cake</option>
                        <option value="American Cake">5. American Cake</option>
                        <option value="Choco Cake">6. Choco Cake</option>
                    </select>
                </div>
                <div>
                    
                </div>
                <div>
                </div>
                <div>
              
       <img src={process.env.PUBLIC_URL + "/ca.jpg"}
      alt="Myhome" width="200px" />
       <img src={process.env.PUBLIC_URL + "/cak.jpg"}
      alt="Myhome" width="200px"/>
       <img src={process.env.PUBLIC_URL + "/cake.jpg"}
      alt="Myhome" width="200px " height="200px" />
       <img src={process.env.PUBLIC_URL + "/cakes.jpg"}
      alt="Myhome" width="200px" height="200px"/>
       <img src={process.env.PUBLIC_URL + "/cakess.jpg"}
      alt="Myhome" width="200px" height="200px"/>
       <img src={process.env.PUBLIC_URL + "/cakesss.jpg"}
      alt="Myhome" width="200px" height="200px"/>
       
                </div>
                <div>
                    <label>Bread:</label>
                    <select value={this.state.bread} onChange={this.handleBreadChange}>
                        <option value="Whole-Wheat Bread">1. Whole-Wheat Bread</option>
                        <option value="White Bread">2. White Bread</option>
                        <option value="Multi-Grain Bread">3. Multi-Grain Bread </option>
                        <option value="Brown Bread">4. Brown Bread</option>
                        <option value="Roti">5. Roti</option>
                        <option value="Rye Bread">6. Rye Bread</option>
                    </select>
                </div>
                <div>
                <img src={process.env.PUBLIC_URL + "/b.jpg"}
      alt="Myhome" width="200px"height="200px"/>
      <img src={process.env.PUBLIC_URL + "/br.jpg"}
      alt="Myhome" width="200px"height="200px"/>
      <img src={process.env.PUBLIC_URL + "/bre.jpg"}
      alt="Myhome" width="200px"height="200px"/>
      <img src={process.env.PUBLIC_URL + "/brea.jpg"}
      alt="Myhome" width="200px"height="200px"/>
      <img src={process.env.PUBLIC_URL + "/breads.jpg"}
      alt="Myhome" width="200px"height="200px"/>
      <img src={process.env.PUBLIC_URL + "/breadss.jpg"}
      alt="Myhome" width="200px"height="200px"/>
                </div>
                
                <button type="submit"> ORDER </button>
                
            </form>

        )
    }
}
export default Buy