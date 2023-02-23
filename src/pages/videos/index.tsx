import VideoCard from '../../components/videocard';
import { Grid } from '@mui/material';
import Box from '@mui/material/Box';

export default function VideoPage() {
  const videos = [
    {
      id: 1,
      title: 'Teste',
      description: 'Atenção',
      resolutionPaths: [],
    },
    {
      id: 1,
      title: 'Teste',
      description: 'Atenção',
      resolutionPaths: [],
    },
    {
      id: 1,
      title: 'Teste',
      description: 'Atenção',
      resolutionPaths: [],
    },
  ];

  return (
    <>
      <Grid
        container
        direction="row"
        justifyContent="center"
        alignItems="center"
        spacing={1}>
        {videos.map((v) => {
          return (
            <Grid width="100%" item xs={12}>
              <Box
                width="100%"
                display="flex"
                alignItems="center"
                justifyContent="center">
                <VideoCard video={v} />
              </Box>
            </Grid>
          );
        })}
      </Grid>
    </>
  );
}
