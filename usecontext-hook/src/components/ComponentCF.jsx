import React from "react";
import { UserContext, UserSkills } from "../App";

function ComponentF() {
    return (
        <div>
            <UserContext.Consumer >
                {
                    user => {
                        return (
                            <UserSkills.Consumer >
                                {
                                    skills => {
                                        return < div > User Context value < h3 > {user} </h3>, Skills is <h3> {skills} </h3></div>
                                    }
                                }
                            </UserSkills.Consumer>

                        )
                    }
                }
            </UserContext.Consumer >
        </div >
    )
}
export default ComponentF;