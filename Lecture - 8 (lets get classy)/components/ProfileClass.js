import React from "react";
class ProfileClass extends React.Component{
    
    constructor(props){
        super(props);

        this.state = {
            userInfo: {
                name: 'Dummy name',
                bio: 'Dummy bio',
            }
        }
        
    }
    async componentDidMount(){
        // Api call
        console.log('component did mount');
        const data = await fetch('https://api.github.com/users/utkarshgupta04092003');
        const json = await data.json();
        this.setState({
            userInfo: json,
        })
        console.log('data',json);
    }
    render(){

        const {count} = this.state;
        return(
            <div>
                
                <h2>Profile class based component: {this.props.name}</h2>
                <p>Count: {count}</p>
                <button type="" onClick={()=>{
                    this.setState({
                        count: 1,
                    })
                }}>Click </button>
                <br/>
                working

                <p>{this.state.userInfo.name}</p>
                <p>{this.state.userInfo.bio}</p>
            </div>
        )
    }
}

export default ProfileClass;