import React from 'react'; 

const VerticalNavigation = (props) => {

    const currentPage = {
        PHOTOS : 'photos',
        ALBUMS : 'albums',
        ACCOUNT: 'account'
        
    }

  

    return (
        <div className="ui secondary vertical pointing menu">
            <button className="item"  onClick={() => props.pageSelectionFunction("photos")}>
                 Photos
             </button>
             <button className="item" onClick={() => props.pageSelectionFunction("albums")}>
                 Albums
             </button>
             <button className="item" onClick={() => props.pageSelectionFunction("account")}>
                  Account
             </button>
        </div>
    );
}

export default VerticalNavigation; 