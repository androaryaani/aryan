const searchInput = document.getElementById('sea'); // Search input
const rows = document.querySelectorAll('.schedule-table-content tbody tr'); // Table rows ko select karna

searchInput.addEventListener('input', function () {
    const query = searchInput.value.toLowerCase(); // User ka search query lowercase mein convert karna

    rows.forEach(row => {
        const cells = row.querySelectorAll('td'); // Row ke andar jitni cells hain unhe select karna
        let rowText = ''; // Row ka poora text banayenge
        
        // Har cell se text nikaalna
        cells.forEach(cell => {
            rowText += cell.textContent.toLowerCase(); // Lowercase mein text ko add karna
        });

        // Agar rowText mein search query hai toh row ko display karna, nahi toh hide karna
        if (rowText.includes(query)) {
            row.style.display = ''; // Visible
        } else {
            row.style.display = 'none'; // Hidden
        }
    });
});
