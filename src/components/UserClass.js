import React from 'react';

class UserClass extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            count: 0
        }
        console.log("Child Constructor")
    }

    componentDidMount() {
        console.log("Child componentDidMount")
    }

    render() {
        const {name, location, contact} = this.props
        const { count} = this.state;
        console.log("Child Render")
         return (
            <div>
                <h1>Count : {count}</h1>
                <button onClick= { () => { this.setState({count : this.state.count + 1}); }}>count Increment</button>
                <h1>User Details</h1>
                <h2>Name: {name}</h2>
                <h2>Location: {location}</h2>
                <h2>Contact: {contact}</h2>
            </div>
        )
    }
} 

export default UserClass