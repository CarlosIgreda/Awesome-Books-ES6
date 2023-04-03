const $books = document.querySelector('.listcontainer');

export default class Books {
  constructor() {
    this.bookList = JSON.parse(localStorage.getItem('bookList')) || [];
    if (this.bookList.length > 0) {
      this.bookList.forEach((book) => {
        $books.insertAdjacentHTML(
          'beforeend',
          `
            <div class="itemcontainer"><p class="content">"${book.title}" by ${book.author}</p><button type="button" class="remove shadow" id="${book.title}${book.author}">Remove</button></div>
          `,
        );
        const $removeButton = document.getElementById(
          `${book.title}${book.author}`,
        );
        $removeButton.addEventListener('click', () => {
          this.remove(`${book.title}${book.author}`);
        });
      });
    }
  }

  remove(idSelected) {
    document.getElementById(idSelected).parentElement.remove();
    this.bookList.splice(
      this.bookList.findIndex((e) => e.title + e.author === idSelected),
      1,
    );
    localStorage.setItem('bookList', JSON.stringify(this.bookList));
  }

  add(title, author) {
    const item = { title, author };
    this.bookList.push(item);
    $books.insertAdjacentHTML(
      'beforeend',
      `
        <div class="itemcontainer"><p class="content">"${item.title}" by ${item.author}</p><button type="button" class="remove shadow" id="${item.title}${item.author}">Remove</button></div>
      `,
    );
    localStorage.setItem('bookList', JSON.stringify(this.bookList));
    const $removeButton = document.getElementById(
      `${item.title}${item.author}`,
    );
    $removeButton.addEventListener('click', () => {
      this.remove(`${item.title}${item.author}`);
    });
  }
}
