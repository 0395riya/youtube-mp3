import React from 'react'
// import './style.css'
function Form() {
  return (
    <div>

<input class="c-checkbox" type="checkbox" id="checkbox" />
<div class="c-formContainer">
  <form class="c-form" action="">
    <input class="c-form__input" placeholder="Youtube url " type="text"  required />
    <label class="c-form__buttonLabel" for="checkbox">
      <button class="c-form__button" type="button"> Download </button>
    </label>
    <label class="c-form__toggle" for="checkbox" data-title="Notify me"></label>
  </form>
</div>


    </div>
  )
}

export default Form