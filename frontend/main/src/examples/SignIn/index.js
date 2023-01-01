import React, { Component } from 'react'

class SignIn extends Component {
    render() {
        return (
            <div>
                
                <form >
                    <div className="form-group">
                        <label htmlFor="InputUsername">Firtsname</label>
                        <input type="text" className="form-control" id="InputUsername" name="fname" />
                    </div>
                    <div className="form-group">
                        <label htmlFor="InputUsername">Secondname</label>
                        <input type="text" className="form-control" id="InputUsername" name="sname" />
                    </div>
                    <div className="form-group">
                        <label htmlFor="InputEmail">Email address</label>
                        <input type="email" className="form-control" id="InputEmail" name="email" />
                        <small id="emailHelp" className="form-text text-muted">..</small>
                    </div>
                    <div className="form-group">
                        <label htmlFor="InputPassword">Password</label>
                        <input name="password" type="password" className="form-control" id="InputPassword" />
                    </div>

                    <button type="submit" className="btn btn-primary">Login</button>
                </form>
            </div>

        )
    }
}


export default SignIn
