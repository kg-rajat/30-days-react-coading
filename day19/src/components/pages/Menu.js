import React from 'react';
import { MenuList } from '../../data/data'; 
import Layout from '../Layout/Layout';
import { Box, Card, CardActionArea, CardMedia, CardContent, Typography } from "@mui/material";
import { useNavigate } from 'react-router-dom';

const Menu = () => {
  const navigate = useNavigate();

  return (
    <Layout>
      <Box sx={{ display: "flex", flexWrap: "wrap", justifyContent: "center" }}>
        {MenuList.map((menu) => (
          <Card key={menu.name} sx={{ maxWidth: "390px", display: "flex", m: 2 }}>
            <CardActionArea>
              <CardMedia
                sx={{ minHeight: "400px" }}
                component={"img"}
                src={menu.image}
                alt={menu.name}
              />
              <CardContent>
                <Typography variant="h5" gutterBottom component={"div"}>
                  {menu.name} {menu.price}₹
                  {/* Button to trigger navigation */}
                  <button
                    onClick={() => navigate('/order')}
                    style={{ marginLeft: '50px', padding: '10px 20px', cursor: 'pointer' }}
                  >
                    Order Now
                  </button>
                </Typography>
                <Typography variant="body2">{menu.description}</Typography>
              </CardContent>
            </CardActionArea>
          </Card>
        ))}
      </Box>
    </Layout>
  );
};

export default Menu;
