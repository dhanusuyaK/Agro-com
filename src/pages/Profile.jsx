import React, { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import defaultprofile from '../assets/default-profile.jpg';
import AddPost from './post'; // Ensure this is the correct path to your Post component

const Profile = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const { state: { username } = {} } = location;

  const [user, setUser] = useState({
    profilePicture: defaultprofile,
    username: username || '', // Set default value as empty string if username is not provided in state
    fullname: '',
    bio: '',
    creditsCount: 0,
    followersCount: 0,
    followingCount: 0
  });
  
  const [posts, setPosts] = useState([]);
  const [activeTab, setActiveTab] = useState('posts');
  const [isLoading, setIsLoading] = useState(true);
  const [editMode, setEditMode] = useState(false);
  const [form, setForm] = useState({
    profilePicture: '',
    username: '',
    bio: ''
  });

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('http://localhost:5000/api/profile/edit'); // Adjust the API endpoint as necessary
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await response.json();
        setUser(data.user);
        setPosts(data.posts);
        setForm({
          profilePicture: data.user.profilePicture,
          username: data.user.username,
          fullname: data.user.fullname,
          bio: data.user.bio
        });
      } catch (error) {
        console.error('Error fetching user data:', error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, []);
  const handleTabChange = (tab) => {
    setActiveTab(tab);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setForm((prevForm) => ({ ...prevForm, [name]: value }));
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    const reader = new FileReader();
    reader.onload = () => {
      setForm((prevForm) => ({ ...prevForm, profilePicture: reader.result }));
    };
    reader.readAsDataURL(file);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('http://localhost:5000/api/profile/edit', {
        method: 'PUT', // or 'PATCH'
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(form)
      });
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      const updatedUser = await response.json();
      setUser(updatedUser);
      setEditMode(false);
    } catch (error) {
      console.error('Error updating user data:', error);
    }
  };

  const handleCancel = () => {
    setForm({
      profilePicture: user.profilePicture,
      username: user.username,
      bio: user.bio
    });
    setEditMode(false);
  };

  const handleAddClick = () => {
    navigate("/createpost");
  };

  const renderPosts = () => {
    if (isLoading) {
      return <p>Loading posts...</p>;
    }

    if (activeTab == 'posts' && !posts.length) {
      return (
        <div className="no-posts">
          <p style={{ marginLeft: '5px' }}>Share your first photo!</p>
          <button onClick={handleAddClick} style={{ marginLeft: '50px' }}>Share</button>
        </div>
      );
    }

    return posts.map((post) => (
      <AddPost key={post.id} post={post} />
    ));
  };

  return (
    <div style={{ padding: '2rem', color: '#34cc54', backgroundColor: '#000000', minHeight: '100vh', width: '100%', position: 'fixed' }}>
      {isLoading ? (
        <div style={{ textAlign: 'center', color: '#34cc54' }}>Loading...</div>
      ) : (
        <>
          <div style={{ display: 'flex', alignItems: 'center', marginBottom: '2rem' }}>
            <img
              src={form.profilePicture}
              alt="Profile"
              style={{ width: '250px', height: '250px', borderRadius: '50%', objectFit: 'cover', marginRight: '2rem' }} // Increased size of profile picture
            />
            <div style={{ flex: 1 }}>
              {editMode ? (
                <form onSubmit={handleSubmit}>
                  <div style={{ marginBottom: '1rem' }}>
                    <label style={{ display: 'block', marginBottom: '0.5rem' }}>Profile Picture:</label>
                    <input type="file" accept="image/*" onChange={handleFileChange} />
                  </div>
                  <div style={{ marginBottom: '1rem' }}>
                    <label style={{ display: 'block', marginBottom: '0.5rem' }}>Name:</label>
                    <input
                      type="text"
                      name="fullname"
                      value={form.fullname}
                      onChange={handleInputChange}
                      style={{ width: '100%', padding: '0.5rem', backgroundColor: '#1c1c1c', border: 'none', color: '#34cc54' }}
                    />
                  </div>
                  <div style={{ marginBottom: '1rem' }}>
                    <label style={{ display: 'block', marginBottom: '0.5rem' }}>Bio:</label>
                    <textarea
                      name="bio"
                      value={form.bio}
                      onChange={handleInputChange}
                      style={{ width: '100%', padding: '0.5rem', backgroundColor: '#1c1c1c', border: 'none', color: '#34cc54' }}
                    />
                  </div>
                  <button
                    type="submit"
                    onClick={handleSubmit}
                    style={{ padding: '0.5rem 1rem', backgroundColor: '#34cc54', border: 'none', color: '#000000', cursor: 'pointer', marginRight: '0.5rem' }}
                  >
                    Save
                  </button>
                  <button
                    type="button"
                    onClick={handleCancel}
                    style={{ padding: '0.5rem 1rem', backgroundColor: '#34cc54', border: 'none', color: '#000000', cursor: 'pointer' }}
                  >
                    Cancel
                  </button>
                </form>
              ) : (
                <>
                  <h3 style={{ margin: 0, fontSize: '2rem' }}>{user.username}</h3>
                  <div style={{ display: 'flex', gap: '1rem', margin: '1rem 0' }}>
                    <span>{posts.length} Posts</span>
                    <span>{user.followersCount} Followers</span>
                    <span>{user.followingCount} Following</span>
                    <span>{user.creditsCount} Credits</span>
                  </div>
                  <h3 style={{ margin: 0, fontSize: '2rem' }}>{user.fullname}</h3>
                  <p>{user.bio}</p>
                  <button
                    onClick={() => setEditMode(true)}
                    style={{ padding: '0.5rem 1rem', backgroundColor: '#34cc54', border: 'none', color: '#000000', cursor: 'pointer', marginRight: '0.5rem' }}
                  >
                    Edit Profile
                  </button>
                  <button
                    onClick={() => navigate('/')}
                    style={{ padding: '0.5rem 1rem', backgroundColor: '#34cc54', border: 'none', color: '#000000', cursor: 'pointer' }}
                  >
                    Back to Home
                  </button>
                </>
              )}
            </div>
          </div>
          <hr style={{ margin: '1rem 0', border: '0.5px solid #807F7F' }} /> {/* Horizontal line */}
          <div style={{ display: 'flex', justifyContent: 'center', gap: '1rem', marginBottom: '2rem' }}>
            <button
              onClick={() => handleTabChange('posts')}
              style={{
                padding: '1rem',
                backgroundColor: activeTab === 'posts' ? '#34cc54' : '#1c1c1c',
                border: 'none',
                color: activeTab === 'posts' ? '#000000' : '#34cc54',
                cursor: 'pointer',
              }}
            >
              Posts
            </button>
            <button
              onClick={() => handleTabChange('saved')}
              style={{
                padding: '1rem',
                backgroundColor: activeTab === 'saved' ? '#34cc54' : '#1c1c1c',
                border: 'none',
                color: activeTab === 'saved' ? '#000000' : '#34cc54',
                cursor: 'pointer',
              }}
            >
              Saved
            </button>
            <button
              onClick={() => handleTabChange('tagged')}
              style={{
                padding: '1rem',
                backgroundColor: activeTab === 'tagged' ? '#34cc54' : '#1c1c1c',
                border: 'none',
                color: activeTab === 'tagged' ? '#000000' : '#34cc54',
                cursor: 'pointer',
              }}
            >
              Tagged
            </button>
            <button
              onClick={handleAddClick}
              style={{
                backgroundColor: "#000000",
                color:"#34cc54",
                cursor: "pointer",
                border: "none",
                height: "50px",
                width: "50px",
                position: "relative",
                overflow: "hidden",
                minWidth: "50px",
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                borderRadius: '50%',
              }}
            >
              <img
                style={{
                  height: "35px",
                  width: "35px",
                }}
                loading="lazy"
                alt=""
                src="https://cdn-icons-png.flaticon.com/512/992/992651.png"
              />
            </button>
          </div>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem', justifyContent: 'center' }}>
            {renderPosts()}
          </div>
        </>
      )}
    </div>
  );
}

export default Profile;
