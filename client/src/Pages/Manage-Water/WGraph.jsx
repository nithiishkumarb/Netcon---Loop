import "./manage-water.css"
const WGraph = () => {
    return (
        <div className='WGraph-container'>
            <h3>Graph :</h3>
            <div className="WGraph-Details">
                <span>From: <input type='date'/></span>
                <span>To: <input type='date'/></span>
                <button>Submit</button>
                <button>Download</button>
            </div>
        </div>
    )
}

export default WGraph