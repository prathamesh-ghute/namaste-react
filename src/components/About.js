import UserContext from "../utils/UserContext";
import User from "./User";
import UserClass from "./userClass";
import React from "react";
// const About = () =>{


//     return(
//         <div>
//             <h1>About Page</h1>
//             <h2>This is Namaste React Web Series</h2>
//             <User user="Prathamesh (funtional)"/>
//             <UserClass  user="Prathamesh (class)" location1="Pune (class)" />
//         </div>
//     )
// }


class About extends React.Component{
    constructor(props){
        super(props);
    }

    componentDidMount() {

    }
    render() {

        return(
        <div>
            <h1>About Class Component</h1>
            <div>
                LoggedIn User
                <UserContext.Consumer>
                    { ({loggedInUser}) => <h1><b>{loggedInUser}</b></h1>}
                </UserContext.Consumer>
            </div>
            <h2>This is Namaste React Web Series</h2>
            <User user="Prathamesh (funtional)"/>
            <UserClass name={"First"} location={"Dehradun Class"} />

        </div>
        );
    }
}

export default About;