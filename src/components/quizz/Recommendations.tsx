import React, { FC } from "react"

import { Recommendation } from "../../helpers/types"
import Foldable from "../content/Foldable"
import ItemList from "../content/ItemList"
import styled from "styled-components"
import OutLink from "../OutLink"
import Share from "../Share"
import CompanyPrompt from "../content/CompanyPrompt"

const Row = styled.div`
  display: flex;
  align-items: center;
`

const AppImage = styled.img`
  width: 120px;
  max-width: 120px;
  border-radius: 4px;
  &:hover {
    opacity: 0.8;
  }
  @media (max-width: 600px) {
    width: 80px;
    max-width: 80px;
  }
`

const App = ({
  href,
  src,
  background,
}: {
  href: string
  src: string
  background?: string
}) => {
  return (
    <OutLink href={href}>
      <AppImage src={src} style={{ background }} />
    </OutLink>
  )
}

const Apps = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 16px 0;
  & > :not(:last-child) {
    margin-right: 32px;
    @media (max-width: 600px) {
      margin-right: 16px;
    }
  }
`

type RecoComponent = FC<{ short: boolean }>

const CovidTest: RecoComponent = ({ short }) => {
  return (
    <>
      <h2>😷 Inquièt-e d'avoir le COVID-19 ?</h2>
      <p>
        Le gouvernement fournit un{" "}
        <strong>
          outil gratuit pour évaluer le risque d'avoir contracté COVID-19
        </strong>{" "}
        et fluidifier la prise en charge des personnes par les services
        d’urgences pendant l'épidémie.
      </p>
      {!short && (
        <>
          <Row>
            <p>
              ❗ Attention, l'exhaustivité, l'exactitude, le caractère à jour
              des informations et contenus mis à disposition dans cette
              application, ou leur adéquation à des finalités particulières, ne
              sont pas garantis.
            </p>
          </Row>
          <OutLink href="https://maladiecoronavirus.fr/se-tester">
            Suivez ce lien pour faire le test
          </OutLink>
        </>
      )}
    </>
  )
}

const NewsSources: RecoComponent = ({ short }) => {
  return (
    <>
      <h2>📰 Eviter la surcharge d'informations</h2>
      <p>
        Il est facile, en particulier en état de confinement, d'être submergé
        d'informations concernant la pandémie.
      </p>

      {!short && (
        <>
          <p>
            Il est important de{" "}
            <strong>
              ne pas passer un temps excessif à consommer l'information
            </strong>{" "}
            , et de se limiter à <strong>quelques sources fiables</strong>. En
            particulier : veillez à éviter de passer trop de temps ou d'obtenir
            vos informations par
          </p>
          <ul>
            <li>
              ❌ Les <strong>réseaux sociaux</strong> (ils sont remplis de
              fausses informations et d'informations anxiogènes)
            </li>
            <li>
              ❌ Les <strong>chaînes d'information en continu</strong>
            </li>
            <li>
              ❌ Les <strong>live-feeds</strong> de sites de presse en ligne
            </li>
            <li>
              ❌ Le <strong>bouche à oreille</strong> , propice aux informations
              fausses ou déformées. Il est très bénéfique de rester très
              connecté avec ses proches ; mais évitez de trop discuter de
              l'actualité, qui est anxiogène
            </li>
          </ul>
          <p>Il est conseillé de privilégier :</p>
          <ul>
            <li>
              ✅ Les journaux papier (les kiosques à journaux demeurent ouverts
              malgré le confinement !)
            </li>
            <li>✅ Les journaux TV (13h, 20h, ...)</li>
            <li>✅ Le sites officiels (voir ci-dessous pour un exemple)</li>
          </ul>
          <p>
            Le gouvernement fournit &nbsp;
            <OutLink href="https://www.gouvernement.fr/info-coronaviru">
              une page d'information à jour sur le COVID-19
            </OutLink>
          </p>
        </>
      )}
    </>
  )
}

const PhysicalResources: RecoComponent = ({ short }) => {
  return (
    <>
      <h2>🏃‍♂️ Maintenir une activité physique</h2>
      <p>
        Il est recommandé de maintenir une activité physique régulière malgré le
        confinement
      </p>
      {!short && (
        <>
          <p>
            Pour cela, il va être nécessaire de l’adapter à cette situation
            exceptionnelle, en maintenant une pratique régulière, dans son
            jardin ou à l’intérieur, tout en adaptant son apport de nourriture à
            sa dépense réelle d’énergie, et en veillant à la qualité de son
            sommeil en maintenant des horaires fixes.
          </p>
          <h3>Quelques réflexes simples à adopter</h3>
          <ul>
            <li>
              Faites quelques minutes de marche et d’étirements, à l’intérieur
              ou dans votre jardin,{" "}
              <strong>
                au minimum toutes les 2 heures passées en position assise ou
                allongée
              </strong>
              .
            </li>
            <li>
              Essayez vous au renforcement musculaire qui ne nécessite presque
              aucun matériel. Avec une chaise, des bouteilles d’eau remplies,
              une marche d’escalier, du mobilier, vous pouvez renforcer toutes
              les chaînes musculaires de votre corps.
            </li>
            <li>
              Nettoyer, astiquer, balayer… les <strong>tâches ménagères</strong>
               sont des activités physiques : essayez d’y mettre plus d’énergie
              que d’habitude, cela renforcera vos muscles et vous fera peut-être
              transpirer.
            </li>
            <li>
              Si vous disposez d’une cour ou d’un jardin individuel, rendez le
              propice aux activités physiques, ou faites un potager.
            </li>
          </ul>
          <h3>Quelques ressources pour vous aider</h3>
          <p>
            Utilisez des plateformes numériques gratuites et sous haut patronage
            du ministere des sports
          </p>
          <Apps>
            <App
              href="https://www.activiti.fr/app/"
              src="https://www.activiti.fr/img/activiti-logo.svg"
            />
            <App
              href="https://www.about.besport.com/"
              src="https://static.wixstatic.com/media/96773c_b2bd57415bae49c89e44826a388b39ff~mv2.png/v1/crop/x_0,y_21,w_1000,h_398/fill/w_191,h_75,al_c,q_85,usm_0.66_1.00_0.01/Be%20Sport_ff0040%20(1).webp"
            />
            <App
              background="#3d2683"
              href="https://www.goove.fr/"
              src="https://www.goove.app/themes/custom/goove_app/img/logo/logo-negate-more.svg"
            />
          </Apps>
          <p>
            Vous retrouverez également ici{" "}
            <OutLink href="https://www.limousin-sport-sante.fr/upload/tests_documents_educateurs/LSS_doc_renforcement_muscu.pdf">
              quelques suggestions d'exercices de renforcement musculaire.
            </OutLink>
          </p>
          <p>
            Retrouvez également de multiples conseils{" "}
            <OutLink href="http://www.sports.gouv.fr/accueil-du-site/actualites/article/avec-le-ministere-des-sports-faire-du-sport-chez-soi-c-est-facile">
              sur le site du ministère
            </OutLink>
          </p>
        </>
      )}
    </>
  )
}

const RhythmTips: RecoComponent = ({ short }) => {
  return (
    <>
      <h2>⏲ Conserver un rythme de vie</h2>
      <p>
        Il est recommandé de maintenir un rythme de vie quotidien le plus proche
        possible de ses habitudes
      </p>
      {!short && (
        <>
          <ul>
            <li>🛌 Se lever et se coucher à heures fixes</li>
            <li>🚿 Prendre sa douche tous les matins</li>
            <li>👕S'habiller comme pour une journée habituelle</li>
            <li>🍽 Manger à heures fixes</li>
            <li>
              🧹 Faire régulièrement le ménage, la vaisselle, la lessive, ....
            </li>
          </ul>
          <p>
            Il peut être très utile de vous aider d'un agenda 📓 (papier ou
            virtuel) afin de vous aider à programmer et ritualiser ces moments.
          </p>
        </>
      )}
    </>
  )
}

const IsolationTips: RecoComponent = ({ short }) => {
  return (
    <>
      <h2>👨‍👨‍👧‍👧 Combattre l'isolement</h2>
      <p>
        Il est recommandé de garder un contact régulier avec ses proches, sa
        famille et ses collègues.
      </p>
      {!short && (
        <>
          <p>
            Faites des appels ou de visioconférences à plusieurs et à heures
            fixes avec un café ou à l'heure du repas pour les partager ensemble.
          </p>
          <p>
            Se rendre utile auprès des voisins ou faire preuve de solidarité
            peut également aider.
          </p>
          <h3>Les plateformes pour communiquer</h3>
          <p>
            Parmi les plateformes les plus utilisées pour communiquer en
            vidioconférence :
          </p>
          <ul>
            <li>Zoom</li>
            <li>Skype</li>
            <li>Facebook Messenger</li>
            <li>Whatsapp</li>
            <li>Hangouts</li>
          </ul>
          <h3>Rendre service à ses voisins</h3>
          <p>
            Pour se rendre utile entre voisins ou faire preuve de solidarité,
            différentes plateformes existent :
          </p>
          <ul>
            <li>
              <OutLink href="https://fr.nextdoor.com/">Nextdoor</OutLink>
            </li>
            <li>
              <OutLink href="https://enpremiereligne.fr/">
                Enpremiereligne
              </OutLink>
            </li>
            <li>
              <OutLink href="https://www.allovoisins.com/">AlloVoisins</OutLink>
            </li>
            <li>
              <OutLink href="https://voisinssolidaires.fr/">
                Voisins Solidaires
              </OutLink>
            </li>
          </ul>
        </>
      )}
    </>
  )
}

const ActivitiesTips: RecoComponent = ({ short }) => {
  return (
    <>
      <h2>🎨 S'occuper avec des activités</h2>
      <p>
        Afin de vaincre l'ennui et la frustration du confinement, il est
        recommandé de s'occuper avec des activités.
      </p>
      {!short && (
        <>
          <p>Voici quelques activités recommandés</p>
          <ul>
            <li>
              Lire en piochant dans sa bibliothèque ou sur Kindle. De nombreux
              distributeurs offrent des e-books gratuitement : &nbsp;
              <OutLink href="https://livre.fnac.com/n309183/Tous-les-Ebooks-gratuits">
                Fnac
              </OutLink>
              ,&nbsp;
              <OutLink href="https://www.cultura.com/ebook/ebook-gratuits-150.html">
                Cultura
              </OutLink>
              ,&nbsp;
              <OutLink href="https://www.dargaud.com/Le-Mag/Actualites/Restezchezvous-On-vous-offre-de-la-lecture-gratuite-%21-2-nouvelles-BD">
                Dargaud
              </OutLink>
              ,&nbsp;
              <OutLink href="https://www.furet.com/ebooks-gratuits">
                Le Furet Du Nord
              </OutLink>
              .
            </li>
            <li>
              Regarder des films 🎬 et des séries télé. De nombreuses chaînes
              offrent leur contenu gratuitement (OCS, Arte, Canal+...)
            </li>
            <li>Ecouter de la musique 🎼, des podcasts ou la radio </li>
            <li>
              Faire des activités manuelles 🛠 (couture, peinture, dessin,
              menuiserie, bricolage, ...)
            </li>
            <li>
              Jouer à des jeux de société (certains ne nécessitent pas de
              matériel !).
            </li>
            <li>
              Participer virtuellement à des activités culturelles, comme{" "}
              <OutLink href="http://www.leparisien.fr/culture-loisirs/le-louvre-van-gogh-5-musees-a-parcourir-virtuellement-depuis-votre-salon-22-03-2020-8285418.php">
                des visites virtuelles de musées 🗿
              </OutLink>{" "}
              ou encore de{" "}
              <OutLink href="https://www.sciencesetavenir.fr/decouvrir/7-visites-virtuelles-a-faire-malgre-le-confinement-contre-l-epidemie-de-coronavirus_142555">
                musées scientifiques et d'histoire naturelle 🧪
              </OutLink>
              , ou encore{" "}
              <OutLink href="https://www.roh.org.uk/news/the-royal-opera-house-launches-a-programme-of-free-online-content-for-the-culturally-curious-at-home">
                des ballets et opéras.
              </OutLink>
              . Le{" "}
              <OutLink href="https://www.culture.gouv.fr/Culturecheznous">
                site du ministère de la culture
              </OutLink>{" "}
              référence également une multitude de contenus virtuels.
            </li>
            <li>
              S'éduquer 👨‍🎓 en suivant des cours gratuits en ligne, par exemple
              sur <OutLink href="https://www.udemy.com/">Udemy</OutLink> ,{" "}
              <OutLink href="https://www.coursera.org/">Coursera</OutLink>,{" "}
              <OutLink href="https://www.edx.org/">edX</OutLink>
            </li>
          </ul>
        </>
      )}
    </>
  )
}

const SleepingTips: RecoComponent = ({ short }) => {
  return (
    <>
      <h2>😴Trouver le sommeil</h2>
      <p>
        Le confinement ne fait pas bon ménage avec le sommeil. Stress, angoisse,
        changement de rythme, manque d’activité…
      </p>
      {!short && (
        <>
          <p>
            le nouveau coronavirus nous tient loin des bras de Morphée. Qu’on
            soit enfant ou adulte, quelques solutions existent pour réussir à
            dormir sur ses deux oreilles pendant l’épidémie.
          </p>
          <ul>
            <li>
              Penser à pratiquer une activité physique 🏃‍♀️ durant la journée
            </li>
            <li>
              Réserver la chambre à coucher au seul sommeil 😴 (ou activités
              sexuelles 🙈), en aucun cas utiliser de smartphone, PC ou
              pratiquer d'autres activités stimulantes dans le lit.
            </li>
            <li>Se coucher et se lever à heures fixes ⏲</li>
            <li>
              Eviter les activités trop stimulantes (sport, écrans ...) avant le
              coucher. Un peu de lecture 📖 ou un bain chaud 🛀 peuvent aider à
              préparer au sommeil.
            </li>
            <li>
              Mediter 🧘‍♀️ et se détendre en journée. Les applications ci-dessous
              vous permettront d'apprendre rapidement les bases de cette
              pratique de relaxation. La méditation et la relaxation peuvent
              également se pratiquer pour atteindre le sommeil, le soir.
            </li>
            <Apps>
              <App
                src="https://medias.petitbambou.com/newsite/assets/PbbLogoSmall.png"
                href="https://www.petitbambou.com/fr/"
              />
              <App
                href="https://www.headspace.com/fr/"
                src="https://www.headspace.com/static/images/logo.svg"
              />
            </Apps>
            <p>
              Retrouvez d'autres conseils sur le site de{" "}
              <OutLink href="https://www.passeportsante.net/fr/Actualites/Dossiers/DossierComplexe.aspx?doc=astuces-mieux-dormir-naturellement">
                Passeport Santé
              </OutLink>
            </p>
          </ul>
        </>
      )}
    </>
  )
}

const RECO_COMPONENTS: Record<Recommendation, RecoComponent> = {
  [Recommendation.DIAGNOSIS]: CovidTest,
  [Recommendation.ACTIVITIES]: ActivitiesTips,
  [Recommendation.PHYSICAL]: PhysicalResources,
  [Recommendation.NEWS]: NewsSources,
  [Recommendation.RHYTHM]: RhythmTips,
  [Recommendation.SLEEP]: SleepingTips,
  [Recommendation.ISOLATION]: IsolationTips,
}

export const RecommendationItem = ({
  recommendation,
  recommended,
}: {
  recommendation: Recommendation
  recommended: boolean
}) => {
  const RecoComp = RECO_COMPONENTS[recommendation]
  return (
    <Foldable
      recommended={recommended}
      key={recommendation}
      defaultOpen={false}
      short={<RecoComp short />}
      long={<RecoComp short={false} />}
    />
  )
}

export default function Recommendations({
  recommendations,
}: {
  recommendations: Set<Recommendation>
}) {
  return (
    <div style={{ position: "relative" }}>
      <Share />
      {recommendations.size > 0 ? (
        <div style={{ marginBottom: 16 }}>
          <h2>🌟 Ressources recommandées pour vous</h2>
          <ItemList>
            {[...recommendations].map(r => (
              <RecommendationItem recommendation={r} key={r} recommended />
            ))}
          </ItemList>
        </div>
      ) : (
        <p style={{ paddingBottom: 32, fontWeight: 600, fontSize: 14 }}>
          👌 Il semblerait que vous n'ayez pas trop de difficultés avec la
          situation actuelle, tant mieux ! Vous trouverez plus bas quelques
          ressources qui pourraient tout de même vous intéresser pour les temps
          à venir.
        </p>
      )}
      <CompanyPrompt />
      {recommendations.size < Object.values(Recommendation).length && (
        <>
          <h3 style={{ marginTop: 16, marginBottom: 16 }}>
            Ressources supplémentaires
          </h3>
          <ItemList>
            {Object.values(Recommendation)
              .filter(i => !recommendations.has(i))
              .map(r => (
                <RecommendationItem
                  recommendation={r as Recommendation}
                  key={r}
                  recommended={false}
                />
              ))}
          </ItemList>
        </>
      )}
    </div>
  )
}
