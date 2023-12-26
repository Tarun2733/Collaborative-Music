import React, {Component} from "react";
import ReactDOM from "react-dom";
import Homepage from "./HomePage";
import RoomJoinPage from "./RoomJoinPage";
import CreateRoomPage from "./CreateRoomPage";


export default class App extends Component {
    constructor(props){
        super(props);
    }

    render(){
        return (<div>
        <Homepage />
        <RoomJoinPage />
        <CreateRoomPage />
        </div>
        );
    }
}

const appDiv = document.getElementById("app");
render (<App />, appDiv);