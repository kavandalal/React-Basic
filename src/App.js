import React from 'react';

import './style.css' ;

function BookList(){
  return(
    <section className='booklistclass'>
      <Book />
      <Book />
      <Book />
      <Book />
      <Book />
      <Book />
    </section>
  );
}

function Book(){
  return(
    <article className="bookclass">
      <img src="https://i.pinimg.com/originals/c4/45/0a/c4450aa5a77c5354023e2a50d76b46c5.png" alt=''/>
      <p>
        Champion
      </p>
      <h3>
        Sylas : The Unshackled 
      </h3>
    </article>
  );
}

export default BookList;
