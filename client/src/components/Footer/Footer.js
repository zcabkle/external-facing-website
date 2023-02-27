import {
  Card,
} from '@mui/material';

export const Footer = () => {
  return (
    <Card>
      <Card sx={{
        justifyContent: "center",
        alignContent: "center",
        textAlign: 'center',
        backgroundColor: 'background.default'
      }}>
        Copyright © 2023 Kamil Ebanks & Insight?
      </Card>
      <Card sx={{
        justifyContent: "center",
        alignContent: "center",
        textAlign: 'center',
        backgroundColor: 'background.default',
        shadows: 'none'
      }}>
        <br></br>
      </Card>
      </Card>
  )
}