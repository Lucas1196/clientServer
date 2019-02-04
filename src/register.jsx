class RegisterForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: '',
            username:'',
            errors: [],
            pwdState: null,
        };
        //Bind the function
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    handleChange (evt) {
        //SetState input name to e.target.value
        this.setState({ 
            pwdState: "weak"
        });
        this.setState({ 
            [evt.target.name]: evt.target.value
        });
        if (evt.target.value.length > 4) {
            this.setState({ 
                pwdState: "medium"
            });
        }
        if (evt.target.value.length > 7) {
            this.setState({ 
                pwdState: "strong"
            });
        }
        //Delete the message saying Input cannot be empty
        this.clearValidationErr([evt.target.name]);
    }
    handleSubmit(event) {
        event.preventDefault();
        //On submit check if Email is empty and show error if is true
        if ( this.state.email == "" ) {
            this.showValidationErr("email", "Email cannot be empty!");
        }
        //On submit check if Password is empty and show error if is true
        if ( this.state.password == "" ) {
            this.showValidationErr("password", "Password cannot be empty!");
        }
        //On submit check if Username is empty and show error if is true
        if ( this.state.username == "" ) {
            this.showValidationErr("username", "Username cannot be empty!");
        }
    }
    showValidationErr(elm, msg) {
        //Validation Error(showERROR)
        this.setState((prevState) => ({ 
            errors: [...prevState.errors, { elm, msg } ] 
        }));
    }
    clearValidationErr(elm) {
        //Function which clear validation error message
        this.setState((prevState) => { 
            let newArr = [];
            for(let err of prevState.errors) {
                if (elm != err.elm) {
                    newArr.push(err);
                }
            }
            return {errors: newArr};
        });
    }
    render() {
        //Show status for error message like null
        let emailErr = null, passwordErr = null, usernameErr = null;
        for(let err of this.state.errors) {
            if (err.elm == "email") {
                emailErr = err.msg;
            }
            else if (err.elm =="password") {
                passwordErr = err.msg;
            }
            else if (err.elm =="username") {
                usernameErr = err.msg;
            }
        }
        let pwdWeak = false, pwdMedium = false, pwdStrong = false;
            if (this.state.pwdState == "weak") {
                pwdWeak = true;
            }
            else if (this.state.pwdState == "medium") {
                pwdWeak = true;
                pwdMedium = true;
            }
            else if (this.state.pwdState == "strong") {
                pwdWeak = true;
                pwdMedium = true;
                pwdStrong  = true;
            }
        return (
            <form onSubmit={this.handleSubmit} className="col-6 offset-3">
                <div className="input-group">
                    <label>
                        Username:
                        <input type="text" name="username" value={this.state.username} onChange={this.handleChange} />
                    </label>
                    <small className="dangerError text-left">
                        { usernameErr ? usernameErr: "" }
                    </small>
                </div>
                <div className="input-group">
                    <label>
                        Email:
                        <input type="text" name="email" value={this.state.email} onChange={this.handleChange} />
                    </label>
                    <small className="dangerError text-left">
                        { emailErr ? emailErr: "" }
                    </small>
                </div>
                <div className="input-group">
                    <label>
                        Password:
                        <input type="password" name="password" value={this.state.password} onChange={this.handleChange} />
                    </label>
                    <small className="dangerError text-left">
                        { passwordErr ? passwordErr: "" }
                    </small>
                    {this.state.password && <div className="password-state row">
                        <div 
                            className={"col pwd-weak" + (pwdWeak
                            ? " show" 
                            : "")}></div>
                        <div 
                            className={"col pwd-medium" + (pwdMedium
                            ? " show" 
                            : "")}></div>
                        <div 
                            className={"col pwd-strong" + (pwdStrong
                            ? " show" 
                            : "")}></div>
                    </div> }
                </div>
                <button type="submit">
                    Register
                </button>
            </form>
        );
    }
}
ReactDOM.render( <RegisterForm />, document.getElementById('containerRegister'));