import PageComponent from "../components/PageComponent"
import SurveyListItem from "../components/SurveyListItem"
import { useStateContext } from "../contexts/ContextProvider"

function Survey() {
    const { survey } = useStateContext()
    return (
        <>
            <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 md:grid-cols-3">
                <PageComponent title="Survey">
                    {survey.map(survey => (
                        <SurveyListItem survey = { survey } key = { survey.id } />
                    ))}
                </PageComponent>
            </div>
        </>
    )
}

export default Survey