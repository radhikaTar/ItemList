import './ExpenseItem.css';
import ExpenseDate from "./ExpenseDate";

function ExpenseItem (props)  {
    const date = new Date(props.items.ItemDate);
    return (
        <div className='expense-item'>
           <div>
           <ExpenseDate month= {date.toLocaleString('default', { month: 'short' })} year={date.getFullYear()} day= {date.getDate()}/>
           </div> 
        
        <div className='expense-item__description'>
           <h2>{props.items.ItemName}</h2> 
        </div>
        <div className='expense-item__price'>
            <div>{props.items.Cost}</div>
        </div>
        </div>
    );
}
export default ExpenseItem;