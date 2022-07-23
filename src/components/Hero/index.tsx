import Grid from '@mui/material/Grid';
import styled from "@emotion/styled";
import Paper from '@mui/material/Paper';
import Image, { StaticImageData } from "next/image";
import Box from "@mui/material/Box";
import { Container } from "@mui/system";
import styles from './styles.module.scss'

const Hero = ({image, title}:{image: StaticImageData, title: string}) => {
  return(
    <Grid container spacing={2}>
      <Grid item xs={12}>
        <div className={styles.container}>
          <Image src={image} style={{opacity: .5, filter: "brightness(50%)"}}/>
          <div className={styles.pageTitle}>{title}</div>
        </div>
      </Grid>
    </Grid>
  )
}

export default Hero