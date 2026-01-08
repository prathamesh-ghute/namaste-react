import User from "./User";
import UserClass from "./userClass";
const About = () =>{


    return(
        <div>
            <h1>About Page</h1>
            <h2>This is Namaste React Web Series</h2>
            <User user="Prathamesh (funtional)"/>
            <UserClass  user="Prathamesh (class)" location1="Pune (class)" />
        </div>
    )
}

export default About;