export default class Modal {
    constructor(title, content) {
        this.title = title;
        this.content = content;
    }
createEditForm() {
   const main= document.querySelector("main");
   main.style.paddingRight="410px"
   const modalElement = document.createElement('div');
   modalElement.classList.add("editForm");
   modalElement.insertAdjacentHTML("afterbegin", `${this.content}`)
   document.body.append(modalElement)
}
//--------------------------------  MODAL  -----------------------------------
    createModal() {

        const modalElement = document.createElement('div');
        modalElement.classList.add("modal", "fade");
        modalElement.id = "createCardModal";
        modalElement.setAttribute("tabindex", "-1");
        modalElement.setAttribute("aria-labelledby", "createCardModalLabel");
        modalElement.setAttribute("aria-hidden", "true");

        const modalDialog = document.createElement("div");
        modalDialog.classList.add("modal-dialog");
        modalElement.appendChild(modalDialog);

        const modalContent = document.createElement("div");
        modalContent.classList.add("modal-content");
        modalDialog.appendChild(modalContent);

        const modalHeader = document.createElement("div");
        modalHeader.classList.add("modal-header");
        modalContent.appendChild(modalHeader);

        const modalTitle = document.createElement("h1");
        modalTitle.classList.add("modal-title", "text-center", "new-visit-title", "fs-3");
        modalTitle.id = "createCardModalLabel";
        modalTitle.textContent = this.title;
        modalHeader.appendChild(modalTitle);

        const modalBody = document.createElement("div");
        modalBody.classList.add("modal-body");
        modalBody.insertAdjacentHTML("afterbegin", this.content);
        modalContent.appendChild(modalBody);

        const modalFooter = document.createElement("div");
        modalFooter.classList.add("modal-footer");
        modalContent.appendChild(modalFooter);

        const closeBtn = document.createElement("button");
        closeBtn.type = "button";
        closeBtn.classList.add("btn", "btn-secondary", "closeBtn");
        closeBtn.setAttribute("data-bs-dismiss", "modal");
        closeBtn.textContent = "Close";
        modalFooter.appendChild(closeBtn);

        const submitBtn = document.createElement("button");
        submitBtn.type = "button";
        submitBtn.classList.add("btn", "btn-primary", "visit-submit");
        submitBtn.textContent = "Submit";
        modalFooter.appendChild(submitBtn);

        document.body.appendChild(modalElement);
    }
}