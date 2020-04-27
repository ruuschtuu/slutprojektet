import React, { Component } from "react";
class Form extends Component {

    constructor(props) {
        super(props);

        //initillerat state
        this.state = {
            name: undefined,
            appointmentTime: undefined,
            mobile: undefined
        }


    }

    //spara state i localStorage
    // this and arrow function


    handleOnChangeName = (e) => {
        this.setState({ name: e.target.value })

    }
    handleOnChangeTime = (e) => {
        this.setState({ appointmentTime: e.target.value })
    }
    handleOnChangeMobile = (e) => {
        this.setState({ mobile: e.target.value })
    }



    //skapa en metod 
    handleOnSubmit(e) {
        e.preventDefault()


        //this.setState({})
    }
    // uppdatera state med setState()


    //form kommer att anropa metoden med hjälp av event 


    render() {
        return (
            <div className={"formular"}>
                <form onSubmit={this.handleOnSubmit}>
                    <input type={"text"} placeholder={"Namn"} onChange={this.handleOnChangeName}></input>
                    <input type={"text"} placeholder={"Ange datum"} onChange={this.handleOnChangeTime}></input>
                    <input type={"number"} placeholder={"Telefon nummer"} onChange={this.handleOnChangeMobile}></input><br />
                    <li>
                        <label id={"label"}>Välj Tjänst</label> <br />
                        <select name={"field4"} class={"field-select"}>
                            <option value={"Advertise"}>Massage</option>
                            <option value={"Partnership"}>Pedikyr</option>
                            <option value={"General Question"}>Övrigt</option>
                        </select>
                    </li>
                    <textarea placeholder={"Extra beskrivning"} onChange={this.handleOnChangeMobile}></textarea><br />
                    <button className={"btn3"} type={"submit"} onSubmit={this.handleOnSubmit}>Bekräfta</button>
                </form>

                <div>  {this.state.name}</div>
                <div>  {this.state.appointmentTime}</div>
                <div>  {this.state.mobile}</div>
            </div>
        )
    }

}

export default Form;
