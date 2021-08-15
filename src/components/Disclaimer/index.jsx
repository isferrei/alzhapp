import React from "react";
import { Container } from "./styles";

function Disclaimer() {
  return (
    <Container>
      <p>
        As the name implies, this software was developed as a tool to assist
        doctors and researchers in detecting peripapillary retinal nerve fiber
        layer and macular thickness reduction, previously assessed by optical
        coherence tomography, in patients with a confirmed or suspected
        diagnosis of Alzheimer's disease. It is not intended to replace a
        comprehensive ophthalmologic or neurological examination. The AlzhApp is
        a research tool and is not intended for clinical use. Accordingly, it
        should not be used to guide treatment decisions for individual patients.
      </p>
    </Container>
  );
}
export default Disclaimer;
