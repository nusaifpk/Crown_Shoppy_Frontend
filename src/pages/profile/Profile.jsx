import React, { useEffect, useState } from 'react';
import './Profile.css';
import { useNavigate } from 'react-router-dom';
import { Button } from '@mui/material';
import toast from 'react-hot-toast';
import tempLogo from '../../assets/profile.png';
import userInstance from '../../axios_interceptors/user_axios';

const Profile = () => {
    const navigate = useNavigate();
    const userId = localStorage.getItem('userId');

    useEffect(() => {
        if (!localStorage.getItem('userToken')) {
            navigate('/');
        }
    }, [navigate]);

    const [profile, setProfile] = useState({});
    const [editProfile, setEditProfile] = useState('');
    const [isEditing, setIsEditing] = useState(false);
    const [profileImg, setProfileImg] = useState(null);
    const [previewImg, setPreviewImg] = useState('');
    const [error, setError] = useState('');

    useEffect(() => {
        const fetchUserProfile = async () => {
            try {
                const response = await userInstance.get(`/profile/${userId}`);
                setProfile(response.data.data);
                setEditProfile(response.data.data.name);
                setPreviewImg(response.data.data.profileImg);
            } catch (error) {
                console.error('Error fetching user profile:', error);
                // Handle error appropriately, e.g., redirect or show error message
            }
        };
        fetchUserProfile();
    }, [userId]);

    const handleEditProfile = async () => {
        try {
            const formData = new FormData();
            if (profileImg) {
                formData.append('profileImg', profileImg);
            } else {
                setError('Please select an image to update.');
                return;
            }

            await userInstance.put(`/profile/${userId}`, formData);

            setProfile({ ...profile, profileImg: previewImg }); // Assuming previewImg reflects updated profile image
            setIsEditing(false);
            toast.success('Profile image updated successfully.');
        } catch (error) {
            console.error('Error updating profile image:', error);
            setError('Failed to update profile image. Please try again.');
        }
    };

    const handleImageChange = (e) => {
        const file = e.target.files[0];
        setProfileImg(file);
        setPreviewImg(URL.createObjectURL(file));
        setIsEditing(true);
    };

    return (
        <div style={{ minHeight: '90vh' }}>
            {profile && (
                <div className='profile-container'>
                    <div className='profile_section'>
                        <div className='profile_main'>
                            <div className='profile_main_left'>
                                <div className='profile_image_wrapper'>
                                    <img 
                                        src={previewImg || tempLogo} 
                                        alt='Profile' 
                                    />
                                    <input 
                                        type="file" 
                                        accept="image/*" 
                                        style={{ display: 'none' }} 
                                        id="profileImgInput"
                                        onChange={handleImageChange}
                                    />
                                    <label htmlFor="profileImgInput" className='edit-icon'>
                                        <i className='fas fa-edit' />
                                    </label>
                                </div>
                            </div>
                            <div className='profile_main_right'>
                                <h1>{profile.name}</h1>
                                <p>{profile.email}</p>
                            </div>
                            <hr className='profile_hr' />
                        </div>
                    </div>
                    <div className='profile_details'>
                        <form>
                            <label>
                                Name: <input type='text' value={profile.name} readOnly />
                            </label>
                            <label>
                                Email: <input type='text' value={profile.email} readOnly />
                            </label>
                            <label>
                                Phone: <input type='text' value={profile.phone} readOnly />
                            </label>
                        </form>
                        {isEditing && (
                            <span className='save-icon' onClick={handleEditProfile}>
                                <Button variant="contained" color="success">Save</Button>
                            </span>
                        )}
                        {error && <p className='error-message'>{error}</p>}
                    </div>
                </div>
            )}
        </div>
    );
};

export default Profile;
