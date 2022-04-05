import React from "react";
import data from '../../data/data.json';

import {Box, Container, Grid, Paper, Typography, List, ListItem, Divider} from "@mui/material";

import CardWrapper from "../CardWrapper/CardWrapper";
import BulletItem from "../BulletItem/BulletItem";
import Attachment from '../Attachment/Attachment';
import PriceBreak from "../PriceBreak/PriceBreak";

const ProductDescription = () => {

  return (
    <Paper elevation={0} component={'section'} sx={{pt: 6, pb: 4}}>
      <Container maxWidth={'100%'}>
        <Grid container sx={{ml: '0 !important'}}>

          <Grid item xs={12} md={9}>
            <Typography component={'h3'} variant={'aboutHeading'} mb={1}>Description</Typography>
            <Box>
              {data.article.description_long && data.article.description_long.split('\n\n').map(sentence => {
                return <Typography key={Math.random()} mb={1}>{sentence}</Typography>
              })}
            </Box>

            <Grid container justifyContent={'space-between'}  pt={3}>

              <CardWrapper title={'Details'}>
                <Typography component={'h3'} variant={'aboutSubheading'}>Features</Typography>
                <List>
                  {Object.keys(data.article.features).map((feature) => (
                    <BulletItem
                      key={Math.random()}
                      itemTitle={feature}
                      item={data.article.features[feature]}
                    />
                  ))}
                </List>

                <Typography component={'h3'} variant={'aboutSubheading'} mt={2}>Attachments</Typography>
                <List>
                  {data.article.attachments.map((item) => (
                    <Attachment
                      key={Math.random()}
                      item={item}
                    />
                  ))}
                </List>

                <Typography component={'h3'} variant={'aboutSubheading'} mt={2} mb={1}>Keywords</Typography>
                {data.article.keywords.map((item) => (
                  <Typography variant={'aboutSubheading'} display={'inline'} px={[1, 2]} py={[0.5, 0.5]} mr={1} sx={{backgroundColor: '#CED4DB', color: 'white', borderRadius: '20px', textTransform: 'uppercase'}}>{item}</Typography>
                ))}
              </CardWrapper>

              <CardWrapper title={'Pricing & shipping'}>
                <List>
                  <BulletItem
                    key={Math.random()}
                    itemTitle={'Minimum order'}
                    item={data.article.minimum_order_quantity}
                    item={`${data.article.minimum_order_quantity} ${data.article.unit}`}

                  />
                  <BulletItem
                    key={Math.random()}
                    itemTitle={'Shipping'}
                    item={`${data.article.transport_costs} ${data.article.currency}`}
                  />
                  <BulletItem
                    key={Math.random()}
                    itemTitle={'Delivery'}
                    item={data.article.delivery_time}
                    item={`${data.article.delivery_time} days`}
                  />
                </List>

                <Typography component={'h3'} variant={'aboutSubheading'} mt={2} mb={1}>Price breaks</Typography>
                  <List sx={{width: 'max-content'}}>
                    <PriceBreak count={20}/>
                    <PriceBreak count={50}/>
                    <PriceBreak count={100}/>
                  </List>
              </CardWrapper>
            </Grid>
          </Grid>
        </Grid>
      </Container>
    </Paper>
  )
}

export default ProductDescription;
