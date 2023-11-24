const bookService=require('../services/bookService');
const express=require('express');
const bookController=express.Router();

bookController.get('',async(req,res)=>{
    const books=await bookService.getAllBooks();
    res.json(books);
}
);
bookController.get('/:id',async(req,res)=>{
    const book=await bookService.getBookById(req.params.id);
    res.json(book);
}
);
bookController.post('',async(req,res)=>{
    const book=await bookService.createBook(req.body);
    res.json(book);
}
);
bookController.put('/:id',async(req,res)=>{
    const book=await bookService.updateBook(req.params.id,req.body);
    res.json(book);
}
);
bookController.delete('/:id',async(req,res)=>{
    const book=await bookService.deleteBook(req.params.id);
    res.json(book);
}
);

bookController.get('/:id/reviews',async(req,res)=>{
    const reviews=await bookService.getBookReviews(req.params.id);
    res.json(reviews);
}
);

module.exports=bookController;