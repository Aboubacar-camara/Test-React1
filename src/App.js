
import './App.css';

function App() {
  return (
    <div className="App">
     <div className="container mt-3 mb-3">
   <div className="mb-3"> 
      <label htmlFor="exampleFormControlInput1" className="form-label">Name</label>
      <input type="name" className="form-control" id="exampleFormControlInput1" />
   </div>
   <div className="mb-3">
      <label htmlFor="exampleFormControlInput1" className="form-label">Mobile</label>
      <input type="mobile" className="form-control" id="exampleFormControlInput1" />
   </div>
   <div className="mb-3">
      <label htmlFor="exampleFormControlInput1" className="form-label">Email address</label>
      <input type="email" className="form-control" id="exampleFormControlInput1"
 placeholder="name@example.com" />
   </div>
   <div className="mb-3">
      <label htmlFor="sel1">Menu</label>
      <select className="form-control" id="sel1">
         <option value="Select">Select</option>
         <option value="Veg Biryani">Veg Biryani</option>
         <option value="BBQ Chicken Wings">BBQ Chicken Wings</option>
         <option value="Rasmalai">Rasmlai</option>
         <option value="Beer">Beer</option>
      </select>
   </div>
   <div className="mb-3">
      <label htmlFor="exampleFormControlTextarea1" className="form-label">Order Details</label>
      <textarea className="form-control" id="exampleFormControlTextarea1" rows="3" />
   </div>
   <div className="mb-3">
      <button type='submit' className="btn btn-success">Submit</button>
      <button type='reset' className="btn btn-danger">Cancel</button>
   </div>
</div>
    </div>
  );
}

export default App;
