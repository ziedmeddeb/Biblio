
const Book=require('../models/Book');
const bookService={
    
    async getAllBooks(){
        const books=await Book.find();
        return books;
    },
    async getBookById(id){
        const book=await Book.findById(id);
        return book;
    },
    async createBook(book){
        const newBook=await Book.create(book);
        return newBook;
    },
    async updateBook(id,book){
        const updatedBook=await Book.findByIdAndUpdate(id,book,{new:true});
        return updatedBook;
    },
    async deleteBook(id){
        const deletedBook=await Book.findByIdAndDelete(id);
        return deletedBook;
    }
};
module.exports=bookService;