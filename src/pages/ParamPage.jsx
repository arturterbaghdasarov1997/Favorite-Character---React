import { useParams } from "react-router-dom";

const facts = [
    {id: 1, text: "His Middle Name is Muriel"},
    {id: 2, text: "Matthew Perry Suggested Chandler be Awkward Around Women"},
    {id: 3, text: "Most Of His Lines Were Written By Matthew Perry Himself"},
    {id: 4, text: "He And Monica Were Only Supposed To Be A One Night Stand"},
    {id: 5, text: "Chandler Worked in Data Processing"},

]

const ParamPage = () => {
    const param = useParams()
    const fact = facts.find(fact => fact.id == param.id)
    if(!fact){
        return <h1 className="factsNotFound">Fact not found!😜</h1>
    }

    return (
        <div className="paramPage">
            <h1 className="factHeading">
                😆 Facts About Chandler Bing:
            </h1>
            <h2>
                {fact.text}
            </h2>
        </div>
    )
}

export default ParamPage;