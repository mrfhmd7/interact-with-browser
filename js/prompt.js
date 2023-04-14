// alert('Who are you?')

const showAlert = () => {
  alert("This is a message for you. Please Be careful :p");
};

const lendMoney = () => {
  const result = confirm("Will you help me?");
  //   console.log(result);
  if (result === true) {
    alert("You my good friend");
  } else {
    alert("You are not my good friend");
  }
};

const getInfo = () => {
  const name = prompt("What is your name?");
  //   console.log(name);
  if (name === null) {
    alert("Please provide your name please!!!!");
  } else {
    alert("Welcome to this world!!!!!!!!");
  }
};
