import React from 'react';

class Login extends React.Component{

  
  render(){
    
    return (
      <div className="logins">
        <div><a href="/auth/google">Log in with Google</a></div>
        <div><a href="/auth/facebook/callback">Log in with Facebook</a></div>
      </div>
    )
  }
  
}



export default Login;