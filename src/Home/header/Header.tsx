import { useTheme } from '@mui/material/styles';
import { Stack, AppBar, Toolbar, IconButton } from '@mui/material';
import Typography from '@mui/material/Typography';
import { bgBlur } from '../../utils/cssStyles';
import useOffSetTop from '../../hooks/useOffSetTop';
import useResponsive from '../../hooks/useResponsive';
import Logo from '../../components/logo';
import Iconify from '../../components/iconify';
import { useSettingsContext } from '../../components/settings';

type Props = {
  onOpenNav?: VoidFunction;
};

export default function Header({ onOpenNav }: Props) {
  const theme = useTheme();
  const { themeLayout } = useSettingsContext();
  const isNavHorizontal = themeLayout === 'horizontal';
  const isNavMini = themeLayout === 'mini';
  const isDesktop = useResponsive('up', 'lg');
  const isOffset = useOffSetTop(92) && !isNavHorizontal;

  const renderContent = (
    <>
      {isDesktop && isNavHorizontal && 
      <img  src="/src/img/logo.png"  style={{marginRight: 10}}/>}

      {!isDesktop && (
        <IconButton onClick={onOpenNav} sx={{ mr: 1, color: 'text.primary' }}>
          <Iconify icon="eva:menu-2-fill" />
        </IconButton>
      )}

      <Stack
        flexGrow={1}
        width="100%"
        direction="row"
        alignItems="center"
       
        spacing={{ xs: 0.5, sm: 1.5 }}
      >
        <Typography variant="h6" 
        sx={{
          color: "green",
          display: "flex",
          
          marginLeft: "32%",
          }}>Green Bridge</Typography>
      </Stack>
    </>
  );

  return (
    <AppBar
      sx={{
        boxShadow: 'none',
        height: 64,
        zIndex: theme.zIndex.appBar + 1,
        ...bgBlur({
          color: theme.palette.background.default,
        }),
        transition: theme.transitions.create(['height'], {
          duration: theme.transitions.duration.shorter,
        }),
        ...(isDesktop && {
          width: `calc(100% - 280px)`,
          height: 92,
          ...(isOffset && {
            height: 60,
          }),
          ...(isNavHorizontal && {
            width: 1,
            bgcolor: 'background.default',
            height: 60,
            borderBottom: `dashed 1px ${theme.palette.divider}`,
          }),
          ...(isNavMini && {
            width: `calc(100% - 88px)`,
          }),
        }),
      }}
    >
      <Toolbar
        sx={{
          height: 1,
          px: { lg: 5 },
        }}
      >
        {renderContent}
      </Toolbar>
    </AppBar>
  );
}