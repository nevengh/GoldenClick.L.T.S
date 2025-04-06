import './Form.css'

const Form = () => {
  return (
    <div className="form-container">
      <form className="form">
        
        <div className="form-group">
          <label> Name</label>
          <input type="text" id="firstName" name="firstName" required />
        </div>

        <div className="form-group">
          <label>Phone</label>
          <input type="tel" id="phone" name="phone" required />
        </div>

        <div className="form-group">
          <label>Company Email</label>
          <input type="email" id="email" name="email" required />
        </div>

        <div className="form-group">
          <label>Select Service</label>
          <select id="service" name="service" required>
            <option value="">Select a Service</option>
            <option value="seo">SEO</option>
            <option value="ppc">PPC Advertising</option>
            <option value="social">Social Media Management</option>
            <option value="email">Email Marketing</option>
            <option value="branding">Branding</option>
            <option value="web">Website Development</option>
            <option value="app">Mobile App Development</option>
          </select>
        </div>

        <div className="form-group">
          <label>How Can We Help You?</label>
          <textarea id="textarea" name="textarea" required></textarea>
        </div>

        <button className="form-submit-btn" type="submit">Submit</button>

      </form>
    </div>
  )
}

export default Form;
