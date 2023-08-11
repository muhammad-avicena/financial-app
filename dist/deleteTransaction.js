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
    const successSpan = document.getElementById("transactionSuccessDelete");
    const buttonSubmit = document.getElementById("deleteData");
    buttonSubmit.addEventListener("click", (event) => __awaiter(void 0, void 0, void 0, function* () {
        event.preventDefault();
        try {
            const response = yield fetch(`https://financial-api.avicena.dev/api/transaction/3`, {
                method: "DELETE",
                headers: {
                    "Content-Type": "application/json",
                },
            });
            if (response.ok) {
                const data = yield response.json();
                console.log("Transaction deleted:", data);
                successSpan.textContent = "Transaction deleted successfully!";
                setTimeout(() => {
                    window.location.reload();
                }, 2000);
            }
            else {
                console.error("Error deleting transaction:", response.statusText);
            }
        }
        catch (error) {
            console.error("Error deleting transaction:", error);
        }
    }));
});
