import React from "react"
import Item from "./Item"
import OutLink from "./OutLink"
import Foldable from "./content/Foldable"
import styled from "styled-components"

const Definition = ({ short }: { short: boolean }) => {
  return (
    <>
      <h2>❔ Qu'est-ce que le COVID-19 ?</h2>
      <p>
        Depuis janvier 2020 une épidémie de Coronavirus, nommée COVID-19 s’est
        propagée depuis la Chine.
      </p>
      {!short && (
        <>
          <p>
            Les coronavirus font partie d’une famille de virus susceptibles
            d’être à l’origine de plusieurs maladies. Chez l’Homme, ces maladies
            vont du rhume banal à une infection pulmonaire sévère, responsable
            d’une détresse respiratoire aiguë. Le v
          </p>
          <p>
            Le coronavirus responsable de la pandémie actulle est nommé{" "}
            <strong>SARS-CoV-2</strong>. Le nom de la maladie qu'il cause est
            nommée <strong>COVID-19</strong>.
          </p>
          <h3>Symptômes</h3>
          <p>
            Les symptômes les plus courants sont la fièvre, une toux sèche, et
            de la fatigue. Une perte subite et totale de l'odorat et du goût
            sont également possibles. Moins courants mais possibles sont
            d'autres symptômes grippaux comme de la congestion ou une toux plus
            grasse. En cas d'une évolution plus grave, de la difficulté à
            respirer peut survenir.
          </p>
          <img
            style={{ maxWidth: 300 }}
            src="https://www.gouvernement.fr/sites/default/files/cimages/signes_symptomes_symptomes.png"
            alt="symptômes"
          />
          <p style={{ color: "red", margin: "16px 0" }}>
            <strong>
              ‼ En cas de difficultés à respirer ou malaise, et uniquement dans
              ces cas, contactez le SAMU (15). En tout autre cas, pour ne pas
              saturer le service, vous pouvez suivre{" "}
              <OutLink href="https://maladiecoronavirus.fr/se-tester">
                ce test d'orientation afin de déterminer la marche à suivre.
              </OutLink>
            </strong>
          </p>
          <h3>Transmission</h3>
          <p>
            La transmission du virus s'effectue à travers des projections de
            gouttelettes contaminées lors d'une toux ou d'un éternuement, mais
            aussi le transfert de virus depuis des parties du corps (mains ...)
            contaminées.
          </p>
          <img
            style={{ maxWidth: 300 }}
            src="https://www.gouvernement.fr/sites/default/files/cimages/transmission_moins_1_metre.png"
          />
          <h3>Prévention</h3>
          <p>
            Afin de minimiser vos chances de tomber malade, ou de contaminer les
            autres, respectez les règles suivantes:
          </p>
          <ul>
            <li>Lavez-vous très régulièrement les mains</li>
            <li>Toussez ou éternuez dans votre coude ou dans un mouchoir</li>
            <li>Utilisez un mouchoir à usage unique et jetez-le</li>
            <li>Saluez sans se serrer la main, évitez les embrassades</li>
            <li>Restez à plus d’un mètre de distance les uns des autres</li>
          </ul>
          <p>
            Un grand nombre d'informations est disponible{" "}
            <OutLink href="https://www.gouvernement.fr/info-coronavirus">
              sur le site du gouvernement.
            </OutLink>{" "}
          </p>
        </>
      )}
    </>
  )
}

const AttestationContainer = styled(Item)`
  max-width: 200px;
  @media (max-width: 600px) {
    max-width: initial;
  }
`

export default function Sticky() {
  return (
    <>
      <Foldable
        long={<Definition short={false} />}
        short={<Definition short />}
      />
      <AttestationContainer>
        <h2>📜 Attestation de déplacement</h2>
        <p>Une attestation est obligatoire pour tous les déplacements.</p>
        <OutLink href="https://www.interieur.gouv.fr/Actualites/L-actu-du-Ministere/Attestation-de-deplacement-derogatoire-et-justificatif-de-deplacement-professionnel">
          Vous la trouverez sur le site du Ministère en suivant ce lien.
        </OutLink>
      </AttestationContainer>
    </>
  )
}
