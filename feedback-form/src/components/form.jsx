import React , {useState} from "react";
import "../styles/form.css";

function Form() {
    const [formData, setFormData]=useState ({
        name:"",
        feedback: "",
    });

    const [arr, setArr] = useState([]);

    function handleChange(e) {
        const {name, value}= e.target;

        setFormData((previousData)=>({ ...previousData,[name]:value,}));
    }

    function handleSubmit(e){
        e.preventDefault();

        setArr((previousData) =>[...previousData, formData]);

        setFormData({name:"", feedback:"",});
    }

    return(
        <div className="container">
            <form className="form" onSubmit={handleSubmit}>
                <h1 className="form-title">FEEDBACK COLLECTOR</h1>
                <label htmlFor="name">Name:</label>

                <input type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                
                placeholder="Enter your name!" required/>

                <label htmlFor="feedback">Feedback:</label>

                <textarea name="feedback" id="feedback"
                value={formData.feedback}
                onChange={handleChange}
                placeholder="Enter your feedback!" required></textarea>

                <button className="formButton" type="submit"> Submit </button>

            </form>
            <div className="feedbackList">
                <h3>Feedback Entries</h3>
                {arr.map((item, index)=>(
                    <div key={index} className="feedbackEntry">
                        <p>
                            <strong>Name:</strong>{item.name}    
                        </p>

                        <p>
                            <strong>Feedback:</strong>{item.feedback}
                        </p>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Form;