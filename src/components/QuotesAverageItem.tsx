import { Card, CardContent, CardProps, Typography } from "@mui/material";
import QuotesAverageResult from "../models/QuotesAverageResult";
import React from "react";

interface QuotesAverageItemProps extends CardProps {
    data: QuotesAverageResult
}

const QuotesAverageItem: React.FC<QuotesAverageItemProps> = ({ data, ...others }) => {

    return <Card {...others}>
        <CardContent>
            <Typography>
                Buy Average: ${data.average.average_buy_price}
            </Typography>
            <Typography>
                Sell Average: ${data.average.average_sell_price}
            </Typography>
            <Typography>
                Updated At: {data.updatedAt}
            </Typography>
        </CardContent>
    </Card>
}

export default QuotesAverageItem;