
const Book=require('../models/Book');
const Review=require('../models/Review');
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
    },
    async getBookReviews(id){
        const reviews=await Review.find({book:id}).populate('user');
        return reviews;

    },

    async getAvgRatings(id){
        const reviews=await Review.find({book:id});
        let total=0;
        let i=0;
        reviews.forEach(review=>{
            total+=review.rating;
            i++;
        });
        return total/i;
    }   
};
module.exports=bookService;