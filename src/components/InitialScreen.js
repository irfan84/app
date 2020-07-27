import React, {useEffect, useState} from 'react';

const InitialScreen = () => {

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
        }
    }, [firstNo, result, secondNo]);

    // Hook to toggle between forms
    const [form, toggleForm] = useState('initial');

    // OnChange Function
    const onChange = (e) => {
        setData({...data, [e.target.name]: e.target.value});
    };

    // onClick Function
    const onClick = () => {
      toggleForm('second');
    };

    return (
        <div className="row">
            <form className="col s12">
                <div className="row">
                    <div className="input-field col s6">
                        {form === 'initial' ?
                            (
                                <div><input placeholder="Placeholder" name="firstNo" type="text"
                                            className="validate" value={firstNo} onChange={e => onChange(e)} />
                            <label htmlFor="first_name">Enter any Number</label></div>
                            ) :
                            (
                                <div><input placeholder="Placeholder" name="secondNo" type="text"
                                            className="validate" value={secondNo} onChange={e => onChange(e)} />
                                <label htmlFor="first_name">Now enter the same number in reverse</label></div>
                            )
                        }
                            </div>
                            <div className="input-field col s6">
                                {form === 'initial' ?
                                    (
                                        <a className="waves-effect waves-light btn" onClick={onClick}>Submit</a>
                                    ) :
                                    (
                                        <h5>{secondNo === '' ? ('?') : (result)}</h5>
                                    )
                                }
                    </div>
                </div>
            </form>
        </div>
     )
};

export default InitialScreen