import React from 'react';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import HandshakeIcon from '@mui/icons-material/Handshake';
import CameraIcon from '@mui/icons-material/Camera';
import ManageSearchIcon from '@mui/icons-material/ManageSearch';
import PeopleIcon from '@mui/icons-material/People';
import ChatBubbleIcon from '@mui/icons-material/ChatBubble';
import AddAlertIcon from '@mui/icons-material/AddAlert';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import LockPersonIcon from '@mui/icons-material/LockPerson';
import { Grid } from '@mui/material';

const IntroCardSection = () => {
  const cards = [
    {
      icon: <HandshakeIcon />,
      mainTxt: "Easily connect and stay in touch with friends and family."
    },
    {
      icon: <CameraIcon />,
      mainTxt: "Capture and share your favorite moments through photos and videos."
    },
    {
      icon: <ManageSearchIcon />,
      mainTxt: "Explore a wide range of topics and trends tailored to your interests."
    },
    {
      icon: <PeopleIcon />,
      mainTxt: "Find and join communities that share your passions and hobbies."
    },
    {
      icon: <ChatBubbleIcon />,
      mainTxt: "Like, comment, and share to engage with content that resonates with you."
    },
    {
      icon: <AddAlertIcon />,
      mainTxt: "Receive notifications about the latest updates from your friends and communities."
    },
    {
      icon: <CalendarMonthIcon />,
      mainTxt: "Plan and organize events to bring people together."
    },
    {
      icon: <LockPersonIcon />,
      mainTxt: "Your privacy matters—control who sees your content and personal information."
    }
  ];

  return (
    <div className='mt-16 px-10 largephone:mt-12 largephone:mb-5'>
      <h3 className='text-5xl mobile:text-sm largephone:text-xl largephone:text-center laptop:text-3xl'><b>What we offer the table</b></h3>
      <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }} className='mt-4'>
        {cards?.map((card, index) => (
          <Grid item xs={12} sm={6} md={3} key={index}>
            <div className="bg-[#800080] flex gap-2 h-28 rounded-lg mt-2 py-2 px-4 largephone:h-[80px] laptop:h-24">
              <span className='text-white text-lg'>{card?.icon}</span>
              <Typography variant="p" component="div" className='text-white mobile:text-sm'>
                {card?.mainTxt}
              </Typography>
            </div>
          </Grid>
        ))}
      </Grid>
    </div>
  );
};

export default IntroCardSection;
