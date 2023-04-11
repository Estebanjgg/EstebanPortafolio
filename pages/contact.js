import { Grid, Box, Typography } from '@material-ui/core';

function Contacto() {
  return (
    <Box sx={{ bgcolor: '#F7DF1E', minHeight: '100vh', display: 'flex', alignItems: 'center' }}>
      <Grid container justifyContent="center">
        <Grid item xs={12} md={6}>
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
            <img src="..\images\estaban.jpg" alt="Avatar" width={750} height={750} />
            <Box>
              <Typography variant="h3" component="h1">
                Juan Pérez
              </Typography>
              <Typography variant="h6" component="h2">
                Desarrollador web
              </Typography>
            </Box>
          </Box>
        </Grid>
        <Grid item xs={12} md={6}>
          <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
            <Typography variant="h4" component="h2">
              Información de contacto
            </Typography>
            <Typography variant="body1">
              <strong>Teléfono:</strong> +1 555 123 4567
            </Typography>
            <Typography variant="body1">
              <strong>Email:</strong> juanperez@example.com
            </Typography>
            <Typography variant="body1">
              <strong>LinkedIn:</strong>{' '}
              <a href="https://www.linkedin.com/in/juanperez" target="_blank" rel="noopener noreferrer">
                linkedin.com/in/juanperez
              </a>
            </Typography>
            <Typography variant="body1">
              <strong>Facebook:</strong>{' '}
              <a href="https://www.facebook.com/juanperez" target="_blank" rel="noopener noreferrer">
                facebook.com/juanperez
              </a>
            </Typography>
            <Typography variant="body1">
              <strong>Instagram:</strong>{' '}
              <a href="https://www.instagram.com/juanperez" target="_blank" rel="noopener noreferrer">
                instagram.com/juanperez
              </a>
            </Typography>
            <Typography variant="body1">
              <strong>GitHub:</strong>{' '}
              <a href="https://github.com/juanperez" target="_blank" rel="noopener noreferrer">
                github.com/juanperez
              </a>
            </Typography>
            <Typography variant="body1">
              <strong>Página personal:</strong>{' '}
              <a href="https://www.juanperez.com" target="_blank" rel="noopener noreferrer">
                juanperez.com
              </a>
            </Typography>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
}

export default Contacto;