import React, {useState, useEffect} from "react";

const People =()=>{
    const [allPeople, setAllPeople] = useState([]);

    async function howManyPeopleAreInSpace(){
        try {
            const response = await fetch("http://api.open-notify.org/astros.json");
            const data = await response.json();
            setAllPeople(data.people);

        } catch (error) {
            console.log(error);
        }
    }

    useEffect(()=>{
        howManyPeopleAreInSpace();
    }, []);

    console.log(allPeople)

    return(
        <div>
            <h1>People in Space</h1>
            <div className="people-main-container">
                {
                    allPeople.length ? allPeople.map((e, idx)=>{
                        return(
                            <div key={`${idx}: ${e.name}`} className="card">
                                <p>
                                    <span className="makeBold">Person: {e.name}</span>
                                </p>
                                <p>
                                    <span className="makeBold">Craft: {e.craft}</span>
                                </p>
                            </div>
                        )
                    }) : null }

            </div>
        </div>
    )
}

export default People;



