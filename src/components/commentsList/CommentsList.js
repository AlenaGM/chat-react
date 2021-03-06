import CommentItem from '../commentItem/CommentItem';
import './commentsList.scss';

const CommentsList = ({comments, onDelete, onToggleProp}) => {

    const elements = comments.map(item => {

        const {id, ...itemProps} = item;

        return (
        <CommentItem
            key={id}
            {...itemProps}
            onDelete={()=> onDelete(id)}
            onToggleProp={(e) => onToggleProp(id, e.currentTarget.getAttribute('data-toggle'))}/>
        )
    });
//    }).reverse(); вариант с реверсом

    return (
        <ul>
            {elements}
        </ul>
    )
}

export default CommentsList;