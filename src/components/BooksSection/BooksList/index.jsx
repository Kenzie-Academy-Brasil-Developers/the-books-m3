import { BookCard } from "./BookCard";

export const BooksList = ({ search, bookList }) => {
   return (
      <div>
         <span>Livros listados: {bookList.length}</span>
         {search ? <p>Resultados de busca para: {search}</p> : null}

         {bookList.length > 0 ? (
            <ul>
               {bookList.map((book) => (
                  <BookCard key={book.id} book={book} />
               ))}
            </ul>
         ) : (
            <p>Nenhum resultado encontrado</p>
         )}
      </div>
   );
};
