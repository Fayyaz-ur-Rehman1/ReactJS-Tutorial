import React, { useContext } from "react";
import ComponentF from "./ComponentCF";
import { UserContext, UserSkills } from "../App";

function ComponentE() {
    const user = useContext(UserContext)
    const skills = useContext(UserSkills)
    return (
        <div>
            {user} - {skills}
            {/* <ComponentF /> */}
        </div>
    )
}
export default ComponentE;