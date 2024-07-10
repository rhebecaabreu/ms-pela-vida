import React from "react";
import styled from "styled-components";
import Hero from "components/molecules/Hero";
import Banner from "../../assets/campaign_banner.png";
import FooterBanner from "../../assets/footer_banner.png";
import Section from "components/organisms/Section";
import BannerArea from "components/molecules/BannerArea";
import Heading from "components/atoms/Heading";
import Grid from "components/atoms/Grid";
import Button from "components/atoms/Button";
import TruckImage from "../../assets/notice.png";

const Image = styled.div`
  display: flex;
  width: 100%;
  background-image: url(${(props) => props.image}),
    linear-gradient(180deg, rgba(255, 255, 255, 0) 60.61%, #ffffff 100%);
  background-blend-mode: overlay;
  background-size: cover;
  background-repeat: no-repeat;
  height: 100%;
  padding-left: 52px;
  border-radius: 8px;
`;

const Home = () => {
  return (
    <>
      <Hero image={Banner} />
      <Section>
        <Grid md={2}>
          <div>slider</div>
          <div>
            <Heading>
              <h1 id="about">
                Campanha MS Pela Vida já enviou mais de 50 toneladas de doações
                ao RS e em breve SENAI MS tomará a frente nos reparos de danos
              </h1>
            </Heading>

            <p>
              Após uma semana de operação, a campanha MS Pela Vida - Unidos pelo
              Rio Grande do Sul contabiliza números superlativos. Mais de 213
              mil itens básicos doados pela população sul-mato-grossense
              abastecem caminhões e aeronaves que partem diariamente com destino
              ao sul do país, em socorro às vítimas do maior desastre ambiental
              em solo gaúcho. Mais de 50 toneladas de donativos já foram
              enviadas ao sul do país, em uma ação que contou com o trabalho de
              1,5 mil voluntários até o momento. O Presidente da FIEMS, Sérgio
              Longen, comenta os próximos passos da campanha: "A catástrofe do
              Rio Grande do Sul nos traz um alerta para o clima. Precisamos
              entender essa mensagem e avaliar como implementar ações que evitem
              essa realidade em mais ocasiões. Mas agora a tarefa de casa
              brasileiro é atuar em socorro ao Rio Grande do Sul, e por este
              motivo em breve o SENAI tomará a linha de frente na luta para
              reparar os danos nas cidades gaúchas.
            </p>
          </div>
        </Grid>
      </Section>
      <Section>
        <Grid md={2}>
          <div>
            <Heading>
              <h1 id="subscribe">Próximos passos para reconstruir o RS</h1>
            </Heading>
            <p>
              Mais do que arrecadações, é importante oferecer esperança de
              recomeço às famílias que perderam tudo nas enchentes do Rio Grande
              do Sul. Neste sentido, o Sistema Fiems, por meio do Senai, está
              enviando duas unidades móveis para serem enviadas às cidades
              atingidas pelo desastre climático com serviços de eletrotécnica e
              marcenaria.
            </p>
            <p>
              A expectativa é enviar inicialmente uma equipe 26 pessoas, entre
              <strong> engenheiros, professores e técnicos.</strong>
            </p>
            <p>
              <strong>
                Tem interesse em se voluntariar? Preencha o formulário e se
                inscreva para ajuda as vítimas da maior catástrofe natural do
                Sul do país.
              </strong>
            </p>
            <Button>Quero participar</Button>
          </div>
          <div>
            <Image image={TruckImage} />
          </div>
        </Grid>
      </Section>
      <Section>
        <BannerArea image={FooterBanner} />
      </Section>
    </>
  );
};

export default Home;
