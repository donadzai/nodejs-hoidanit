const deleteModel = document.getElementById('deleteModel');
const formSubmit = document.getElementById('form-submit');
if (deleteModel) {
    deleteModel.addEventListener('show.bs.modal', (event) => {
        const deleteBtn = event.relatedTarget;
        const id = deleteBtn.getAttribute('data-bs-id');
        const deleteConfirm = document.querySelector('#delete-confirm');
        deleteConfirm.onclick = () => {
            formSubmit.action = `/trash/force/${id}?_method=DELETE`;
            formSubmit.submit();
        };
    });
}
