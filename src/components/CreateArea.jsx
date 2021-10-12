import React,{useState} from 'react'
import  Fab  from '@material-ui/core/Fab';
import AddIcon from'@material-ui/icons/Add';
export default function CreateArea(props) {
    //hooks
    const[isExpanded,setExpanded]=useState(false);
    const[note,setNote] = useState({
        title:"",
        content:""
    });
    function handleChange(event){
        
        const{name,value}=event.target;

        setNote(prevNote=>{
           
            return{
                ...prevNote,
                [name]:value
            };
;
        });
    }
    function submitNote(event){
        props.onAdd(note);
        setNote({title:"",content:""});
        event.preventDefault();
    }
    function expand(){
        setExpanded(true);
    }
    return (
        <div>
            <form className="create-note">
                {isExpanded && (
                     <input 
                     type="text" 
                     name="title"
                     onChange={handleChange}
                     value={note.title}
                     placeholder="title"/>
                )}
                <textarea 
                name="content"
                rows={isExpanded ? 3:1}
                onClick={expand}
                onChange={handleChange}
                value={note.content}
                placeholder="take a note..."/>
                <Fab onClick={submitNote}>
                    <AddIcon/>
                </Fab>
            </form>
        </div>
    )
}

