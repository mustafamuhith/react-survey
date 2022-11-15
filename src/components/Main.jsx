import { useState } from "react";

const initialFormState = {
color: '',
checkbox: "",
review:'',
username: '',
email: '',

}

function Main() {
  const [open, setOpen] = useState(false); //Ignore this state

  const [formState, setFormState] = useState(initialFormState)
  
  const handleSubmit = (event) => {
    event.preventDefault()
    event.target.reset();

    console.log('submitted:', formState)

    setFormState(initialFormState)
  }

  const handleChange = (event) => {
    const targetValue = event.target.value
    const targetName = event.target.name
    const targetType = event.target.type
    const targetChecked = event.target.checked
  console.log(targetValue, targetName, targetType, targetChecked)
  
  if(targetName === 'color') {
    setFormState({...formState, color: targetValue})
  }
  if(targetType === 'checkbox', targetName === "spend-time"){
    setFormState({...formState, checkbox: targetValue})
  }
  if (targetName ==="review"){
    setFormState({...formState, review: targetValue})
  }
  if (targetName ==="username", targetType === "text"){
    setFormState({...formState, username: targetValue})
  }
  if(targetName === "email"){
    setFormState({...formState, email: targetValue})
  }
  }
  return (
    <main className="main">
      <section className={`main__list ${open ? "open" : ""}`}>
        <h2>Answers list</h2>
        {/* answers should go here */}
      </section>
      <section className="main__form"><form class="form" onSubmit={handleSubmit}>
  <h2>Tell us what you think about your rubber duck!</h2>
  <div class="form__group radio">
    <h3>How do you rate your rubber duck colour?</h3>
    <ul> 
  <li>
    <input id="color-one" type="radio" name="color" value="1" checked={formState.color==="1"}onChange={handleChange}  /><label
      for="color-one"
      >1</label
    >
  </li>
  <li>
    <input id="color-two" type="radio" name="color" value="2"checked={formState.color==="2"} onChange={handleChange} /><label
      for="color-two"
      >2</label
    >
  </li>
  <li>
    <input id="color-three" type="radio" name="color" value="3"checked={formState.color==="3"} onChange={handleChange}/><label
      for="color-three"
      >3</label
    >
  </li>
  <li>
    <input id="color-four" type="radio" name="color" value="4"checked={formState.color==="4"} onChange={handleChange}/><label
      for="color-four"
      >4</label
    >
  </li>
</ul>
  </div>
  <div class="form__group">
    <h3>How do you like to spend time with your rubber duck</h3>
    <ul>
  <li>
    <label
      ><input
        name="spend-time"
        type="checkbox"
        value="swimming"
        checked={formState.checkbox === "swimming"}
        onChange ={handleChange}
      />Swimming</label
    >
  </li>
  <li>
    <label
      ><input name="spend-time" type="checkbox" value="bathing" 
      checked={formState.checkbox === "bathing"}
      onChange={handleChange}/>Bathing</label
    >
  </li>
  <li>
    <label
      ><input
        name="spend-time"
        type="checkbox"
        value="chatting"
        checked={formState.checkbox === "chatting"}
        onChange={handleChange}
      />Chatting</label
    >
  </li>
  <li>
    <label
      ><input name="spend-time" type="checkbox" value="noTime"
      checked={formState.checkbox === "noTime"}
      onChange={handleChange} />I don't like to
      spend time with it</label
    >
  </li>
</ul>

  </div>
  <label
    >What else have you got to say about your rubber duck?<textarea
      name="review"
      cols="30"
      rows="10" onChange={handleChange}
    ></textarea></label
  ><label
    >Put your name here (if you feel like it):<input
      type="text"
      name="username"
      value={formState.username} onChange={handleChange}/></label
  ><label
    >Leave us your email pretty please??<input
      type="email"
      name="email"
      value= {formState.email} onChange ={handleChange}/></label
  ><input class="form__submit" type="submit" value="Submit Survey!" />
</form></section>
      

    </main>
    
  );
}


export default Main;
