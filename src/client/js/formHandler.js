function handleSubmit(event) {
  event.preventDefault();

  // check what text was put into the form field
  let formText = document.getElementById("name").value;
  Client.checkForName(formText);

  console.log("::: Form Submitted :::");
  (async function () {
    try {
      const res = await fetch("http://localhost:5000/test");
      const data = await res.json();
      document.getElementById("results").innerHTML = data.message;
    } catch (e) {
      console.error("Fetch ERROR => ", e);
    }
  })();
}

export { handleSubmit };
