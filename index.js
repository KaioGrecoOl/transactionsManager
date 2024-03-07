const form = document.querySelector(".add")

form.addEventListener("submit", e => {
  e.preventDefault();
  const transaction = {
    source: form.source.value,
    amount: form.amount.value,
  };

  localStorage.setItem("transactions", JSON.stringify(transaction));
});