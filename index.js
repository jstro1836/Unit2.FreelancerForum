// Setting up the state
const names = ["Alice", "Bob", "Carol", "Justin", "Jamison", "Jackson", "Lola"];
const occupation = ["Writer", "Teacher", "Programmer", "Marketer", "Designer", "Consulant", "Copywrighter"];
const prices = ["$30", "$35", "$40", "$45", "$50", "$60", "$70"]
const maxFreelancers = 5;
const freelancers = [
  {
    name: "Alice",
    occupation: "Writer",
    price: "$30",
  },
];

// Setting interval that will add a new freelancer every 2000 miliseconds (2 seconds)
const addFreelancerIntervalId = setInterval(addFreelancer, 2000);

render(); // We call this function once to render the initial state

/**
 * Update the DOM to reflect the current state.
 * The term "render" is often used to describe this process.
 */
function render() {
  // Render the names
  const name = document.querySelector("#name");
  const nameElements = freelancers.map((person) => {
    const element = document.createElement("ul");
    element.textContent = person.name; // Update the textContent property
    return element;
  });
  name.replaceChildren(...nameElements);

  // Render the occupation
  const occupation = document.querySelector("#occupation");
  const occupationElements = freelancers.map((job) => {
    const element = document.createElement("ul");
    element.textContent = job.occupation; // Update the textContent property
    return element;
  });
  occupation.replaceChildren(...occupationElements);

// Render the prices
const price = document.querySelector("#price");
const priceElements = freelancers.map((cost) => {
  const element = document.createElement("ul");
  element.textContent = cost.price; // Update the textContent property
  return element;
});
price.replaceChildren(...priceElements);
}

/**
 * Add a random Freelancer to the `freelancer` array
 */

function addFreelancer() {
  // Add a random Freelancer to the `freelancer` array
  const newPerson = names[Math.floor(Math.random() * names.length)];
  // Add a random occupation to the `occupation` array
  const newJob = occupation[Math.floor(Math.random() * occupation.length)];
  // Add random price to the price array
  const newPrice = price[Math.floor(Math.random() * price.length)];
 
  freelancers.push({ 
    name: newPerson, 
    occupation: newJob,
    price: newPrice 
  });

  render();

  // TODO: Stop adding shapes if we've reached the maximum number of new free lancers
  if(freelancers.length >= maxFreelancers) {
    clearInterval(addFreelancerIntervalId);
  }
}