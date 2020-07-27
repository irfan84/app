import React, {useEffect, useState} from 'react';

const Main = () => {

    // Initial State
    const [data, setData] = useState({
        firstNo: '',
        secondNo: '',
        result: '?'
    });

    // Destructuring
    const { firstNo, secondNo, result } = data;

    // UseEffect Hook
    useEffect(() => {
        if(secondNo.length === firstNo.length){
            // Converted to array, reversed and joined back to string
            const reversed = secondNo.split('').reverse().join('');
            if(reversed === firstNo) {
                setData({...data,
                    result: 'Correct!'});
            }
        }
        else{
            setData({...data,
                result: 'Incorrect, try again'})
        } // eslint-disable-next-line
    }, [firstNo, result, secondNo]);

    // Hook to toggle between forms
    const [firstForm, toggleFirstForm] = useState(true);

    // OnChange Function
    const onChange = (e) => {
        setData({...data, [e.target.name]: e.target.value});
    };

    // onClick Function
    const onClick = () => {
        toggleFirstForm(!firstForm);
    };


    return (
        <div className="row">
                        {firstForm ?
                            (
                                // First Field
                                <div className="input-field col s6">
                                <input placeholder="Placeholder" name="firstNo" type="text"
                                            className="validate" value={firstNo} onChange={e => onChange(e)} />
                                    <label className="active" htmlFor="firstNo">Enter any number</label>
                                <button className="waves-effect waves-light btn" onClick={onClick}>Submit</button>
                                </div>
                            ) :
                            (
                                // Second Field
                                <div className="input-field col s6">
                                    <input placeholder="Placeholder" name="secondNo" type="text" maxLength={firstNo.length}
                                            className="validate" value={secondNo} onChange={e => onChange(e)} />
                                    <label className="active" htmlFor="secondNo">Now enter the same number in reverse</label>
                                    <h5>Result: {secondNo.length !== firstNo.length ? ('?') : (result)}</h5>
                                    <button className="waves-effect waves-light btn" onClick={onClick}>Go Back</button>
                                </div>
                            )
                        }
                </div>
    )
};

export default Main