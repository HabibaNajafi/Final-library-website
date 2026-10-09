
document.addEventListener("DOMContentLoaded", function () {
    const grid = document.getElementById("savedBooksGrid");
    const emptyState = document.getElementById("savedEmptyState");
    const count = document.getElementById("savedCount");

    function renderSavedBooks() {
        const books = window.BookNestLists.getSaved();

        count.textContent = books.length;
        grid.replaceChildren();

        emptyState.hidden = books.length !== 0;
        grid.hidden = books.length === 0;

        books.forEach(function (book) {
            const card = document.createElement("article");
            card.className = "saved-book-card";

            const cover = document.createElement("img");
            cover.className = "saved-book-cover";
            cover.alt = "Cover of " + book.title;
            cover.loading = "lazy";
            cover.src = book.cover || "";

            cover.addEventListener("error", function () {
                cover.hidden = true;
            });

            const title = document.createElement("h2");
            title.className = "saved-book-title";
            title.textContent = book.title || "Untitled";

            const author = document.createElement("p");
            author.className = "saved-book-author";
            author.textContent = book.author || "Author not listed";

            const removeButton = document.createElement("button");
            removeButton.className = "saved-remove-button";
            removeButton.type = "button";
            removeButton.textContent = "Remove from Saved";

            removeButton.addEventListener("click", function () {
                window.BookNestLists.removeSaved(book);
                renderSavedBooks();
            });

            card.append(cover, title, author, removeButton);
            grid.appendChild(card);
        });
    }

    renderSavedBooks();
});