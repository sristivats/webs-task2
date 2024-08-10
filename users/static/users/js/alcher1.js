document.addEventListener('DOMContentLoaded', function() {
    const sidebar = document.getElementById('sidebar');
    const content = document.getElementById('content');
    const toggleBtn = document.getElementById('toggle-btn');
    const addUserBtn = document.getElementById('add-user-btn');
    const addUserModal = document.getElementById('add-user-modal');
    const editUserModal = document.getElementById('edit-user-modal');
    const closeAddBtn = document.querySelector('#add-user-modal .close-btn');
    const closeEditBtn = document.querySelector('#edit-user-modal .close-btn');

    toggleBtn.addEventListener('click', function() {
        sidebar.classList.toggle('sidebar-closed');
        content.classList.toggle('marginleft')
        document.querySelector('.content').classList.toggle
        content.classList.toggle('content-expanded');
    });

    addUserBtn.addEventListener('click', function() {
        addUserModal.style.display = 'block';
    });

    closeAddBtn.addEventListener('click', function() {
        addUserModal.style.display = 'none';
    });

    closeEditBtn.addEventListener('click', function() {
        editUserModal.style.display = 'none';
    });

    window.addEventListener('click', function(event) {
        if (event.target === addUserModal) {
            addUserModal.style.display = 'none';
        }
        if (event.target === editUserModal) {
            editUserModal.style.display = 'none';
        }
    });
});

function openEditModal( name, username, email) {
    const editForm = document.getElementById('edit-user-form');
    
    document.getElementById('edit-name').value = name;
    document.getElementById('edit-username').value = username;
    document.getElementById('edit-email').value = email;
    editForm.action = `/users/update_user/${userId}/`; 
    document.getElementById('edit-user-modal').style.display = 'block';
}

