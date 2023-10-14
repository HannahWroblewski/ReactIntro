import React from 'react'

function Puppies(){

    return(
        <div>
            <h1 className='header'>Puppies</h1>
            <div className="puppies-main-container">
                <div>
                    <h3 className="subHeader">Golden Retriever</h3>
                    <img src="https://www.allthingsdogs.com/wp-content/uploads/2020/06/Golden-Retriever-Training.jpg"/>
                </div>

                <div>
                    <h3 className="subHeader">Shorkie</h3>
                    <img src="https://hellobark.com/wp-content/uploads/mia-shorkie-2.jpg"/>
                </div>

                <div>
                    <h3 className="subHeader">???</h3>
                    <img src="https://www.pethub.com/sites/default/files/white-kitty-with-black-ears-sitting-on-leaves.jpg"/>
                </div>
            </div>
        </div>
    )
}

export default Puppies