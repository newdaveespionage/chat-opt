/**
 * Class walkthrough
 * 
 * For Tuesday
 * - window onload
 *   - demo difference between 
 *     - https://developer.mozilla.org/en-US/docs/Web/API/Document/DOMContentLoaded_event
 *     - https://developer.mozilla.org/en-US/docs/Web/API/Window/load_event
 *   - console.log() when ready
 * - DOM manipulation
 *   - input event: https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/input_event
 * 
 * For Friday
 * - DOM manipulation
 *   - onsubmit
 *     - log value of field
 *   - DOM parent-child relationship and navigating using JS
 *   - append div
 *   - clear field
 */

/**
 * Project requirements
 * 
 * - Load script when window is ready
 * - use onchange to detect when to enable or disable submit button, only if text is present (no empty values!)
 * - use onsubmit to update chat history
 * - append a div with the new chat as a child of the chat history container
 * 
 *  */ 

function formHandler(){
    console.log('running formHandler');
    const form = document.querySelector("form");
    const messageError = document.querySelector("#message + span.error");
    const message = document.getElementById("message");
    const chatHistory = document.getElementById("history");

    const showError = () => {
        if (message.validity.valueMissing) {
            // If the field is empty,
            // display the following error message.
            messageError.textContent = "You need to enter an message address.";
        } else if (message.validity.typeMismatch) {
            // If the field doesn't contain an message address,
            // display the following error message.
            messageError.textContent = "Entered value needs to be an message address.";
        } else if (message.validity.tooShort) {
            // If the data is too short,
            // display the following error message.
            messageError.textContent = `message should be at least ${message.minLength} characters; you entered ${message.value.length}.`;
        }

        // Set the styling appropriately
        messageError.className = "error active";
    }

    message.addEventListener("input", (event)=>{
      // Each time the user types something, we check if the
      // form fields are valid.

      if (message.validity.valid) {
        // In case there is an error message visible, if the field
        // is valid, we remove the error message.
        messageError.textContent = ""; // Reset the content of the message
        messageError.className = "error"; // Reset the visual state of the message
      } else {
        // If there is still an error, show the correct error
        showError();
      }

    });

    form.addEventListener("submit", (event) => {
      // if the message field is valid, we let the form submit
      if (!message.validity.valid) {
          // If it isn't, we display an appropriate error message
          showError();    
        }else{
          updatesLog();
          message.value = "";
        }
      // Then we prevent the form from being sent by canceling the event
      event.preventDefault();
    });
    
    const historyTemplate = (message)=>{
      const newMessageDiv = document.createElement("div");
      const text = document.createElement("div");
      text.className="message-text";
      text.textContent = message;
      const timestamp = document.createElement("div");
      timestamp.className="timestamp";
      timestamp.textContent=Date();
      newMessageDiv.appendChild(timestamp);
      newMessageDiv.appendChild(text);
      newMessageDiv.className = "message";
      return newMessageDiv;
    };
    const updatesLog = ()=>{
      chatHistory.append(historyTemplate(message.value));
    }

    console.log('formHandler complete');
}

// init window
function onLoadHandler(params) {
  console.log("onLoadHandler called");
  formHandler();
}

// window.onload = () => {
//   console.log("page is fully loaded onload");
// };

// window.addEventListener("load", onLoadHandler);

// window.removeEventListener("load",onLoadHandler);

if (document.readyState === "loading") {
  // Loading hasn't finished yet
  document.addEventListener("DOMContentLoaded", formHandler);
} else {
  // `DOMContentLoaded` has already fired
  formHandler();
}
