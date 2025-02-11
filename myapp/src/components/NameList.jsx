import Person from "./Person";

function NameList() {
    const name = ["fayyazurrehman", "ayad chouhan", "danishchouhan"];
    const person = [
        {
            id: 1,
            name: "fayyaz",
            age: 18,
            skills: "FullStack Dev"
        },
        {
            id: 2,
            name: "adnan chouhan",
            age: "23",
            skills: "DevOps + FullStack Dev"
        },
        {
            id: 3,
            name: "danish chouhan",
            age: "19",
            skills: "Mern stack dev"
        }
    ]
    // const personList = person.map(person => <Person key={person.id} person={person} />)
    const nameList = name.map((name) => <h1 key={name}> {name}</h1>)
    return (
        // < div > {personList}</div>
        < div > {nameList}</div>


        // <div>
        //     <h1>{name[0]}</h1>
        //     <h1>{name[1]}</h1>
        //     <h1>{name[2]}</h1>
        // </div>

        // <div>
        //     {
        //         name.map(name => <h1> {name} </h1>)
        //     }
        // </div>
    )
}

export default NameList;