import React from "react";

class App extends React.Component{
  state = {
    email:"",
    details:"",
  }

  formSubmit = (event)=>{
    event.preventDefault();
    console.log(this.state.details);
  }
  render(){
    return (
      <div className="App">
        <h1>Login Panel</h1>

        <div>
          <form onSubmit={this.formSubmit}>
            <div class="form-group" style={{ marginLeft:200 }}>
              <label>Email</label><br/>
              <input type="email" name="email" onChange={(event)=>{this.setState({email:event.target.value})}}></input><br></br>

              <label>Details</label><br/>
                <textarea onChange={(event)=>{this.setState({details:event.target.value})}}>Write on Here...</textarea><br/>
                <h6>{this.state.details}</h6>
              <button type="submit">Submit</button><br/>
            </div>
          </form>
        </div>
      </div>
    );
  }
}

export default App;
