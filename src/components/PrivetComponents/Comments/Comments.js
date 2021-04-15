import commentStyle from './Comments.style.css'


function Comments () {

    
    return(
        <div className="comments-wrapper">
            <form className="comments">
                <textarea className="comment"></textarea>
                <input type="submit" className="add-comment"></input>
            </form>
        </div>
    );
}

export default Comments;