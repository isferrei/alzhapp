import React from "react";
import { Button, Container } from "@material-ui/core";
import { Form, Box, Break, Row, Percentis, PercentisCard } from "./styles";
import colors from "../../services/colors";
import { CognitiveTestContext } from "../../context/cognitiveTestContext/cognitiveTestContext";

function Results(props) {
  const cognitiveTestData = React.useContext(CognitiveTestContext);

  return (
    <Container>
      <label>Results / Summary:</label>
      <Form>
        <Box>
          <label>Physician: {cognitiveTestData.physician}</label>
        </Box>
        <Box>
          <label>Patient: {cognitiveTestData.patitent}</label>
        </Box>
        <Box>
          <label>ID number: {cognitiveTestData.idNumber}</label>
        </Box>
        <Box>
          <label>Sex: {cognitiveTestData.sex}</label>
          <label> Age: {cognitiveTestData.age}</label>
        </Box>
        <Box>
          <label>Diagnosis: {cognitiveTestData.diagnosis}</label>
        </Box>
      </Form>
      <Break />
      <label>
        <strong>Average Analysis Report</strong>
      </label>
      <Break />
      <label>
        <strong>Peripapillary RNFL (in microns)</strong>
      </label>
      <Row>
        <div>
          <Box>
            <label>OD</label>
          </Box>
          <Box>
            <label>OS</label>
          </Box>
        </div>
        <PercentisCard>
          <table>
            <tr>
              <td>
                <label>Controls</label>
                <Percentis>{}</Percentis>
              </td>
            </tr>
            <tr></tr>
            <tr></tr>
            <tr></tr>
            <tr>
              <td>
                <Percentis>p25-p50</Percentis>
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
        <div>
          <Box>
            <label>OD</label>
          </Box>
          <Box>
            <label>OS</label>
          </Box>
        </div>
        <PercentisCard>
          <table>
            <tr>
              <td>
                <label>Controls</label>
                <Percentis></Percentis>
              </td>
            </tr>
            <tr></tr>
            <tr></tr>
            <tr></tr>
            <tr>
              <td>
                <Percentis></Percentis>
              </td>
            </tr>
          </table>
        </PercentisCard>
      </Row>
      <Break />
      <label>
        <strong>Macular volume (in mm3)</strong>
      </label>
      <Row>
        <div>
          <Box>
            <label>OD</label>
          </Box>
          <Box>
            <label>OS</label>
          </Box>
        </div>
        <PercentisCard>
          <table>
            <tr>
              <td>
                <label>Controls</label>
                <Percentis></Percentis>
              </td>
            </tr>
            <tr></tr>
            <tr></tr>
            <tr></tr>
            <tr>
              <td>
                <Percentis></Percentis>
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
        <div>
          <Box>
            <label>OD</label>
          </Box>
          <Box>
            <label>OS</label>
          </Box>
        </div>
        <PercentisCard>
          <table>
            <tr>
              <td>
                <label>Controls</label>
                <Percentis></Percentis>
              </td>
            </tr>
            <tr></tr>
            <tr></tr>
            <tr></tr>
            <tr>
              <td>
                <Percentis></Percentis>
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
        <div>
          <Box>
            <label>OD</label>
          </Box>
          <Box>
            <label>OS</label>
          </Box>
        </div>
        <PercentisCard>
          <table>
            <tr>
              <td>
                <label>Controls</label>
                <Percentis></Percentis>
              </td>
            </tr>
          </table>
        </PercentisCard>
      </Row>
    </Container>
  );
}
export default Results;
