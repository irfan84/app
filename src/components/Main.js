import React, {useEffect, useState} from 'react';
import M from 'materialize-css/dist/js/materialize.min';

const Main = () => {

    // Initial State
    const [data, setData] = useState({
        first: '',
        second: '',
        result: '?'
    });

    // Destructuring
    const { first, second, result } = data;

    // UseEffect Hook
    useEffect(() => {
        if(second.length === first.length){
            // Converted to array, reversed and joined back to string
            const reversed = second.split('').reverse().join('');
            if(reversed === first) {
                setData({...data,
                    result: 'Correct!'});
            }
        }
        else{
            setData({...data,
                result: 'Incorrect, try again'})
        } // eslint-disable-next-line
    }, [first, result, second]);

    // Hook to toggle between fields
    const [field, toggleField] = useState(true);

    // OnChange Function
    const onChange = (e) => {
        setData({...data, [e.target.name]: e.target.value});
    };

    // onClick Function
    const onClick = () => {
        if(first === ''){
            return M.toast({html: 'Please enter first number', classes: 'rounded'});
        }
        toggleField(!field);
    };


    return (
        <div className="row">
                        {field ?
                            (
                                // First Field
                                <div className="input-field col s12">
                                <input placeholder="First Number" name="first" type="text"
                                            className="validate" value={first} onChange={e => onChange(e)} />
                                    <label className="active" htmlFor="first">Enter any number</label>
                                <button className="waves-effect waves-light btn" onClick={onClick}>Submit</button>
                                </div>
                            ) :
                            (
                                // Second Field
                                <div className="input-field col s12">
                                    <input placeholder="Second Number" name="second" type="text" maxLength={first.length}
                                            className="validate" value={second} onChange={e => onChange(e)} />
                                    <label className="active" htmlFor="second">Now enter the same number in reverse</label>
                                    <h5>Result: {second.length !== first.length ? ('?') : (result)}</h5>
                                    <button className="waves-effect waves-light btn" onClick={onClick}>Go Back</button>
                                </div>
                            )
                        }
                </div>
    )
};

export default Main