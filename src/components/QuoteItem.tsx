import { Card, CardContent, CardProps, Link, Typography } from "@mui/material";
import React from "react";
import DolorBlueQuote from "../models/DolorBlueQuote";

interface QuoteItemProps extends CardProps {
    data: DolorBlueQuote
}

const QuoteItem: React.FC<QuoteItemProps> = ({ data, ...others }) => {

    return <Card {...others}>
        <CardContent>
            <Typography>
                Buy Price: ${data.buy_price}
            </Typography>
            <Typography>
                Sell Price: ${data.sell_price}
            </Typography>
            <Typography>
                Source:
                <Link href={data.source} target="_blank">
                    {data.source}
                </Link>
            </Typography>
        </CardContent>
    </Card>

}

export default QuoteItem;