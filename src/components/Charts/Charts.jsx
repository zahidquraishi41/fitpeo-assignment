import CustomersPieChar from "./CustomersPieChar";
import EarningsChart from "./EarningsChart";


const Charts = () => {
    return <div className="container">
        <div className="row">
            <div className="col-md-8"><EarningsChart /></div>
            <div className="col-md-4"><CustomersPieChar /></div>
        </div>
    </div>
}

export default Charts

