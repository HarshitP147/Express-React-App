import React from "react";

class Form extends React.Component {
    constructor() {
        super();

        // handling states with the form 
        this.state = {
            fName: '',
            lName: '',
            isPerson: ''
        }

        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(e) {
        const name = e.target.name;
        this.setState({
            [name]: e.target.value
        })
    }

    handleSubmit(e) {
        console.clear();
        fetch("/form", {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                'fName': this.state.fName,
                'lName': this.state.lName
            })
        })
            .then(res => res.text())
            .then(data => {
                // after data has been sent we will recieve backend infomation status
                console.log(data);
                this.setState({
                    isPerson: data,
                })
            });
        e.preventDefault();
    }

    checkUser() {
        console.log(this.state.isPerson);
        if (this.state.isPerson === "empty") {
            return <span>Enter your first Name!!</span>
        }
        if (this.state.isPerson === "yes") {
            return <span>Good</span>
        }
        if (this.state.isPerson === "no") {
            return <span>Wrong Person</span>
        }
    };

    render() {
        return (
            <form method="POST" className="needs-validation" onSubmit={this.handleSubmit} noValidate>
                <label >
                    First Name
                    <input type="text" onChange={this.handleChange} name="fName" value={this.state.fName} required />
                </label>
                <br />
                <label >
                    Last Name
                    <input type="text" onChange={this.handleChange} name="lName" value={this.state.lName} />
                </label>
                <br />
                <button type="submit" className="btn btn-primary">Submit Name</button>
                <br />
                {this.checkUser()}
            </form>

        )
    }
};
export default Form;