const alertBtn = document.getElementById("alertBtn");
const alertOK = document.getElementById("alertOK");

const confirmBtn = document.getElementById("confirmBtn");
const confirmOk = document.getElementById("confirmOk");
const confirmCancel = document.getElementById("confirmCancel");

const promptBtn = document.getElementById("promptBtn");
const promptCancel = document.getElementById("cancelPrompt");
const promptSubmit = document.getElementById("submitPrompt");
const promptBox = document.getElementById("promptBox");

const custAlert = document.getElementById("custAlert");
const custConfirm = document.getElementById("custConfirm");
const custPrompt = document.getElementById("custPrompt");

const response = document.getElementById("outputText");

export function alertDialog() {
  clearStyle();
  setTimeout(() => {
    alertBtn.addEventListener("click", () => {
      clearStyle();
      custAlert.showModal();
    });
    alertOK.addEventListener("click", () => {
      custAlert.close();
    });
  }, 0);
}
export function confirmDialog() {
  clearStyle();
  setTimeout(() => {
    confirmBtn.addEventListener("click", () => {
      clearStyle();
      custConfirm.showModal();
    });
    confirmOk.addEventListener("click", () => {
      custConfirm.close();
      response.innerText = "Confirm result: true";
      response.style =
        "border-style: double; font-size: 20px; border-width: 5px; padding: 5px";
    });
    confirmCancel.addEventListener("click", () => {
      custConfirm.close();
      response.innerText = "Confirm result: false";
      response.style =
        "border-style: double; font-size: 20px; border-width: 5px; padding: 5px";
    });
  }, 0);
}
export function promptDialog() {
  setTimeout(() => {
    promptBtn.addEventListener("click", () => {
      clearStyle();
      custPrompt.showModal();
    });
    promptCancel.addEventListener("click", () => {
      custPrompt.close();
      response.innerHTML = "Prompt result: User canceled";
      response.style =
        "border-style: double; font-size: 20px; border-width: 5px; padding: 5px";
    });
    promptSubmit.addEventListener("click", () => {
      let clean, output;
      custPrompt.close();
      clean = DOMPurify.sanitize(promptBox.value);
      if (clean == null || clean == "") {
        output = "Prompt result: User didn't enter anything";
      } else {
        output = "Prompt result: " + clean;
      }
      response.innerHTML = output;
      response.style =
        "border-style: double; font-size: 20px; border-width: 5px; padding: 5px";
    });
    // response.style =
    //   "border-style: double; font-size: 20px; border-width: 5px; padding: 5px";
  }, 0);
}

function clearStyle() {
  response.innerHTML = "";
  response.style = "";
}
