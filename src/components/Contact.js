import React, { useState } from 'react';
import emailjs from 'emailjs-com';
import '../style/contactUs.css';

const Contact = () => {

  const initialFormData = {
    firstName: '',
    lastName: '',
    email: '',
    phoneNumber: '',
    subject: '',
    message: ''
  };
  const [formData, setFormData] = useState(initialFormData);

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const validate = () => {
    let errors = {};

    if (!formData.firstName) {
      errors.firstName = 'First name is required';
    }

    if (!formData.lastName) {
      errors.lastName = 'Last name is required';
    }

    if (!formData.email) {
      errors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      errors.email = 'Email address is invalid';
    }

    if (!formData.message) {
      errors.message = 'Message is required';
    }
    return errors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    // Send email to admin
    emailjs.send('service_idgwldj', 'template_d964yr9', formData, 'E_6iUGnFsrulQ6MqW')
      .then((result) => {
        console.log(result);
        alert('Message sent successfully!');
        setFormData(initialFormData);
      }, (error) => {
        console.log(error.text);
        alert('Failed to send the message to the admin, please try again.');
      });

    // Prepare auto-reply email data
    // const autoReplyData = {
    //   firstName: formData.firstName,
    //   lastName: formData.lastName,
    //   email: formData.email,
    //   message: formData.message
    // };

    // Send auto-reply email to customer
    // emailjs.send('service_idgwldj', 'template_opryh6j', formData, 'E_6iUGnFsrulQ6MqW')
    //   .then((result) => {
    //     console.log(result.text);
    //     alert('Message sent successfully and auto-reply sent to the customer!');
    //   }, (error) => {
    //     console.log(error.text);
    //     alert('Failed to send the auto-reply, but message sent to the admin.');
    //   });
  };

  return (
    <div className="contact-us">
      <div className="contact-banner">
        <h1>Contact Us</h1>
        <p>
          Smartblink is dedicated to transforming ordinary homes into smart homes, making life more convenient, secure, and energy-efficient.
        </p>
      </div>
      <div className="contact-content">
        <div className="contact-info">
          <h2>Contact Information</h2>
          <p>Say something to start a live chat!</p>
          <p>📞 +1</p>
          <p>✉️ info@smartblink.ca</p>
          <p>📍 Toronto, Ontario</p>
          <div className="social-icons">
            <i className="fab fa-twitter"></i>
            <i className="fab fa-instagram"></i>
            <i className="fab fa-facebook"></i>
          </div>
        </div>
        <form className="contact-form" onSubmit={handleSubmit}>
          <div className="form-group">
            <div className="input-group">
              <label htmlFor="firstName">First Name</label>
              <input
                type="text"
                name="firstName"
                id="firstName"
                placeholder="First Name"
                value={formData.firstName}
                onChange={handleChange}
              />
              {errors.firstName && <p className="error">{errors.firstName}</p>}
            </div>
            <div className="input-group">
              <label htmlFor="lastName">Last Name</label>
              <input
                type="text"
                name="lastName"
                id="lastName"
                placeholder="Last Name"
                value={formData.lastName}
                onChange={handleChange}
              />
              {errors.lastName && <p className="error">{errors.lastName}</p>}
            </div>
          </div>
          <div className="form-group">
            <div className="input-group">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                name="email"
                id="email"
                placeholder="Email"
                value={formData.email}
                onChange={handleChange}
              />
              {errors.email && <p className="error">{errors.email}</p>}
            </div>
            <div className="input-group">
              <label htmlFor="phoneNumber">Phone Number</label>
              <input
                type="text"
                name="phoneNumber"
                id="phoneNumber"
                placeholder="Phone Number"
                value={formData.phoneNumber}
                onChange={handleChange}
              />
            </div>
          </div>
          <div className="form-group">
            <div className="input-group">
              <label>Select Subject</label>
              <div className="radio-group">
                <input
                  type="radio"
                  name="subject"
                  value="General Inquiry 1"
                  onChange={handleChange}
                /> General Inquiry 1
              </div>
              <div className="radio-group">
                <input
                  type="radio"
                  name="subject"
                  value="General Inquiry 2"
                  onChange={handleChange}
                /> General Inquiry 2
              </div>
              <div className="radio-group">
                <input
                  type="radio"
                  name="subject"
                  value="General Inquiry 3"
                  onChange={handleChange}
                /> General Inquiry 3
              </div>
              <div className="radio-group">
                <input
                  type="radio"
                  name="subject"
                  value="General Inquiry 4"
                  onChange={handleChange}
                /> General Inquiry 4
              </div>
              {errors.subject && <p className="error">{errors.subject}</p>}
            </div>
          </div>
          <div className="form-group">
            <div className="input-group">
              <label htmlFor="message">Message</label>
              <textarea
                name="message"
                id="message"
                placeholder="Write your message.."
                value={formData.message}
                onChange={handleChange}
              ></textarea>
              {errors.message && <p className="error">{errors.message}</p>}
            </div>
          </div>
          <button type="submit">Send Message</button>
        </form>
      </div>
    </div>
  );
};

export default Contact;



// for the autoreplay template code for the emailjs
// <!DOCTYPE html>
// <html lang="en">
// <head>
//   <meta charset="UTF-8">
//   <meta name="viewport" content="width=device-width, initial-scale=1.0">
//   <style>
//     body {
//       font-family: Arial, sans-serif;
//       background-color: #f4f4f4;
//       margin: 0;
//       padding: 0;
//       color: #333;
//     }
//     .email-container {
//       max-width: 600px;
//       margin: 20px auto;
//       background-color: #fff;
//       padding: 20px;
//       border-radius: 8px;
//       box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
//     }
//     .email-header {
//       text-align: center;
//       border-bottom: 2px solid #eaeaea;
//       padding-bottom: 10px;
//       margin-bottom: 20px;
//     }
//     .email-header h1 {
//       margin: 0;
//       font-size: 24px;
//       color: #007BFF;
//     }
//     .email-content {
//       line-height: 1.6;
//     }
//     .email-content p {
//       margin: 0 0 10px;
//     }
//     .email-footer {
//       text-align: center;
//       border-top: 2px solid #eaeaea;
//       padding-top: 10px;
//       margin-top: 20px;
//       font-size: 12px;
//       color: #777;
//     }
//     .email-footer a {
//       color: #007BFF;
//       text-decoration: none;
//     }
//   </style>
// </head>
// <body>
//   <div class="email-container">
//     <div class="email-header">
//       <h1>Thank You for Contacting Us</h1>
//     </div>
//     <div class="email-content">
//       <p>Dear {{firstName}} {{lastName}},</p>
//       <p>Thank you for getting in touch with Smartblink. We have received your message and will get back to you shortly.</p>
//       <p>In the meantime, here is a random message for you:</p>
//       <blockquote>
//         <p>"At Smartblink, we believe in making your home smarter, one step at a time. Our team is dedicated to bringing the best in technology to enhance your living experience."</p>
//       </blockquote>
//       <p><strong>Your Message:</strong></p>
//       <p>{{message}}</p>
//     </div>
//     <div class="email-footer">
//       <p>Smartblink | Transforming homes into smart homes.</p>
//       <p><a href="https://www.smartblink.com">www.smartblink.com</a></p>
//     </div>
//   </div>
// </body>
// </html>



// Shaily Code
// const Contact = () => {
//   return (
//     <div>
//       <div className="image-container">
//       <img src={support} alt="Descriptive Text" className="image" />
//       <div className="overlay">
//         <div className='overlay-text'>
//         <h1 className='display-2'>HELP CENTER</h1>
//         <p className='body-1 text-break text-wrap'>SmartBlibk is dedicated to transform ordinary homes into smart homes, making life more convenient, secure and energy-efficient</p>
//         </div>        
//       </div>
//     </div>
//     </div>
//   )
// }

