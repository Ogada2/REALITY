// Function to dynamically display organizations based on the selected niche
function showOrganizations(nicheId) {
    // Hide all organizations
    const allOrganizations = document.querySelectorAll('.organization-list');
    allOrganizations.forEach(org => org.style.display = 'none');
    
    // Show the selected niche organizations
    const selectedOrg = document.getElementById(nicheId);
    if (selectedOrg) {
        selectedOrg.style.display = 'block';
    }
}

// Search functionality
function searchOrganizations() {
    const input = document.getElementById('searchInput').value.toLowerCase();
    const orgLists = document.querySelectorAll('.organization-list');
    
    orgLists.forEach(orgList => {
        const items = orgList.getElementsByTagName('li');
        let hasMatch = false;

        Array.from(items).forEach(item => {
            if (item.textContent.toLowerCase().includes(input)) {
                item.style.display = '';
                hasMatch = true;
            } else {
                item.style.display = 'none';
            }
        });

        orgList.style.display = hasMatch ? 'block' : 'none';
    });
}

// Smooth scrolling for links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();

        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});
