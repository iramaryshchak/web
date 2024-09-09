// Класс для керування модальним вікном (закриття та відкриття)
export class Modal {
  open(content: string) {
    const modalHtml = `
       <div id="modalBackdrop" class="modal-backdrop opacity-50" style="display: block;"></div>
      <div id="modal" class="modal show" tabindex="-1" role="dialog" style="display: block;">
        <div class="modal-dialog modal-dialog-centered" role="document">
          <div class="modal-content">
            <div class="modal-header d-flex justify-content-between">
              <h5 class="modal-title">Borrow/Return Book</h5>
              <button type="button" id="modalClose" class="close" aria-label="Close">
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div class="modal-body">
              <p>${content}</p>
              <input type="text" id="userIdInput" class="form-control" placeholder="Enter user ID" />
            </div>
            <div class="modal-footer">
              <button type="button" id="modalConfirm" class="btn btn-primary">Confirm</button>
              <button type="button" id="modalCloseFooter" class="btn btn-secondary">Close</button>
            </div>
          </div>
        </div>
      </div>
    `;

    document.body.insertAdjacentHTML("beforeend", modalHtml);

    document
      .getElementById("modalClose")
      ?.addEventListener("click", this.close);
    document
      .getElementById("modalCloseFooter")
      ?.addEventListener("click", this.close);
  }

  close() {
    const modal = document.getElementById("modal");
    const modalBackdrop = document.getElementById("modalBackdrop");
    if (modal) modal.remove();
    if (modalBackdrop) modalBackdrop.remove();
  }
}
