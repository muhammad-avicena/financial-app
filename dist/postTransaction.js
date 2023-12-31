"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
document.addEventListener("DOMContentLoaded", () => {
    const localStorageData = localStorage.getItem("userData");
    const dataUser = JSON.parse(localStorageData || "{}");
    const form = document.getElementById("transactionForm");
    const successSpan = document.getElementById("transactionSuccess");
    const failedSpan = document.getElementById("transactionFailed");
    form.addEventListener("submit", (event) => __awaiter(void 0, void 0, void 0, function* () {
        event.preventDefault();
        const formData = {
            userId: dataUser.id,
            productName: document.getElementById("productName")
                .value,
            productQuantity: parseInt(document.getElementById("productQuantity").value),
            productPrice: parseInt(document.getElementById("productPrice").value),
        };
        try {
            const response = yield fetch("https://financial-api.avicena.dev/api/transaction", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(formData),
            });
            if (response.ok) {
                const data = yield response.json();
                console.log("Transaction created:", data);
                successSpan.textContent = "Transaction created successfully!";
                setTimeout(() => {
                    window.location.reload();
                }, 2000);
            }
            else {
                console.error("Error creating transaction:", response.statusText);
                failedSpan.textContent = `Error creating transaction:, ${response.statusText}`;
            }
        }
        catch (error) {
            console.error("Error creating transaction:", error);
            failedSpan.textContent = `Error creating transaction:, ${error}`;
        }
    }));
});
