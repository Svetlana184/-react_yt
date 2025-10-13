

const Conditials = ({isValid}) => {

    if(isValid) return <ValidPassword/>
    return <InvalidPassword/>   

}
const ValidPassword= ()=> <h5>Valid</h5>;
const InvalidPassword= ()=> <h5>Invalid</h5>;
export default Conditials