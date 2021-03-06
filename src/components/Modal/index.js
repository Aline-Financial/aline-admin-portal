import React from 'react';
import PropTypes from 'prop-types';


const Index = ({modalId, title, children, footer}) => {
    const DefaultFooter = () => {
        return <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
    }

    return (
        <div className='modal fade' id={modalId} data-bs-backdrop='static' data-bs-keyboard="false" tabIndex="-1"
             aria-labelledby="staticBackdropLabel" aria-hidden="true">
            <div className="modal-dialog">
                <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title" id="modal-title">{title}</h5>
                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"/>
                    </div>
                    <div className="modal-body text-center">
                        {children}
                    </div>
                    <div className="modal-footer">
                        {footer? footer : <DefaultFooter/>}
                    </div>
                </div>
            </div>
        </div>
    );
};

Index.propTypes = {
    modalId: PropTypes.string,
    title: PropTypes.string,
    children: PropTypes.any
};

export default Index;
