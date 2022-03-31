import HabitsHeader from "./HabitsHeader";
import HabitsMain from "./HabitsMain";
import HabitsFooter from "./HabitsFooter";

function HabitsPage(props){
    return(
        <>
            <HabitsHeader />
            <HabitsMain token={props.token} />
            <HabitsFooter />
        </>
    )
}

export default HabitsPage;