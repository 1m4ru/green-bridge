import { ChangeEvent, useState } from 'react';
// @mui
import { useTheme } from '@mui/material/styles';
import { Card, Stack, CardProps, CardHeader, Typography, Button } from '@mui/material';

interface Props extends CardProps {
  title?: string;
  subheader?: string;
  description?: string;
}

export default function BookingCustomerReviews({ title, subheader, description, ...other }: Props) {
  const theme = useTheme();

  // Estado para armazenar a descrição editável
  const [editableDescription, setEditableDescription] = useState<string>(description || '');


  return (
    <Card {...other}>
      <CardHeader
        title={title}
        subheader={subheader}
        sx={{
          '& .MuiCardHeader-action': { alignSelf: 'center' },
        }}
      />

      <Stack
        spacing={2}
        direction="column"
        alignItems="flex-end"
        sx={{
          p: theme.spacing(0, 3, 3, 3),
        }}
      >
        <Typography>
          {editableDescription}
        </Typography>
        <Button variant="contained" sx={{
          background: "green",
          "&:hover": {
            background: "darkgreen"
          }
        }}>Saiba Mais</Button>
      </Stack>
    </Card>
  );
}
