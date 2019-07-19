import React from 'react';
import './SignIn.css';

const SignIn = ({onRouteChange}) => {
    return (
        <article className="center mw5 mw6-ns br3 hidden ba b--black-10 shadow-5 mv4">
            <main className="pa4 black-80">
                <div className="measure">
                    <fieldset id="sign_up" 
                        className="ba b--transparent ph0 mh0">

                        {/* Sign In Title */}
                        <legend 
                            className="f2 fw6 ph0 mh0 center">Sign In</legend>

                        {/* Email-Address Input */}
                        <div className="mt3">
                            <label 
                                className="db fw6 lh-copy f6 center" 
                                htmlFor="email-address">
                                    Email
                            </label>
                            <input 
                                className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" 
                                type="email" 
                                name="email-address" 
                                id="email-address" />
                        </div>

                        {/* Password Input */}
                            <div className="mv3">
                                <label 
                                    className="db fw6 lh-copy f6 center" 
                                    htmlFor="password">
                                        Password
                                </label>
                                <input 
                                    className="b pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" 
                                    type="password" 
                                    name="password" 
                                    id="password" />
                            </div>
                    </fieldset>

                        {/* Submit Input Button */}
                            <div className="">
                                <input 
                                    onClick={()=>onRouteChange('home')}
                                    className="b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib center" 
                                    type="submit" 
                                    value="Sign in" />
                            </div>

                        {/* Registration Link */}
                            <div className="lh-copy mt3">
                                <p 
                                    onClick={() => onRouteChange('register')}
                                    href="#0" 
                                    className="f6 link dim black db pointer center">
                                        Register
                                </p>
                            </div>
                </div>
            </main>
        </article>
    )
}

export default SignIn;