import { Card, CardContent, Container, Grid, List, Typography } from "@mui/material";
import React from "react";
import { useWSGetQuotes } from "./hooks/useGetQuotes";
import QuoteItem from "./components/QuoteItem";
import { useWSGetQuoteAvg } from "./hooks/useGetQuoteAverage";
import QuotesAverageItem from "./components/QuotesAverageItem";
import AppNavBar from "./components/AppNavBar";
import useGetUser from "./hooks/useGetUser";

function HomeScreen() {

  const { data } = useWSGetQuotes();
  const { data: average } = useWSGetQuoteAvg();
  const { data: user } = useGetUser();

  return <React.Fragment>
    <AppNavBar />

    <Container maxWidth='xl'>

      {
        !user && <Card sx={{ mt: 2 }}>
          <CardContent>
            <Typography color='error'>
              Log In to continue...
            </Typography>
          </CardContent>
        </Card>
      }

      <Grid container sx={{ mt: 2, mb: 2 }} columnSpacing={2}>

        {
          data && <Grid item xl={8} lg={8} md={12} sm={12} xs={12}>
            <List>
              {
                data.quotes.map((quote) => (
                  <QuoteItem
                    data={quote}
                    key={quote.source}
                    sx={{ mb: 2 }}
                  />
                ))
              }
            </List>
          </Grid>
        }

        {
          average && <Grid item xl={8} lg={4} md={12} sm={12} xs={12}>
            <QuotesAverageItem
              data={average}
            />
          </Grid>
        }
      </Grid>
    </Container>
  </React.Fragment>;
}

export default HomeScreen;
