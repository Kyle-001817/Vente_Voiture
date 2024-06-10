import React from 'react';

function Right_Filter(){
    return(
        <div className='Filter'>
        <h2>Filter</h2>
        <table>
            <tr>
                <td><label htmlFor="min">Price min: </label></td>
                <td><input type="text" /></td>
            </tr>
            <tr>
                <td><label htmlFor="">Price max: </label></td>
                <td><input type="text" /></td>
            </tr>
            <tr>
                <td><input type="button" value="Search" /></td>
            </tr>
        </table>
        </div>
    );
}

export default Right_Filter;