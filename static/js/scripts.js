function toggleCreateForm() {
    var formContainer = document.getElementById('create-form-container');
    if (formContainer.style.display === 'none' || formContainer.style.display === '') {
        formContainer.style.display = 'block';
    } else {
        formContainer.style.display = 'none';
    }
}

function toggleEditForm(contractId) {
    var formContainer = document.getElementById('edit-form-container-' + contractId);
    if (formContainer.style.display === 'none' || formContainer.style.display === '') {
        formContainer.style.display = 'block';
    } else {
        formContainer.style.display = 'none';
    }
}

function toggleEditForm(certificateId) {
    var formContainer = document.getElementById('edit-form-container-' + certificateId);
    if (formContainer.style.display === 'none' || formContainer.style.display === '') {
        formContainer.style.display = 'block';
    } else {
        formContainer.style.display = 'none';
    }
}

function toggleEditForm(permissionId) {
    var formContainer = document.getElementById('edit-form-container-' + permissionId);
    if (formContainer.style.display === 'none' || formContainer.style.display === '') {
        formContainer.style.display = 'block';
    } else {
        formContainer.style.display = 'none';
    }
}


function toggleEditForm(contractP) {
    var formContainer = document.getElementById('edit-form-container-' + contractP);
    if (formContainer.style.display === 'none' || formContainer.style.display === '') {
        formContainer.style.display = 'block';
    } else {
        formContainer.style.display = 'none';
    }
}