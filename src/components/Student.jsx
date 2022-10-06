import React from "react"

function StudentList({name, bio, scores}){

    return(
        <div>
            <h1>Name: {name}</h1>
            <p> {bio} </p>

            <h3> Results </h3>
            <table> 
                <tr>
                    <th> Date </th> 
                    <th> Score </th> 
                </tr> 
                {scores.map((temp) => {
                
                    return (
                        <tr>
                            <td> {temp.date} </td> 
                            <td> {temp.score} </td> 
                            </tr> 
                    )

                })
            }

                </table> 
        </div> 
    )
}

export default StudentList