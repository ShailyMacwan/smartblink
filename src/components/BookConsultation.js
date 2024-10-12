import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import moment from 'moment-timezone';
import emailjs from 'emailjs-com';
import 'react-datepicker/dist/react-datepicker.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../style/bookConsultation.css';

const BookConsultation = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phoneNumber: '',
    message: '',
    mode: 'Online',
    date: null,
    time: '',
    timeZone: 'America/New_York', 
    estTime: '', 
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    console.log(`Field ${name} changed to ${value}`);
    setFormData({ ...formData, [name]: value });
  };

  const handleDateChange = (date) => {
    console.log(`Date changed to ${date}`);
    setFormData({ ...formData, date, time: '' });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    let validationErrors = {};
    if (!formData.fullName) validationErrors.fullName = 'Full name is required';
    else if (formData.fullName.length < 2) validationErrors.fullName = 'Full name must be at least 2 characters';
    if (!formData.email) validationErrors.email = 'Email is required';
    else if (!/\S+@\S+\.\S+/.test(formData.email)) validationErrors.email = 'Email address is invalid';
    if (!formData.phoneNumber) validationErrors.phoneNumber = 'Phone number is required';
    else if (!/^\d{10}$/.test(formData.phoneNumber)) validationErrors.phoneNumber = 'Phone number is invalid';
    if (!formData.mode) validationErrors.mode = 'Mode is required';
    if (!formData.date) validationErrors.date = 'Date is required';
    if (!formData.time) validationErrors.time = 'Time is required';
    if (!formData.message) validationErrors.message = 'Message is required';
    else if (formData.message.length < 2) validationErrors.message = 'Message must be at least 2 characters';

    console.log('Validation Errors:', validationErrors);

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    try {
      const selectedDateTimeString = moment(formData.date).format('YYYY-MM-DD') + ' ' + formData.time;
      const selectedDateTime = moment.tz(selectedDateTimeString, 'YYYY-MM-DD h:mm A', formData.timeZone);
      const estDateTime = selectedDateTime.clone().tz('America/New_York').format('YYYY-MM-DD HH:mm:ss');
      console.log('Selected Date Time:', selectedDateTime.format('YYYY-MM-DD HH:mm:ss'));
      console.log('EST Date Time:', estDateTime);


    // Send email to admin
    emailjs.send('service_idgwldj', 'template_opryh6j', formData, 'E_6iUGnFsrulQ6MqW')
    .then((result) => {
      console.log(result.text);
      alert('Mail sent successfully.');
    }, (error) => {
      console.log(error.text);
      alert('Failed to send the message to the admin, please try again.');
    });
    
      // setFormData((prevData) => ({ ...prevData, estTime: estDateTime }));

      console.log('Form Data:', { ...formData, estTime: estDateTime });
    } catch (error) {
      console.error('Error converting date/time to EST:', error);
      setErrors({ global: 'There was an error processing your request. Please try again.' });
      return;
    }

  };

  const availableTimes = [
    '12:00 AM', '1:00 AM', '2:00 AM', '3:00 AM', '4:00 AM', '5:00 AM', '6:00 AM', '7:00 AM', '8:00 AM', '9:00 AM', '10:00 AM', '11:00 AM',
    '12:00 PM', '1:00 PM', '2:00 PM', '3:00 PM', '4:00 PM', '5:00 PM', '6:00 PM', '7:00 PM', '8:00 PM', '9:00 PM', '10:00 PM', '11:00 PM'
  ];

  return (
    <div className="container book-consultation">
      <div className="row justify-content-center">
        <div className="col-12 col-lg-8">
          <h1 className="text-center">Book a Consultation</h1>
          <form onSubmit={handleSubmit} className="row">
            {errors.global && <p className="error">{errors.global}</p>}
            <div className="col-md-6">
              <div className="form-group">
                <label htmlFor="fullName">Full Name</label>
                <input
                  type="text"
                  id="fullName"
                  name="fullName"
                  value={formData.fullName}
                  onChange={handleChange}
                  className="form-control"
                />
                {errors.fullName && <p className="error">{errors.fullName}</p>}
              </div>
              <div className="form-group">
                <label htmlFor="email">Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="form-control"
                />
                {errors.email && <p className="error">{errors.email}</p>}
              </div>
              <div className="form-group">
                <label htmlFor="phoneNumber">Phone Number</label>
                <input
                  type="text"
                  id="phoneNumber"
                  name="phoneNumber"
                  value={formData.phoneNumber}
                  onChange={handleChange}
                  className="form-control"
                />
                {errors.phoneNumber && <p className="error">{errors.phoneNumber}</p>}
              </div>
              <div className="form-group">
                <label htmlFor="mode">Mode</label>
                <select id="mode" name="mode" value={formData.mode} onChange={handleChange} className="form-control">
                  <option value="In-Person">In-Person</option>
                  <option value="Online">Online</option>
                </select>
                {errors.mode && <p className="error">{errors.mode}</p>}
              </div>
              <div className="form-group">
                <label htmlFor="message">Share Your Message</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  className="form-control"
                ></textarea>
                {errors.message && <p className="error">{errors.message}</p>}
              </div>
            </div>
            <div className="col-md-6">
              <div className="form-group">
                <label>Select a Date & Time</label>
                <div className="date-picker-container">
                  <DatePicker
                    selected={formData.date}
                    onChange={handleDateChange}
                    dateFormat="MMMM d, yyyy"
                    placeholderText="Select a date"
                    inline
                  />
                </div>
                {errors.date && <p className="error">{errors.date}</p>}
                {formData.date && (
                  <div className="time-picker mt-3">
                    <label htmlFor="time">Select a Time</label>
                    <select id="time" name="time" value={formData.time} onChange={handleChange} className="form-control">
                      <option value="">Select Time</option>
                      {availableTimes.map((time) => (
                        <option key={time} value={time}>
                          {time}
                        </option>
                      ))}
                    </select>
                    {errors.time && <p className="error">{errors.time}</p>}
                  </div>
                )}
              </div>
              <div className="form-group">
                <label htmlFor="timeZone">Time Zone</label>
                <select id="timeZone" name="timeZone" value={formData.timeZone} onChange={handleChange} className="form-control">
                  <option value="America/New_York">Eastern Standard Time (EST)</option>
                  <option value="America/Chicago">Central Standard Time (CST)</option>
                  <option value="America/Denver">Mountain Standard Time (MST)</option>
                  <option value="America/Los_Angeles">Pacific Standard Time (PST)</option>
                  <option value="Asia/Kolkata">Indian Standard Time (IST)</option>
                  <option value="Etc/GMT">Greenwich Mean Time (GMT)</option>
                  <option value="Etc/UTC">Coordinated Universal Time (UTC)</option>
                </select>
              </div>
            </div>
            <div className="col-12">
              <button type="submit" className="btn btn-primary btn-block">Book Now</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default BookConsultation;
