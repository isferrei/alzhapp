import React from "react";

import {
  Container,
  Form,
  Box,
  Break,
  Row,
  Percentis,
  PercentisCard,
  PrintButton,
  Column,
} from "./styles";
import { CognitiveTestContext } from "../../context/cognitiveTestContext";
import { OctDataContext } from "../../context/octDataContext";
import print from "../../icons/print.svg";
import { useReactToPrint } from "react-to-print";

function Results() {
  const cognitiveTestData = React.useContext(CognitiveTestContext);
  const octData = React.useContext(OctDataContext);
  const resultsRef = React.useRef();

  function handlePrint(id) {
    const result = document.getElementById("results").innerHTML;
    var myWindow = window.open("", "Results", "height=400,width=600");
    myWindow.document.write("<html><head>");
    myWindow.document.write("</head><body>");
    myWindow.document.write(result);
    myWindow.document.write("</body></html>");
    myWindow.document.close(); // necessary for IE >= 10

    myWindow.onload = function () {
      myWindow.focus();
      myWindow.print();
    };
  }

  return (
    <>
      <Container id="results" ref={resultsRef}>
        <center>
          <h4>Results / Summary:</h4>
        </center>
        <Form>
          <Box>
            <label>Physician:</label>{" "}
            <p>{cognitiveTestData.cognitiveTest.physician}</p>
          </Box>
          <Box>
            <label>Patient:</label>{" "}
            <p>{cognitiveTestData.cognitiveTest.patient}</p>
          </Box>
          <Box>
            <label>ID number:</label>{" "}
            <p>{cognitiveTestData.cognitiveTest.idNumber}</p>
          </Box>
          <Box>
            <label>Sex:</label> <p>{cognitiveTestData.cognitiveTest.sex}</p>
            <label className="label-age"> Age:</label>
            <p>{cognitiveTestData.cognitiveTest.age}</p>
          </Box>
          <Box>
            <label>Diagnosis:</label>{" "}
            <p>{cognitiveTestData.cognitiveTest.diagnosis}</p>
          </Box>
          <Box>
            <label>Cognitive test A:</label>{" "}
            <p>{cognitiveTestData.cognitiveTest.cognitiveTestA}</p>
          </Box>
          <Box>
            <label>Score value:</label>{" "}
            <p>{cognitiveTestData.cognitiveTest.scoreA}</p>
          </Box>
          <Box>
            <label>Cognitive test B:</label>{" "}
            <p>{cognitiveTestData.cognitiveTest.cognitiveTestB}</p>
          </Box>
          <Box>
            <label>Score value:</label>{" "}
            <p>{cognitiveTestData.cognitiveTest.scoreB}</p>
          </Box>
          <Box>
            <label>Ocular disease:</label>{" "}
            <p>{cognitiveTestData.cognitiveTest.ocularDisease}</p>
          </Box>
          <Box>
            <label>OCT Model:</label>{" "}
            <p>{cognitiveTestData.cognitiveTest.octModel}</p>
          </Box>
        </Form>
        <center>
          <h4>Average Analysis Report</h4>
        </center>
        <Break />
        <label>
          <strong>Peripapillary RNFL (in microns)</strong>
        </label>
        <Row>
          <Column>
            <Box>
              <label>OD</label>
              <p>{octData.octData.peripapillary.od} μm</p>
            </Box>
            <Box>
              <label>OS</label>
              <p>{octData.octData.peripapillary.os} μm</p>
            </Box>
          </Column>
          <PercentisCard>
            <table>
              <tr>
                <td>
                  <label>Controls</label>
                  {octData.peripOdPerc ? octData.peripOdPerc : <Percentis />}
                </td>
              </tr>
              <tr></tr>
              <tr></tr>
              <tr></tr>
              <tr>
                <td>
                  {octData.peripOsPerc ? octData.peripOsPerc : <Percentis />}
                </td>
              </tr>
            </table>
          </PercentisCard>
        </Row>
        <Break />
        <label>
          <strong>Total macular thickness (in microns)</strong>
        </label>
        <Row>
          <Column>
            <Box>
              <label>OD</label>
              <p>{octData.octData.macular_thickness.od} μm</p>
            </Box>
            <Box>
              <label>OS</label>
              <p>{octData.octData.macular_thickness.os} μm</p>
            </Box>
          </Column>
          <PercentisCard>
            <table>
              <tr>
                <td>
                  <label>Controls</label>
                  {octData.totalMacularOdPerc ? (
                    octData.totalMacularOdPerc
                  ) : (
                    <Percentis />
                  )}
                </td>
              </tr>
              <tr></tr>
              <tr></tr>
              <tr></tr>
              <tr>
                <td>
                  {octData.totalMacularOsPerc ? (
                    octData.totalMacularOsPerc
                  ) : (
                    <Percentis />
                  )}
                </td>
              </tr>
            </table>
          </PercentisCard>
        </Row>
        <Break />
        <label>
          <strong>Macular volume (in mm³)</strong>
        </label>
        <Row>
          <Column>
            <Box>
              <label>OD</label>
              <p>{octData.octData.macular_volume.od} mm³</p>
            </Box>
            <Box>
              <label>OS</label>
              <p>{octData.octData.macular_volume.os} mm³</p>
            </Box>
          </Column>
          <PercentisCard>
            <table>
              <tr>
                <td>
                  <label>Controls</label>
                  {octData.macularVolOdPerc ? (
                    octData.macularVolOdPerc
                  ) : (
                    <Percentis />
                  )}
                </td>
              </tr>
              <tr></tr>
              <tr></tr>
              <tr></tr>
              <tr>
                <td>
                  {octData.macularVolOsPerc ? (
                    octData.macularVolOsPerc
                  ) : (
                    <Percentis />
                  )}
                </td>
              </tr>
            </table>
          </PercentisCard>
        </Row>
        <Break />
        <label>
          <strong>GCL/IPL thickness (in microns)</strong>
        </label>
        <Row>
          <Column>
            <Box>
              <label>OD</label>
              <p>{octData.octData.gcl_ipl.od} μm</p>
            </Box>
            <Box>
              <label>OS</label>
              <p>{octData.octData.gcl_ipl.os} μm</p>
            </Box>
          </Column>
          <PercentisCard>
            <table>
              <tr>
                <td>
                  <label>Controls</label>
                  {octData.gclIplOdPerc ? octData.gclIplOdPerc : <Percentis />}
                </td>
              </tr>
              <tr></tr>
              <tr></tr>
              <tr></tr>
              <tr>
                <td>
                  {" "}
                  {octData.gclIplOsPerc ? octData.gclIplOsPerc : <Percentis />}
                </td>
              </tr>
            </table>
          </PercentisCard>
        </Row>
        <Break />
        <label>
          <strong>GCL/IPL/RNFL (in microns)</strong>
        </label>
        <Row>
          <Column>
            <Box>
              <label>OD</label>
              <p>{octData.octData.gcl_ipl_rnfl.od} μm</p>
            </Box>
            <Box>
              <label>OS</label>
              <p>{octData.octData.gcl_ipl_rnfl.os} μm</p>
            </Box>
          </Column>
          <PercentisCard>
            <table>
              <tr>
                <td>
                  <label>Controls</label>
                  {octData.gclIplRnflOdPerc ? (
                    octData.gclIplRnflOdPerc
                  ) : (
                    <Percentis />
                  )}
                </td>
              </tr>
              <tr></tr>
              <tr></tr>
              <tr></tr>
              <tr>
                <td>
                  {octData.gclIplRnflOsPerc ? (
                    octData.gclIplRnflOsPerc
                  ) : (
                    <Percentis />
                  )}
                </td>
              </tr>
            </table>
          </PercentisCard>
        </Row>
      </Container>
      <PrintButton onClick={() => handlePrint("results")}>
        <img src={print} alt="print icon" width="20px" height="20px" />
        Print / Save
      </PrintButton>
    </>
  );
}
export default Results;
