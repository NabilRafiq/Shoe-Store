import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import {DataContext} from '../Context'
import '../css/Contact.css'

export class Contact extends Component {

    static contextType = DataContext;

    render() {

        return (
            <div className="contact">
                <h1 className='hcontact'>Contact Form</h1>
  <form >

    <label htmlFor="fname">First Name</label>
    <input type="text" id="fname" name="firstname" placeholder="Your name.."/>

    <label htmlFor="lname">Last Name</label>
    <input type="text" id="lname" name="lastname" placeholder="Your last name.."/>

    <label htmlFor="country">Country</label>
    <select id="country" name="country">
      <option value="australia">Australia</option>
      <option value="canada">Canada</option>
      <option value="usa">USA</option>
    </select>

    <label htmlFor="subject">Subject</label>
    <textarea id="subject" name="subject" placeholder="Write something.." ></textarea>

    <input type="submit" value="Submit"/>

  </form>
</div>
        )
    }
}

export default Contact