function spinner_ON(spinner, button) {
  spinner.classList.add("spinner-border");
  button.disabled = true;
}

function spinner_OFF(spinner, button) {
  spinner.classList.remove("spinner-border");
  button.disabled = false;
}

export { spinner_OFF, spinner_ON };
