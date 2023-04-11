import { makeStyles } from '@material-ui/core/styles';
import { Container, Typography, Link } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  footer: {
    marginTop: theme.spacing(4),
    padding: theme.spacing(2),
    backgroundColor: theme.palette.primary.main,
    color: theme.palette.common.white,
  },
}));

export default function Footer() {
  const classes = useStyles();

  return (
    <footer className="footer">
      <Container  >
        <Typography variant="body1">
          Este é o rodapé do meu site.
        </Typography>
        <Typography variant="body2">
          Feito com Next.js e Material UI.
        </Typography>
        <Typography variant="body2">
          &copy; 2023 - Todos os direitos reservados.
        </Typography>
        <Link href="#" variant="body2">
          Política de Privacidade
        </Link>
      </Container>
    </footer>
  );
}
