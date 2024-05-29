import React, { useState, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import Webcam from 'react-webcam';

// List of states and districts
const states = [ "Andhra Pradesh","Arunachal Pradesh","Assam","Bihar","Chhattisgarh","Goa","Gujarat","Haryana","Himachal Pradesh","Jharkhand","Karnataka","Kerala","Madhya Pradesh","Maharashtra","Manipur","Meghalaya","Mizoram","Nagaland","Odisha","Punjab","Rajasthan","Sikkim","Tamil Nadu","Telangana","Tripura","Uttar Pradesh","Uttarakhand","West Bengal","Andaman and Nicobar Islands","Chandigarh","Dadra and Nagar Haveli and Daman and Diu","Delhi","Lakshadweep","Puducherry"];
const districts = {
  "Andaman and Nicobar Islands": [
    "Nicobar", "North and Middle Andaman", "South Andaman"
  ],
  "Andhra Pradesh": [
    "Alluri Sitarama Raju", "Anakapalle", "Ananthapuramu", "Annamayya", "Bapatla", "Chittoor", "East Godavari",
    "Eluru", "Guntur", "YSR Kadapa (Cuddapah)", "Kakinada", "Krishna", "Konaseema", "Kurnool", "Parvathipuram Manyam",
    "Nandyal", "NTR", "Palnadu", "Prakasam", "Nellore", "Tirupati", "Sri Sathya Sai", "Srikakulam", "Visakhapatnam",
    "Vizianagaram", "West Godavari"
  ],
  "Arunachal Pradesh": [
    "Anjaw", "Changlang", "Dibang Valley", "East Kameng", "East Siangl", "Kamle", "Kra Daadi", "Kurung Kumey",
    "Lepa Rada", "Lohit", "Longdling", "Lower Dibang Valley", "Lower Siang", "Lower Subansiri", "Namsai",
    "Pakke Kessang", "Papum Pare", "Shi Yomi", "Siang", "Tawang", "Tirap", "Upper Siang", "Upper Subansiri",
    "West Kameng", "West Siang", "Capital Complex Itanagar"
  ],
  "Assam": [
    "Baksa", "Barpeta", "Biswanath", "Bongaigaon", "Cachar", "Charaideo", "Chirang", "Darrang", "Dhemaji",
    "Dhubri", "Dibrugarh", "Dima Hasao (North Cachar Hills)", "Goalpara", "Golaghat", "Hailakandi", "Hojai",
    "Jorhat", "Kamrup", "Kamrup Metropolitan", "Karbi Anglong", "Karimaganj", "Kokrajhar", "Lakhimpur", "Majuli",
    "Morigaon", "Nagaon", "Nalbari", "Sivasagar", "Sonitpur", "South Salamara Mankachar", "Tinsukia", "Udakguri",
    "West Karbi Anglong", "Bajali", "Tamulpur"
  ],
  "Bihar": [
    "Araria", "Arwal", "Aurangabad", "Banka", "Begusarai", "Bhagalpur", "Bhojpur", "Buxar", "Darbhanga",
    "East Champaran (Motihari)", "Gaya", "Gopalganj", "Jamui", "Jehanabad", "Kaimur (Bhabua)", "Katihar",
    "Khagaria", "Kishanganj", "Lakhisarai", "Madhepura", "Madhubani", "Munger (Monghyr)", "Muzaffarpur",
    "Nalanda", "Nawada", "Patna", "Purnia (Purnea)", "Rohtas", "Saharasa", "Samastipur", "Saran", "Sheikhpura",
    "Sheohar", "Sitamarhi", "Siwan", "Supaul", "Vaishali", "West Champaran"
  ],
  "Chandigarh": ["Chandigarh"],
  "Chhattisgarh": [
    "Balod", "Baloda Bazar", "Balrampur", "Bastar", "Bemetara", "Bijapur", "Bilaspur", "Dantewada (South Bastar)",
    "Dhamtari", "Durg", "Gariyaband", "Janjigir-Champa", "Jashpur", "Kabirdham (Kawardha)", "Kanker (North Bastar)",
    "Kondagaon", "Korba", "Korea (Koriya)", "Mahasamund", "Mungeli", "Narayanpur", "Raigarh", "Raipur", "Rajnandgaon",
    "Sukma", "Surajpur", "Surguja", "Gaurela-Pendra-Marwahi", "Khairagarh-Chhuikhadan-Gandai", "Manendragarh-Chirmiri-Bharatpur",
    "Mohla-Manpur-Chowki", "Sarangarh-Bilaigarh", "Shakti"
  ],
  "Dadra and Nagar Haveli and Daman and Diu": [
    "Dadra And Nagar Haveli", "Daman", "Diu"
  ],
  "Delhi": [
    "Central Delhi", "East Delhi", "New Delhi", "North Delhi", "North East Delhi", "North West Delhi",
    "Shahdara", "South Delhi", "South East Delhi", "South West Delhi", "West Delhi"
  ],
  "Goa": [
    "North Goa", "South Goa"
  ],
  "Gujarat": [
    "Ahmedabad", "Amreli", "Anand", "Arvalli", "Banaskantha (Palanpur)", "Bharuch", "Bhavnagar", "Botad",
    "Chhota Udepur", "Dahod", "Dangs (Ahwa)", "Devbhoomi Dwarka", "Gandhinagar", "Gir Somnath", "Jamnagar",
    "Junagadh", "Kachchh", "Kheda (Nadiad)", "Mahisagar", "Mehsana", "Morbi", "Narmada (Rajpipla)", "Navsari",
    "Panchmahal (Godhra)", "Patan", "Porbandar", "Rajkot", "Sabarkantha (Himmatnagar)", "Surat", "Surendranagar",
    "Tapi (Vyara)", "Vadodara", "Valsad"
  ],
  "Haryana": [
    "Ambala", "Bhiwani", "Charkhi Dadri", "Faridabad", "Gurgaon", "Hisar", "Jhajjar", "Jind", "Kaithal",
    "Karnal", "Kurukshetra", "Mahendragarh", "Nuh", "Palwal", "Panchkula", "Panipat", "Rohtak", "Sirsa",
    "Sonipat", "Yamunanagar", "Fatehabad", "Rewari"
  ],
  "Himachal Pradesh": [
    "Bilaspur", "Chamba", "Hamirpur", "Kangra", "Kinnaur", "Kullu", "Lahaul & Spiti", "Mandi", "Shimla",
    "Sirmaur", "Solan", "Una"
  ],
  "Jammu and Kashmir": [
    "Anantnag", "Bandipore", "Baramulla", "Budgam", "Doda", "Ganderbal", "Jammu", "Kathua", "Kishtwar", "Kulgam",
    "Kupwara", "Poonch", "Pulwama", "Rajouri", "Ramban", "Reasi", "Samba", "Shopian", "Srinagar", "Udhampur"
  ],
  "Jharkhand": [
    "Bokaro", "Chatra", "Deoghar", "Dhanbad", "Dumka", "East Singhbhum", "Garhwa", "Giridih", "Godda", "Gumla",
    "Hazaribag", "Jamtara", "Khunti", "Koderma", "Latehar", "Lohardaga", "Pakur", "Palamu", "Ramgarh", "Ranchi",
    "Sahibganj", "Seraikela-Kharsawan", "Simdega", "West Singhbhum"
  ],
  "Karnataka": [
    "Bagalkot", "Ballari (Bellary)", "Belagavi (Begaum)", "Bengaluru (Bangalore) Rural", "Bengaluru (Bangalore) Urban",
    "Bidar", "Chamarajanagar", "Chikballapur", "Chikkamagaluru (Chikmagalur)", "Chitradurga", "Dakshina Kannada", "Davangere",
    "Dharwad", "Gadag", "Hassan", "Haveri", "Kalaburagi (Gulbarga)", "Kodagu", "Kolar", "Koppal", "Mandya", "Mysuru (Mysore)",
    "Raichur", "Ramanagara", "Shivamogga (Shimoga)", "Tumakuru (Tumkur)", "Udupi", "Uttara Kannada (Karwar)", "Vijayapura (Bijapur)",
    "Yadgir", "Chitradurga", "Vijayanagara"
  ],
  "Kerala": [
    "Alappuzha", "Ernakulam", "Idukki", "Kannur", "Kasaragod", "Kollam", "Kottayam", "Kozhikode", "Malappuram",
    "Palakkad", "Pathanamthitta", "Thiruvananthapuram", "Thrissur", "Wayanad"
  ],
  "Ladakh": [
    "Kargil", "Leh"
  ],
  "Lakshadweep": [
    "Lakshadweep"
  ],
  "Madhya Pradesh": [
    "Agar Malwa", "Alirajpur", "Anuppur", "Ashoknagar", "Balaghat", "Barwani", "Betul", "Bhind", "Bhopal", "Burhanpur",
    "Chhatarpur", "Chhindwara", "Damoh", "Datia", "Dewas", "Dhar", "Dindori", "Guna", "Gwalior", "Harda", "Hoshangabad",
    "Indore", "Jabalpur", "Jhabua", "Katni", "Khandwa", "Khargone", "Mandla", "Mandsaur", "Morena", "Narsinghpur", "Neemuch",
    "Panna", "Raisen", "Rajgarh", "Ratlam", "Rewa", "Sagar", "Satna", "Sehore", "Seoni", "Shahdol", "Shajapur", "Sheopur",
    "Shivpuri", "Sidhi", "Singrauli", "Tikamgarh", "Ujjain", "Umaria", "Vidisha", "Niwari"
  ],
  "Maharashtra": [
    "Ahmednagar", "Akola", "Amravati", "Beed", "Bhandara", "Buldhana", "Chandrapur", "Dhule", "Gadchiroli", "Gondia", "Hingoli", "Jalgaon",
    "Jalna", "Kolhapur", "Latur", "Mumbai City", "Mumbai Suburban", "Nagpur", "Nanded", "Nandurbar", "Nashik", "Osmanabad", "Palghar", "Parbhani",
    "Pune", "Raigad", "Ratnagiri", "Sangli", "Satara", "Sindhudurg", "Solapur", "Thane", "Wardha", "Washim", "Yavatmal", "Aurangabad"
  ],
  "Manipur": [
    "Bishnupur", "Chandel", "Churachandpur", "Imphal East", "Imphal West", "Jiribam", "Kakching", "Kamjong", "Kangpokpi", "Noney",
    "Pherzawl", "Senapati", "Tamenglong", "Tengnoupal", "Thoubal", "Ukhrul"
  ],
  "Meghalaya": [
    "East Garo Hills", "East Jaintia Hills", "East Khasi Hills", "North Garo Hills", "Ri Bhoi", "South Garo Hills", "South West Garo Hills",
    "South West Khasi Hills", "West Garo Hills", "West Jaintia Hills", "West Khasi Hills", "Eastern West Khasi Hills"
  ],
  "Mizoram": [
    "Aizawl", "Champhai", "Kolasib", "Lawngtlai", "Hnahthial", "Lunglei", "Mamit", "Saiha", "Serchhip", "Khawzawl", "Saitual"
  ],
  "Nagaland": [
    "Dimapur", "Kiphire", "Kohima", "Longleng", "Mokokchung", "Mon", "Peren", "Phek", "Tuensang", "Wokha", "Zunheboto", "Tseminyü",
    "Chümoukedima", "Niuland", "Noklak", "Shamator"
  ],
  "Odisha": [
    "Angul", "Balangir", "Balasore", "Bargarh", "Bhadrak", "Boudh", "Cuttack", "Deogarh", "Dhenkanal", "Gajapati", "Ganjam", "Jagatsinghapur",
    "Jajpur", "Jharsuguda", "Kalahandi", "Kandhamal", "Kendrapara", "Kendujhar (Keonjhar)", "Khordha", "Koraput", "Malkangiri", "Mayurbhanj",
    "Nabarangpur", "Nayagarh", "Nuapada", "Puri", "Rayagada", "Sambalpur", "Subarnapur", "Sundargarh"
  ],
  "Puducherry": [
    "Karaikal", "Yanam", "Mahe", "Pondicherry"
  ],
  "Punjab": [
    "Amritsar", "Barnala", "Bathinda", "Faridkot", "Fatehgarh Sahib", "Fazilka", "Ferozepur", "Gurdaspur", "Hoshiarpur", "Jalandhar",
    "Kapurthala", "Ludhiana", "Mansa", "Moga", "Muktsar", "Nawanshahr (Shahid Bhagat Singh Nagar)", "Pathankot", "Patiala", "Rupnagar",
    "Sahibzada Ajit Singh Nagar (Mohali)", "Sangrur", "Tarn Taran", "Malerkotla"
  ],
  "Rajasthan": [
    "Ajmer", "Alwar", "Banswara", "Baran", "Barmer", "Bharatpur", "Bhilwara", "Bikaner", "Bundi", "Chittorgarh", "Churu", "Dausa",
    "Dholpur", "Dungarpur", "Hanumangarh", "Jaipur", "Jaisalmer", "Jalore", "Jhalawar", "Jhunjhunu", "Jodhpur", "Karauli", "Kota",
    "Nagaur", "Pali", "Pratapgarh", "Rajsamand", "Sawai Madhopur", "Sikar", "Sirohi", "Sri Ganganagar", "Tonk", "Udaipur"
  ],
  "Sikkim": [
    "Gangtok", "Gyalshing", "Pakyong", "Namchi", "Mangan", "Soreng"
  ],
"Tamil Nadu": [
  "Ariyalur", "Chennai", "Coimbatore", "Cuddalore", "Dharmapuri", "Dindigul", "Erode", "Kanchipuram", "Kanyakumari", "Karur", "Krishnagiri",
  "Madurai", "Nagapattinam", "Namakkal", "Nilgiris", "Perambalur", "Pudukkottai", "Ramanathapuram", "Salem", "Sivanganga", "Thanjavur",
  "Theni", "Thoothukudi (Tuticorin)", "Tiruchirappalli", "Tirunelveli", "Tiruppur", "Tiruvallur", "Tiruvannamalai", "Tiruvarur", "Vellore",
  "Viluppuram", "Virudhunagar", "Tenkasi", "Tirupattur", "Ranipet", "Chengalpet", "Kallakurichi", "Mayiladuthurai"
],
"Telangana": [
  "Adilabad", "Bhadradri Kothagudem", "Hyderabad", "Jagital", "Jangaon", "Jayashankar Bhoopalpally", "Jogulamba Gadwal", "Kamareddy",
  "Karimnagar", "Khammam", "Komaram Bheem Asifabad", "Mahabubabad", "Mahabubnagar", "Mancherial", "Medak", "Medchal-Malkajgiri", "Nagarkurnool",
  "Nalgonda", "Nirmal", "Nizamabad", "Peddapalli", "Rajanna Sircilla", "Rangareddy", "Sangareddy", "Siddipet", "Suryapet", "Vikarabad", "Wanaparthy",
  "Warangal (Rural)", "Hanamkonda (erstwhile Warangal (Urban))", "Yadadri Bhuvanagiri", "Mulugu", "Narayanpet"
],
"Tripura": [
  "Dhalai", "Gomati", "Khowai", "North Tripura", "Sepahijala", "South Tripura", "Unakoti", "West Tripura"
],
"Uttarakhand": [
  "Almora", "Bageshwar", "Chamoli", "Champawat", "Dehradun", "Haridwar", "Nainital", "Pauri Garhwal", "Pithoragarh", "Rudraprayag",
  "Tehri Garhwal", "Udham Singh Nagar", "Uttarkashi"
],
"Uttar Pradesh": [
  "Agra", "Aligarh", "Allahabad", "Ambedkar Nagar", "Amethi (Chatrapati Sahuji Mahraj Nagar)", "Amroha (J.P.Nagar)", "Auraiya", "Azangarh",
  "Baghpat", "Bahraich", "Ballia", "Balrampur", "Banda", "Barabanki", "Bareilly", "Basti", "Bhadohi", "Bijnor", "Budaun", "Bulandshahr", "Chandauli",
  "Chitrakoot", "Deoria", "Etah", "Etawah", "Faizabad", "Farrukhabad", "Fatehpur", "Firozabad", "Gautam Buddha Nagar", "Ghaziabad", "Ghazipur",
  "Gonda", "Gorakhpur", "Hamirpur", "Hapur (Panchsheel Nagar)", "Hardoi", "Hathras", "Jalaun", "Jaunpur", "Jhansi", "Kannauj", "Kanpur Dehat",
  "Kanpur Nagar", "Kanshiram Nagar (Kasganj)", "Kaushambi", "Kushinagar (Padrauna)", "Lakhimpur - Kheri", "Lalitpur", "Lucknow", "Maharajganj",
  "Mahoba", "Mainpuri", "Mathura", "Mau", "Meerut", "Mizapur", "Moradabad", "Muzaffarnagar", "Pilibhit", "Pratapgarh", "RaeBareli", "Rampur",
  "Saharanpur", "Sambhal (Bhim Nagar)", "Sant Kabir Nagar", "Shahjahanpur", "Shamali (Prabuddh Nagar)", "Shravasti", "Siddharth Nagar", "Sitapur",
  "Sonbhandra", "Sultanpur", "Unnao", "Varanasi"
],
"West Bengal": [
  "Alipurduar", "Bankura", "Birbhum", "Cooch Behar", "Dakshin Dinajpur (South Dinajpur)", "Darjeeling", "Hooghly", "Howrah", "Jalpaiguri",
  "Jhargram", "Kalimpong", "Kolkata", "Malda", "Murshidabad", "Nadia", "North 24 Parganas", "Paschim Medinipur (West Medinipur)",
  "Paschim (West) Burdwan (Bardhaman)", "Purba Burdwan (Bardhaman)", "Purba Medinipur (East Medinipur)", "Purulia", "South 24 Parganas",
  "Uttar Dinajpur (North Dinajpur)"
],  
}; 

const AddPost = () => {
  const navigate = useNavigate();
  const [caption, setCaption] = useState('');
  const [state, setState] = useState('');
  const [district, setDistrict] = useState('');
  const [districtOptions, setDistrictOptions] = useState([]);
  const [postType, setPostType] = useState('normal');
  const [photo, setPhoto] = useState(null);
  const webcamRef = useRef(null);

  const handleCapture = () => {
    const imageSrc = webcamRef.current.getScreenshot();
    setPhoto(imageSrc);
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    const reader = new FileReader();
    reader.onload = () => {
      setPhoto(reader.result);
    };
    reader.readAsDataURL(file);
  };

  const handleStateChange = (e) => {
    const selectedState = e.target.value;
    setState(selectedState);
    setDistrictOptions(districts[selectedState] || []);
    setDistrict(''); // Reset district selection when state changes
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    // Handle form submission here
    console.log({ caption, state, district, postType, photo });
    try {
      const response = await fetch('http://localhost:5000/api/post/create', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          caption:caption,
          state:state,
          district:district,
          postType:postType,
          photo:photo
        })
      });

      if (!response.ok) {
        const errorData = await response.json();
        console.error('Error:', errorData.message);
        return;
      }
      navigate("/");
  
      const responseData = await response.json();
      console.log('Success:', responseData);


    } catch (error) {
      console.error('There was an error!', error);
    }
    
  };

  return (
    <div style={{ padding: '2rem', color: '#34cc54', backgroundColor: '#000000', minHeight: '100vh' }}>
      <h2 style={{ textAlign: 'center', marginBottom: '2rem' }}>Create New Post</h2>
      <div style={{ display: 'flex', justifyContent: 'center', gap: '2rem' }}>
        {/* Left Section: Camera and File Selection */}
        <div style={{ flex: 1, maxWidth: '45%', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          <Webcam
            audio={false}
            ref={webcamRef}
            screenshotFormat="image/jpeg"
            style={{ width: '100%', height: '300px', marginBottom: '1rem' }}
          />
          <button 
            type="button" 
            onClick={handleCapture} 
            style={{ display: 'block', marginBottom: '1rem', width: '50%', padding: '1rem', backgroundColor: '#34cc54', border: 'none', color: '#000000', cursor: 'pointer', textAlign: 'center' }}
          >
            Capture Photo
          </button>
          <label style={{ display: 'block', marginBottom: '1rem', width: '45%', textAlign: 'left', paddingLeft: '40%' ,paddingRight:'45%'}}>
            Or select a file:
            <input
              type="file"
              accept="image/*"
              onChange={handleFileChange}
              style={{ display: 'block', margin: '0 auto', width: '100%', padding: '1rem', backgroundColor: '#34cc54', border: 'none', color: '#000000', cursor: 'pointer' }}
            />
          </label>
          {photo && (
            <div>
              <img src={photo} alt="Captured" style={{ width: '100%', height: '200px', objectFit: 'cover' }} />
            </div>
          )}
        </div>

        {/* Right Section: Form Inputs */}
        <div style={{ flex: 1, maxWidth: '45%', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          <form onSubmit={handleSubmit} style={{ width: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <div style={{ marginBottom: '1rem', width: '80%' }}>
              <label style={{ display: 'block', marginBottom: '0.5rem' }}>Caption:</label>
              <input
                type="text"
                value={caption}
                onChange={(e) => setCaption(e.target.value)}
                style={{ display: 'block', marginBottom: '1rem', width: '100%', padding: '1rem', backgroundColor: '#1c1c1c', border: 'none', color: '#34cc54' }}
              />
            </div>
            <div style={{ marginBottom: '1rem', width: '80%' }}>
              <label style={{ display: 'block', marginBottom: '0.5rem' }}>State:</label>
              <select
                value={state}
                onChange={handleStateChange}
                style={{ display: 'block', marginBottom: '1rem', width: '100%', padding: '1rem', backgroundColor: '#1c1c1c', border: 'none', color: '#34cc54' }}
              >
                <option value="" disabled>Select State</option>
                {states.map((state) => (
                  <option key={state} value={state}>{state}</option>
                ))}
              </select>
            </div>
            <div style={{ marginBottom: '1rem', width: '80%' }}>
              <label style={{ display: 'block', marginBottom: '0.5rem' }}>District:</label>
              <select
                value={district}
                onChange={(e) => setDistrict(e.target.value)}
                style={{ display: 'block', marginBottom: '1rem', width: '100%', padding: '1rem', backgroundColor: '#1c1c1c', border: 'none', color: '#34cc54' }}
              >
                <option value="" disabled>Select District</option>
                {districtOptions.map((district) => (
                  <option key={district} value={district}>{district}</option>
                ))}
              </select>
            </div>
            <div style={{ marginBottom: '1rem', width: '80%' }}>
              <label style={{ display: 'block', marginBottom: '0.5rem' }}>Post Type:</label>
              <select
                value={postType}
                onChange={(e) => setPostType(e.target.value)}
                style={{ display: 'block', marginBottom: '1rem', width: '100%', padding: '1rem', backgroundColor: '#1c1c1c', border: 'none', color: '#34cc54' }}
              >
                <option value="normal">Normal</option>
                <option value="credits">Credits</option>
              </select>
            </div>
            <button 
              type="submit" 
              style={{ display: 'block', marginTop: '1rem', width: '80%', padding: '1rem', backgroundColor: '#34cc54', border: 'none', color: '#000000', cursor: 'pointer', textAlign: 'center' }}
            >
              Submit
            </button>
          </form>
          <button 
            onClick={() => navigate('/')} 
            style={{ display: 'block', marginTop: '1rem', width: '80%', padding: '1rem', backgroundColor: '#34cc54', border: 'none', color: '#000000', cursor: 'pointer', textAlign: 'center' }}
          >
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
};

export default AddPost;
