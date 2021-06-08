import React from 'react';
//css
import './style.css' ;

//dataset
import {pokemons} from './data/data';

function BookList(){
  return(
    <section className='booklistclass'>
      {pokemons.map((pokemon) => {
        // return <Book pokemon ={pokemon}></Book>; //method 1 
        return <Book key={pokemon.ind} {...pokemon}> </Book>; //method2 key for the warning in the console
      })};
      
    </section>
  );
}

function Book(props){
  // const {img,pname,type,ht,wt} = props.pokemon; // method 1 
  const {img,pname,type,ht,wt} = props; //method 2 
  return(
    <article className="bookclass">
      <img src={img} alt=''/>
      <div>
        <h1>{pname}</h1>
        {ColorType(type)}
      </div>
      <div style = {{"style" : 'inline'}}>
        <h5 style = {{"style" : 'inline','float':'left'}}>Height {ht}</h5>
        <h5 style = {{"style" : 'inline','float':'right'}}>Weight {wt}</h5>
      </div>
    </article>
  );
}

const ColorType=(type)=>{
  if(type === 'Grass') return <h4 class="grasscolor">{type}</h4>;
  else if(type === 'Fire') return <h4 class="firecolor">{type}</h4>;
  else if(type === 'Water') return <h4 class="watercolor">{type}</h4>;
}

export default BookList;
