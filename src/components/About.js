import UserClass from "./UserClass"
import React from 'react';


class About extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            count: 0
        }
        console.log("Parent Constructor")
    }

    componentDidMount() {
        console.log("Parent componentDidMount")
    }

  

render() {
  console.log("Parent Render")

  return (
    <div className = "border p-3 m-3">
      <h1>About Class Component</h1>
      <UserClass name ="upendra"  location = "Metpally"  contact = "upendragmail.com"/>
      
      
    </div>
    
  )
}

}

export default About