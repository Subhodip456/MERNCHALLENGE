import {useState,useEffect} from 'react'
import {useNavigate,Link} from 'react-router-dom'
import axios from 'axios'
import "./component.css"



const Books = () => {
//   const [BookID,setBookID]=useState('')
//   const [BookName,setBookName]=useState('')
//   const [NumberOfCopies,setNumberOfCopies]=useState('')
const [books,setBooks]=useState([])

function Bookstructure({BookID,BookName,NumberOfCopies}){
    return(
    <div className='bookView'>
        <p className='bookID'>Book id : {BookID}</p>
        <h4 className='bookName'>Book Name : {BookName}</h4>
        <p className='TotalCopies'>Number of Copies : {NumberOfCopies}</p>
		{NumberOfCopies > 1  ?
		(<button onClick={checkOut}>CHECKOUT</button>)
		:
		(<button>RETURN</button>)
		}
    </div>
    )
}

const navigate=useNavigate()

const checkOut=async()=>{

// try{
// const checkout = await axios.post(api);
// console.log("checkout = ",checkout)
// }
// catch(err){

// }
navigate('/checkout')
}


const getBooks = async() => {
	try{
		const booksfetch = await axios.get('http://localhost:2000')
		console.log("books = ",booksfetch.data)
		setBooks(booksfetch.data)
	}
	catch(err){
		console.log("error = ",err)
	}
}

useEffect(()=>{
	getBooks();
},[])

  return (
    <div>
      <h1>BOOK RESERVATION</h1>
      {
      books.map((m)=> 
      <Bookstructure key={books.id} {...m}/>
      )}
    </div>
  )
}

export default Books
