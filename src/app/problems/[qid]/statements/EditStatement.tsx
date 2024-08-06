import { Button, Paper, Stack, TextField, Autocomplete, Link } from '@mui/material';

// As same as Polygon, the page link is same for creating new language and editing existed language
// It can be divided into two pages if needed

export default function EditStatement({ language }: { language: string }) {
  return (
    <Paper>
      <Stack direction='column' px={4} py={2} gap={2}>
        <TextField id='prob_name' label='Name' fullWidth />
        <TextField id='legend' label='Legend' rows={10} multiline fullWidth />
        <TextField
          id='input_format'
          label='Input Format'
          rows={5}
          multiline
          fullWidth
        />
        <TextField
          id='output_format'
          label='Output Format'
          rows={5}
          multiline
          fullWidth
        />
        <TextField id='scoring' label='Scoring' rows={10} multiline fullWidth />
        <TextField id='notes' label='Notes' rows={5} multiline fullWidth />
        <TextField id='tutorial' label='Tutorial' rows={10} multiline fullWidth />
        <Button variant='contained'>Save</Button>
      </Stack>
    </Paper>
  );
}
