import React from "react";

class UserClass extends React.Component {

    constructor(props){
        super(props);
        this.state = {
            count : 0,
            count2: 1,
            userInfo : {
                name:"Dummy",
                location:"Deafault",
                avatar_url:"url",
            }
        }
    }


    async componentDidMount(){
        // best place to make API calls
        const data = await fetch("https://api.github.com/users/akshaymarch7");
        const json = await data.json();
        this.setState(
            {
                userInfo:json,
            }
        );
        setInterval(()=>{
            console.log("Interval calling from class");
            
        },1000);
        // console.log(json);
        console.log("componentDidMount - UserClass");
    }

    componentDidUpdate(prevProps, prevState){
        
        if(this.state.count !== prevState.count){
            //code
        }

        if(this.state.count2 !== prevState.count2){
            // code
        }
        console.log("component did update ");
        
    
    }
    componentWillUnmount(){
        clearInterval(this.timer);
        console.log("unmounting");
        
    }
    render(){
        
        // const{user,location1} = this.props;
        const  {count} = this.state;
        console.log(this.state.userInfo);
        const { name , location , avatar_url } = this.state.userInfo;
        // console.log(userInfo);
        // debugger;
        return(
            <div className="user-card">
                {console.log("call")}
                <h1>User Component - Class</h1>
                <img src={avatar_url}/>
                <h2>Name: {name}</h2>
                <h3>Location: {location}</h3>
                <h4>Contact: </h4>
                <h4>Count : {this.state.count} </h4>
                <button onClick={() => {
                    this.setState({
                        count : this.state.count + 1,
                        count2 : this.state.count2 + 1
                    }

                    );
                }}>Increment Count and Count2</button>

                <h4>Count 2 : {this.state.count2} </h4>
                <button onClick={() => {
                    this.setState({
                        count2 : this.state.count2 + 1
                    });
                }}>Increment Count2</button>
            </div>
        )
    }
}

export default UserClass;