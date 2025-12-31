import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Rating from '@mui/material/Rating';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';

const labels = {
  0.5: 'Useless',
  1: 'Useless+',
  1.5: 'Poor',
  2: 'Poor+',
  2.5: 'Ok',
  3: 'Ok+',
  3.5: 'Good',
  4: 'Good+',
  4.5: 'Excellent',
  5: 'Excellent+',
};

function HappyCustomerCard({name, comment}) {
    const value = 5;

  return (
    <Card sx={{ maxWidth: 345,}}>

        <Box sx={{ display: 'flex', alignItems: 'center', paddingLeft:'15px', paddingTop:'10px' }}>
      <Rating
  name="text-feedback"
  value={value}
  readOnly
  precision={0.5}
  sx={{ '& .MuiRating-icon': { fontSize: 20 } }}
/>
 </Box>
      <CardContent>
        <Typography sx={{fontSize:'20px', fontWeight:'bold'}} gutterBottom variant="h5" component="div">
          {name} <CheckCircleIcon sx={{fontSize:'20px',color:'green',}}/>
        </Typography>
        <Typography variant="body2" sx={{ color: 'text.secondary' }}>
          {comment}
        </Typography>
      </CardContent>
      
    </Card>
  );
}

export default HappyCustomerCard;