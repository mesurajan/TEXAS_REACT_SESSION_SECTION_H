
function Contact() {
  return (
    <>
    <div className ="contact-page">

    <div>
      <form className="contact-form">
        <div className="form-group">
        <label htmlFor="name">Name:</label>
        <input type="text" id="name" name="name" required className="form-control" />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email:</label>
          <input type="email" id="email" name="email" required className="form-control" />
        </div>
        <div className="form-group">
          <label htmlFor="message">Message:</label>
          <textarea id="message" name="message" required className="form-control"></textarea>
        </div>
        <button type="submit" className="primary-btn">
          Send Message
        </button>
      </form>
    </div>
    </div>
    </>
  )
}

export default Contact