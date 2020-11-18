import React from 'react';

import BtnDelete from './BtnDelete';
import './Item.css';

const Item = ({name, category, amount, deleteItem, id, type}) => {
    return (
        <React.Fragment>
            <div className="container">
                <div className="row item">               {/* TODO .display-item nie jest używana może wyrzucić ?? */}  {/* TODO wypisywać listę jako ul>li ? */}
                    <div className="display-item item-name col-3">
                       <strong> {name}</strong>
                    </div>
                    <div className="display-item item-category col-3">
                        <p>{category}</p>
                    </div>
                    <div className="display-item item-amount col-3">
                        <p>{amount}</p>
                    </div>
                    <div className="display-item btn-delete col-3">
                        <BtnDelete deleteItem={deleteItem} itemId={id} type={type}/>
                    </div>
                </div>
            </div>
        </React.Fragment>
    );
}

export default Item;