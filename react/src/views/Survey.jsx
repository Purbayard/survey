import { PlusCircleIcon } from "@heroicons/react/24/outline"
import PageComponent from "../components/PageComponent"
import SurveyListItem from "../components/SurveyListItem"
import Buttons from "../components/core/Buttons"
import { useStateContext } from "../contexts/ContextProvider"

function Survey() {
    const { survey } = useStateContext()
    const onDeleteClick = () => {
        console.log("On Delete Click")
    }
    return (
        <>
            <PageComponent title="Survey" 
            buttons={(
                <Buttons color="green" to="/survey/create">
                    <PlusCircleIcon className="h-6 w-6 mr-2" /> Create New
                </Buttons>
            )}>
                <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 md:grid-cols-3">
                    {survey.map(survey => (
                        <SurveyListItem survey={survey} key={survey.id} onDeleteClick={onDeleteClick} />
                    ))}
                </div>
            </PageComponent>
        </>
    )
}

export default Survey