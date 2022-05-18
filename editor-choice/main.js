fetch("https://randomuser.me/api/")
  .then((nativeData) => nativeData.json())
  .then((data) => {
    const result = data.results[0];
    const title = document.querySelector("h2");
    const content = document.querySelector("p");
    title.textContent = result.firstName + " " + result.lastName;
    content.textContent = result.email;
  });
