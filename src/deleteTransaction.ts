document.addEventListener("DOMContentLoaded", () => {
  const successSpan = document.getElementById(
    "transactionSuccessDelete"
  ) as HTMLSpanElement;
  const buttonSubmit = document.getElementById(
    "deleteData"
  ) as HTMLButtonElement;

    buttonSubmit.addEventListener("click", async (event) => {
      event.preventDefault();
    try {
      const response = await fetch(`http://localhost:5001/api/transaction/1`, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
      });

      if (response.ok) {
        const data = await response.json();
        console.log("Transaction deleted:", data);
        successSpan.textContent = "Transaction deleted successfully!";
        setTimeout(() => {
          window.location.reload();
        }, 2000);
      } else {
        console.error("Error deleting transaction:", response.statusText);
      }
    } catch (error) {
      console.error("Error deleting transaction:", error);
    }
  });
});
