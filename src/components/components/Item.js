import React from 'react';

import BtnDelete from './BtnDelete';
import './Item.css';

const Item = ({content}) => {
    return (
        <React.Fragment>
            <div className="container">
                <div className="row item">               {/* TODO .display-item nie jest używana może wyrzucić ?? */}  {/* TODO wypisywać listę jako ul>li ? */}
                    <div className="display-item item-name col-3">
                       <strong> {content}</strong>
                    </div>
                    <div className="display-item item-category col-3">
                        <p>ubrania</p>
                    </div>
                    <div className="display-item item-amount col-3">
                        <p>100zł</p>
                    </div>
                    <div className="display-item btn-delete col-3">
                        <BtnDelete/>
                    </div>
                </div>
            </div>
        </React.Fragment>
    );
}

export default Item;