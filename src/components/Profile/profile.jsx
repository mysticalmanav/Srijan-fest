import React from "react";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import Nav from "../Navbar/navbar";
import "./profile.css";
import shirt from "./shirt.jpg";
import FooterT from "../Footer";
 
const theme = createTheme({
  palette: {
    primary: {
      main: "#186F65", // Darker color
    },
    text: {
      primary: "#fff", // Text color
      secondary: "#ffd700", // Yellow color
    },
  },
});

const styles = {
  mainContainer: {
    background: " ", // Gradient background
    // Ensure the container takes the full height
    backgroundPositionY: "-17px",
    padding: theme.spacing(1),
    backdropFilter: "blur(10px)", // Blurriness effect
    marginLeft:0
  },
  root: {
    padding: theme.spacing(5),
     backgroundColor:"#b3bbc226",
    backgroundPositionY: "-17px",
    backgroundSize: `100%`,
    color: theme.palette.text.primary,
    borderRadius: 10,
    maxWidth: 800,
    minWidth:380,
    overflowX:"hidden",
   
     
    margin: "auto",
 
    
  },
  title: {
    fontSize: "1rem", // Smaller font size for titles
    marginBottom: theme.spacing(1), // Increased space between title and value
    color: theme.palette.text.secondary, // Yellow color
  },
  value: {
    fontSize: "1.2rem", // Larger font size for values
  },
  head:{
    fontSize: "1.2rem", // Larger font size for values
    marignX:"50px"
  }
};

const ProfilePage = ({ data }) => {
  const {
    admissionNumber,
    address,
    tshirtSize,
    mobileNumber,
    name,email,
    approved,
    quantity,
    createdAt,
    updatedAt,
    imageURL,
  } = data;

  return (
    <div className="bg-[url('./shirt.jpg')]" style={{marginTop:"15px",marginBottom:"15px"}}>
      <div style={styles.mainContainer} className="floating max-w-screen-sm">
        <ThemeProvider theme={theme}>
          <Paper style={styles.root} elevation={3}   >
            <Typography
              style={styles.head}
              variant="h5"
              className="mb-3 bg-[#0D0C06] backdrop-blur-md bg-opacity-60 rounded-md text-center py-2"
              gutterBottom
            >
              {name} 
            </Typography>
            <div className=" " >
            <Typography style={styles.title} variant="subtitle2" gutterBottom>
                Email:
              </Typography>
              <Typography style={styles.value} variant="h5" gutterBottom>
                {email}
              </Typography>
               
              <Typography style={styles.title} variant="subtitle2" gutterBottom>
                Address:
              </Typography>
              <Typography style={styles.value} variant="h5" gutterBottom>
                {address}
              </Typography>
               
              <Typography style={styles.title} variant="subtitle2" gutterBottom>
                T-shirt Size:
              </Typography>
              <Typography style={styles.value} variant="h5" gutterBottom>
                {tshirtSize}
              </Typography>
              <Typography style={styles.title} variant="subtitle2" gutterBottom>
                Quantity:
              </Typography>
              <Typography style={styles.value} variant="h5" gutterBottom>
                {quantity}
              </Typography>
              <Typography style={styles.title} variant="subtitle2" gutterBottom>
                Mobile Number:
              </Typography>
              <Typography style={styles.value} variant="h5" gutterBottom>
                {mobileNumber}
              </Typography>
              <Typography style={styles.title} variant="subtitle2" gutterBottom>
                Verification:
              </Typography>
              <Typography style={styles.value} variant="h5" gutterBottom>
                {approved ? "Approved" : "Pending"}
              </Typography>
            </div>
            {/* Include other details as needed */}
          </Paper>
        </ThemeProvider>
      </div>
    </div>
  );
};

export default ProfilePage;
