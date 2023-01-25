class Book {
	constructor(data) {
		this.id = data.id;
		this.bookType = data.bookType;
		this.publisher = data.publisher;
		this.publicationYear = data.publicationYear;
		this.language = data.language;
		this.description = data.description;
	}
}

export default Book;
