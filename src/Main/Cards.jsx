import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import CardActionArea from '@mui/material/CardActionArea';
import Box from '@mui/material/Box';
import Rating from '@mui/material/Rating';
import StarIcon from '@mui/icons-material/Star';

const labels = {
  0.5: 'Useless',
  1: 'Useless+',
  1.5: 'Poor',
  2: 'Poor+',
  2.5: 'Ok',
  3: 'Ok+',
  3.5: 'Good',
  4: 'Good+',
  4.5: '4.5/5',
  5: 'Excellent+',
};

function Cards({picture, name, price, oldPrice, discper}) {
     const value = 4.5;
  return (
    <Card sx={{ maxWidth:200}}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="200px"
          image={picture}
        />
        <CardContent>
          <Typography sx={{fontSize:'16px', fontWeight:'bold'}} gutterBottom variant="h5" component="div">
            {name}
          </Typography>
          
            <Box sx={{ display: 'flex', alignItems: 'center' }}>
      <Rating
  name="text-feedback"
  value={value}
  readOnly
  precision={0.5}
  sx={{ '& .MuiRating-icon': { fontSize: 13 } }}
  emptyIcon={<StarIcon style={{ opacity: 0.55, fontSize: 13 }} />}
/>

      <Box sx={{fontSize:'10px' }}>{labels[value]}</Box>
    </Box>
    <span className='text-xl font-bold'> {price} </span>
    <span className='text-xl line-through font-thin'>{oldPrice}</span>
    <span className='ml-[5px] text-[14px] text-red-500'>{discper}</span>
    
        </CardContent>
      </CardActionArea>
    </Card>
  );
}

export default Cards;