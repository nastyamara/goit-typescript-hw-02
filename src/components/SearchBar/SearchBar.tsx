import { Formik, Form, Field } from "formik"
import { useId } from "react"
import toast, { Toaster } from 'react-hot-toast';
// import  { FormEvent } from "react";

const notify = () => toast('Ooops, you`ve clicked too early. Enter something');

interface SearchBarProps {
  onSubmit: (newQuery: string) => void;
}


export default function SearchBar({ onSubmit }: SearchBarProps) {
const searchId = useId();

 

    return (
      <header>
        
        <Formik
        
          initialValues={{
          search: '',
        }}
          onSubmit={(values, actions) => {
            if (values.search.trim() === '') {
              notify()
             
            } else {
            onSubmit(values.search);
            actions.resetForm()
            }
       
          }}
        > 
          
                      <Form className='searchForm'> 
                
            <Field  className="searchInput"name="search" id={ searchId } />
            
             
            <button type="submit" className="searchBtn">SEARCH</button>
            <Toaster />
</Form>
 
        </Formik>




</header>
    )
}