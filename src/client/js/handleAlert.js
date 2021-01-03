function triggerAlert(alertElement, alertMessage) {
  alertElement.style.display = "block";
  alertElement.innerHTML = alertMessage;
}

export { triggerAlert };
