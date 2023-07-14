import { Helmet } from 'react-helmet-async';
// @mui
import { useTheme } from '@mui/material/styles';
import { Grid, Container } from '@mui/material';
// _mock_
import { _bookings, _bookingNew, _bookingsOverview, _bookingReview } from '../../_mock/arrays';
// components
import { useSettingsContext } from '../../components/settings';
import BookingCustomerReviews from './BookingCustomerReviews';
// sections

// assets


// ----------------------------------------------------------------------

export default function GeneralBookingPage() {
  const theme = useTheme();

  const { themeStretch } = useSettingsContext();

  return (
    <>
      

   <Container maxWidth={themeStretch ? false : 'xl'}>
        <Grid container spacing={4}>
          <Grid item xs={12} md={6}>
            <BookingCustomerReviews
              title="ISO 9001"
              subheader="Postagem feita em 24/06/2023"
              description="ISO 9001: A chave para o sucesso sustentado das empresas. O sistema de gestão ISO 9001 oferece uma abordagem comprovada para otimizar processos e acelerar o desenvolvimento de produtos. Com sua implementação, as empresas alcançam maior agilidade na produção, garantindo a satisfação dos clientes. Descubra como essa certificação impulsiona o crescimento empresarial e a excelência operacional."
            />
          </Grid>
          <Grid item xs={12} md={6}>
            <BookingCustomerReviews
              title="ISO 14001"
              subheader="Postagem feita em 01/07/2023"
              description= "ISO 14001: Protegendo o meio ambiente e impulsionando a sustentabilidade empresarial. A certificação ISO 14001 é a chave para empresas comprometidas com a preservação ambiental. Descubra como essa norma de gestão ambiental ajuda as organizações a reduzirem seu impacto no meio ambiente, implementando práticas sustentáveis e promovendo a responsabilidade social. Conheça as histórias de sucesso de empresas que adotaram o ISO 14001 e se tornaram líderes em sustentabilidade. Junte-se ao movimento e faça a diferença hoje!"
            />
          </Grid>
          <Grid item xs={12} md={6}>
            <BookingCustomerReviews
              title="Digitro"
              subheader="Postagem feita em 13/04/2023"
              description="Digitro: Liderando com Sustentabilidade e Reconhecimento em ESG. Descubra como a Digitro Tecnologia tem se destacado no mercado por suas ações sólidas em ESG. Com certificações ISO 9001 e Ministério Brasileiro de Defesa, a empresa é reconhecida por sua qualidade e contribuição para a segurança pública e a soberania nacional. Além disso, seu compromisso ambiental rendeu-lhes o Prêmio Expressão de Ecologia. Leia mais e conheça as iniciativas da Digitro em sustentabilidade e como elas fortalecem seu papel como líder em ESG."
           />
          </Grid>
          <Grid item xs={12} md={6}>
            <BookingCustomerReviews
              title="Grupo Almeida Junior"
              subheader="Postagem feita em 23/05/2023"
              description="Construindo um futuro sustentável: O compromisso da Almeida Junior com ações sociais e ambientais Descubra como o grupo Almeida Junior está liderando o caminho rumo a um estilo de vida mais sustentável e inclusivo. Por meio de campanhas de doação, tecnologias sustentáveis e práticas que beneficiam o meio ambiente, eles estão transformando a forma como os shoppings operam. A Almeida Junior está comprometida em implementar as melhores práticas ambientais, sociais e de governança, desempenhando um papel ativo na construção de um futuro melhor para as próximas gerações. Leia mais para conhecer as ações inspiradoras que estão impulsionando mudanças positivas nas comunidades onde estão inseridos."
            />
          </Grid>
          <Grid item xs={12} md={6}>
            <BookingCustomerReviews
              title="Nexxera"
              subheader="Postagem feita em 25/05/2023"
              description="
              Transformando negócios com ações ESG: O compromisso do Grupo Nexxera com a sustentabilidade e a responsabilidade social Descubra como o Grupo Nexxera está liderando a mudança no setor de tecnologia com ações ESG. Explore suas iniciativas sustentáveis, inclusivas e de governança responsável que estão transformando negócios e impactando positivamente a sociedade. Saiba como a Nexxera adota tecnologias sustentáveis, promove a inclusão social e adere às melhores práticas de governança, impulsionando um futuro mais sustentável e equitativo."
            />
          </Grid>
          <Grid item xs={12} md={6}>
            <BookingCustomerReviews
              title="Recicash"
              subheader="Postagem feita em 01/06/2023"
              description="ReciCash: Transformando garrafas PET em material para impressoras 3D em ação de ESG Descubra como a empresa fictícia ReciCash está revolucionando a reciclagem ao transformar garrafas PET em material para impressoras 3D. Conheça essa inovadora ação de ESG que visa reduzir o impacto ambiental, criar oportunidades sustentáveis e promover a conscientização sobre a importância da reciclagem. Leia mais para descobrir como a ReciCash está liderando o caminho rumo a um futuro mais sustentável e inclusivo."
            />
          </Grid>
          
        </Grid>
      </Container>
    </>
  );
}



