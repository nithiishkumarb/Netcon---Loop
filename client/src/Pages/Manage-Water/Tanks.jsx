import React from 'react'

const Tanks = () => {
    return (
        <div className='Tanks'>
            <h3>Tanks :</h3>
            <table className='Tank-list'>
                <thead className='Tank-header'>
                    <tr>
                        <th>S.No</th>
                        <th>Tank Id</th>
                        <th>Active</th>
                    </tr>
                </thead>
                <tbody>
                    <tr className='Tank-Body'>
                        <td>1.</td>
                        <td>1234</td>
                        <td>Online</td>
                    </tr>
                    <tr className='Tank-Body'>
                        <td>2.</td>
                        <td>1234</td>
                        <td>Online</td>
                    </tr>
                    <tr className='Tank-Body'>
                        <td>3.</td>
                        <td>1234</td>
                        <td>Online</td>
                    </tr>
                    <tr className='Tank-Body'>
                        <td>4.</td>
                        <td>1234</td>
                        <td>Online</td>
                    </tr>
                    <tr className='Tank-Body'>
                        <td>5.</td>
                        <td>1234</td>
                        <td>Online</td>
                    </tr>
                    <tr className='Tank-Body'>
                        <td>6.</td>
                        <td>1234</td>
                        <td>Online</td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}

export default Tanks