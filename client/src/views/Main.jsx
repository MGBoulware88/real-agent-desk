import React from 'react';
import { Routes, Route } from 'react-router-dom';
import RegistrationForm from './Registration';
import LoginForm from './Login';
import PasswordReset from './Password';
import UserProfile from './UserProfile';
import EditUserProfile from './EditUserProfile';
import Leads from './Leads';
import CustomModal from '../components/LeadForm';
import LeadDetails from './LeadDetails';
import EmailSent from './EmailSent';

export default function Main() {
    const user = {
        email: "john.doe@example.com",
        password: "password123",
        fullName: "John Doe",
        location: "New York, NY",
        title: "Software Engineer",
        profilePicture: "https://randomuser.me/api/portraits/men/9.jpg"
    };
    const leads = [
        ["First Name", "Last Name", "Email", "Phone Number", "Status", "Buying", "Selling", "Market Area"],
        ['John', 'Doe', 'john.doe@example.com', '555-123-4567', "Potential", "True", "False", 'New York'],
        ['Jane', 'Smith', 'jane.smith@example.com', '555-987-6543', "First-Contact", "False", "True", 'Los Angeles'],
        ['Bob', 'Johnson', 'bob.johnson@example.com', '555-555-5555', "First-Contact", "True", "True", 'Chicago'],
    ];
    return (
        <div className='p-5'>
            <Routes>
                <Route path="/signin" element={<LoginForm />} />

                # the user that is logged in
                <Route path="/user_profile" element={<UserProfile user={user} />} />
                <Route path="/edit_user_profile/:id" element={<EditUserProfile user={user} />} />

                <Route path="/leads" element={<Leads leads={leads}/>} />
                <Route path="/add_lead" element={<CustomModal />} />
                <Route path="/lead_details/:id" element={<LeadDetails />} />

                <Route path="/register" element={<RegistrationForm />} />
                <Route path="/password" element={<PasswordReset />} />
                <Route path="/reset" element={<EmailSent/>} />

                ## the root route takes the user to the login form "home"
                <Route path="*" element={<LoginForm />} />
            </Routes>
        </div>
    )
}