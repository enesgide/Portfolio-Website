import { useState } from 'react'
import { useHistory } from 'react-router-dom'

const Contact = () => {
    const [name, setName] = useState('');
    const [message, setMessage] = useState('');
    const [type, setType] = useState('Request');

    const history = useHistory();

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Handle submit");
        console.table({ name, message, type });
        
        history.push("/");
    }

    return (
        <div className="content">
            <h1>Contact page</h1>

            <div>
                <form onSubmit={handleSubmit} style={{border:'4px solid black', height: '500px',
            display: 'flex', alignItems: 'baseline', justifyContent: 'space-evenly'}}>
                    <div>
                        <label>Name</label>
                        <input type="text" required value={name} onChange={(e) => setName(e.target.value)}/>
                    </div>

                    <div style={{marginTop: '32px', alignSelf: 'center', order: '-1'}}>
                        <label>Message</label>
                        <textarea required value={message} onChange={(e) => setMessage(e.target.value)}/>               
                    </div>                

                    <div style={{marginTop: '32px'}}>
                        <label>Select type</label>
                        <select value={type} onChange={(e) => setType(e.target.value)}>
                            <option value="Message">Message</option>
                            <option value="Question">Question</option>
                            <option value="Request">Request</option>
                        </select>
                    </div>

                    <button>Submit</button>
                </form>
            </div>

            <p>Name={ name || 'N/A'}, Message = { message || 'N/A'}, Type = { type || 'N/A'}</p>
        </div>
        
    )
}

export default Contact;