import { useState } from "react";
import "../documentSubmissionForm/DocumentSubmissionForm.css"

export default function DocumentSubmissionForm(){
    const [email, setEmail] = useState("");
    const [name, setName] = useState("");
    const [document, setDocument] = useState("");
    const [selectedDays, setSelectedDays] = useState([]);

  const handleCheckboxChange = (event) => {
    const { value, checked } = event.target;

    if (checked) {
      setSelectedDays([...selectedDays, value]);
    } else {
      const updatedDays = selectedDays.filter((day) => day !== value);
      setSelectedDays(updatedDays);
    }
  };

    function handleSubmit(event) {
      event.preventDefault();
  
      const user = {
        email: email,
        name: name,
        file: document,
        days: selectedDays
        }

        console.log('Inputs retrieved', user)
        fetchData(user);
        setName('');
        setEmail('');
        setDocument('');
    }
  
    async function fetchData(user){
      const formData = new FormData();
      formData.append('document', user.file);

      const requestPDFGeneration =
       await fetch('http://localhost:8080/pdf/generateDeclaration?' 
       + new URLSearchParams({
        studentName: user.name,
        studentEmail: user.email,
        studentPresencialDays: user.days
      }),
      {
        method:"POST",
        body: formData
      });
      const responseBody=await requestPDFGeneration.json();
      //const responseFromRequestPDFGeneration = await requestPDFGeneration.status();
      
      //console.log(`Status from request: ${responseFromRequestPDFGeneration}`);
    }
  
    return (
      <div id="form-div">
        <form onSubmit={handleSubmit} id="form-style">
        <h1>Submit your document for approval</h1>
        <label className="file-input-style"> Enrollment Document &nbsp;
            <input
              id="file-input-field"
              type="file"
              required
              value={document}
              onChange={(event) => setDocument(event.target.value)}
            />
          </label>
          <label htmlFor="file-input-field" className="custom-file-upload">
            Choose File
          </label>
          <label> Email &nbsp;
            <input
              type="text"
              required
              value={email}
              onChange={(event) => setEmail(event.target.value)}
            />
          </label>
          <label> Name &nbsp;
            <input
              type="password"
              required
              value={name}
              onChange={(event) => setName(event.target.value)}
            />
          </label>

        <div className="checkbox-group">
        <label className={`checkbox-button ${selectedDays.includes('Monday') && 'checked'}`}>
          <input
            type="checkbox"
            value="Monday"
            checked={selectedDays.includes('Monday')}
            onChange={handleCheckboxChange}
          />
          Monday
        </label>
        <label className={`checkbox-button ${selectedDays.includes('Tuesday') && 'checked'}`}>
          <input
            type="checkbox"
            value="Tuesday"
            checked={selectedDays.includes('Tuesday')}
            onChange={handleCheckboxChange}
          />
          Tuesday
        </label>
        <label className={`checkbox-button ${selectedDays.includes('Wednesday') && 'checked'}`}>
          <input
            type="checkbox"
            value="Wednesday"
            checked={selectedDays.includes('Wednesday')}
            onChange={handleCheckboxChange}
          />
          Wednesday
        </label>
        <label className={`checkbox-button ${selectedDays.includes('Thursday') && 'checked'}`}>
          <input
            type="checkbox"
            value="Thursday"
            checked={selectedDays.includes('Thursday')}
            onChange={handleCheckboxChange}
          />
          Thursday
        </label>
        <label className={`checkbox-button ${selectedDays.includes('Friday') && 'checked'}`}>
          <input
            type="checkbox"
            value="Friday"
            checked={selectedDays.includes('Friday')}
            onChange={handleCheckboxChange}
          />
          Friday
        </label>
        <label className={`checkbox-button ${selectedDays.includes('Saturday') && 'checked'}`}>
          <input
            type="checkbox"
            value="Saturday"
            checked={selectedDays.includes('Saturday')}
            onChange={handleCheckboxChange}
          />
          Saturday
        </label>
        
        {/* Add similar checkboxes for other days of the week */}
      </div>

          <button type="submit"> Submit </button>
        </form>
      </div>
    );
}