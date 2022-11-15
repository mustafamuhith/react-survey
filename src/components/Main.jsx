import { useState } from "react";

const initialFormState = {
radioButtons: '',
}
function Main() {
  const [open, setOpen] = useState(false); //Ignore this state

  const [formState, setFormState] = useState(initialFormState)
  
  const handleSubmit = (event) => {
    event.preventDefault()

    console.log('submitted:', formState)

    setFormState(initialFormState)
  }
  return (
    <main className="main">
      <section className={`main__list ${open ? "open" : ""}`}>
        <h2>Answers list</h2>
        {/* answers should go here */}
      </section>
      <section className="main__form">{/* a form should be here */}</section>
      <form class="form" onSubmit={handleSubmit}>
  <h2>Tell us what you think about your rubber duck!</h2>
  <div class="form__group radio">
    <h3>How do you rate your rubber duck colour?</h3>
    <ul> //
  <li>
    <input id="color-one" type="radio" name="color" value="1" /><label
      for="color-one"
      >1</label
    >
  </li>
  <li>
    <input id="color-two" type="radio" name="color" value="2" /><label
      for="color-two"
      >2</label
    >
  </li>
  <li>
    <input id="color-three" type="radio" name="color" value="3" /><label
      for="color-three"
      >3</label
    >
  </li>
  <li>
    <input id="color-four" type="radio" name="color" value="4" /><label
      for="color-four"
      >4</label
    >
  </li>
</ul>
  </div>
  <div class="form__group">
    <h3>How do you like to spend time with your rubber duck</h3>
    {/* <!-- checkboxes go here --> */}
  </div>
  <label
    >What else have you got to say about your rubber duck?<textarea
      name="review"
      cols="30"
      rows="10"
    ></textarea></label
  ><label
    >Put your name here (if you feel like it):<input
      type="text"
      name="username"
      value="" /></label
  ><label
    >Leave us your email pretty please??<input
      type="email"
      name="email"
      value="" /></label
  ><input class="form__submit" type="submit" value="Submit Survey!" />
</form>

    </main>
    
  );
}

export default Main;
