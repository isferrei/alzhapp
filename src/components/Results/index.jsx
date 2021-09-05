import React from 'react';

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
  Buttons,
} from './styles';
import { CognitiveTestContext } from '../../context/cognitiveTestContext';
import { OctDataContext } from '../../context/octDataContext';
import print from '../../icons/print.svg';
import save from '../../icons/save.svg';
import { useReactToPrint } from 'react-to-print';
import {
  PDFDownloadLink,
  Page,
  Text,
  View,
  Document,
  StyleSheet,
  Font,
} from '@react-pdf/renderer';

function Results() {
  const cognitiveTestData = React.useContext(CognitiveTestContext);
  const octData = React.useContext(OctDataContext);
  const resultsRef = React.useRef();
  const [isMobile, setIsMobile] = React.useState(false);

  const handlePrint = useReactToPrint({
    content: () => resultsRef.current,
  });

  React.useEffect(() => {
    const width = window.innerWidth;
    console.log(isMobile);
    if (width <= 500) {
      setIsMobile(true);
    } else {
      setIsMobile(false);
    }
  });

  Font.register({
    family: 'Roboto',
    src: 'https://cdnjs.cloudflare.com/ajax/libs/ink/3.1.10/fonts/Roboto/roboto-light-webfont.ttf',
  });

  const s = StyleSheet.create({
    page: {
      padding: '20px',
      fontSize: '12px',
      fontFamily: 'Roboto',
    },
    section: { textAlign: 'center', margin: 10 },
    line: { margin: 2 },
    percentage: {
      margin: 2,
      display: 'flex',
      flexDirection: 'row',
      width: '150px',
      justifyContent: 'space-between',
      alignItems: 'center',
    },
    percent: {
      display: 'flex',
      flexDirection: 'row',
      textAlign: 'center',
      width: 50,
      fontSize: 10,
      padding: 5,
      borderStyle: 'solid',
      border: '1px',
      borderColor: 'gray',
    },
  });

  const PdfDoc = () => (
    <Document>
      <Page size='A4' style={s.page}>
        <Text style={s.section}>Results / Summary:</Text>
        <Text style={s.line}>
          Physician:{' '}
          <Text style={{ fontWeight: 'bold' }}>
            {cognitiveTestData.cognitiveTest.physician}
          </Text>
        </Text>
        <Text style={s.line}>
          Patient:{' '}
          <Text style={{ fontWeight: 'bold' }}>
            {cognitiveTestData.cognitiveTest.patient}
          </Text>
        </Text>
        <Text style={s.line}>
          ID number:{' '}
          <Text style={{ fontWeight: 'bold' }}>
            {cognitiveTestData.cognitiveTest.idNumber}
          </Text>
        </Text>
        <Text style={s.line}>
          Sex:{' '}
          <Text style={{ fontWeight: 'bold' }}>
            {cognitiveTestData.cognitiveTest.sex}
          </Text>
        </Text>
        <Text style={s.line}>
          Diagnosis:{' '}
          <Text style={{ fontWeight: 'bold' }}>
            {cognitiveTestData.cognitiveTest.diagnosis}
          </Text>
        </Text>
        <Text style={s.line}>
          Cognitive test A:{' '}
          <Text style={{ fontWeight: 'bold' }}>
            {cognitiveTestData.cognitiveTest.cognitiveTestA}
          </Text>
        </Text>
        <Text style={s.line}>
          Score value:{' '}
          <Text style={{ fontWeight: 'bold' }}>
            {cognitiveTestData.cognitiveTest.scoreA}
          </Text>
        </Text>
        <Text style={s.line}>
          Cognitive test B:{' '}
          <Text style={{ fontWeight: 'bold' }}>
            {cognitiveTestData.cognitiveTest.cognitiveTestB}
          </Text>
        </Text>
        <Text style={s.line}>
          Score value:{' '}
          <Text style={{ fontWeight: 'bold' }}>
            {cognitiveTestData.cognitiveTest.scoreB}
          </Text>
        </Text>
        <Text style={s.line}>
          Ocular disease:{' '}
          <Text style={{ fontWeight: 'bold' }}>
            {cognitiveTestData.cognitiveTest.ocularDisease}
          </Text>
        </Text>
        <Text style={s.line}>
          OCT Model:{' '}
          <Text style={{ fontWeight: 'bold' }}>
            {cognitiveTestData.cognitiveTest.octModel}
          </Text>
        </Text>
        <Text style={s.section}>Average Analysis Report</Text>
        <Text style={s.line}>Peripapillary RNFL (in microns)</Text>
        <View style={s.percentage}>
          <View>
            <Text style={s.line}>
              OD:{' '}
              <Text style={{ fontWeight: 'bold' }}>
                {octData.octData.peripapillary.od}{' '}
              </Text>
              μm
            </Text>
            <Text style={s.line}>
              OS:{' '}
              <Text style={{ fontWeight: 'bold' }}>
                {octData.octData.peripapillary.os}
              </Text>{' '}
              μm
            </Text>
          </View>
          <View>
            <Text style={s.line}>Controls</Text>
            <Text
              style={[
                s.percent,
                {
                  backgroundColor: octData?.peripOdPerc?.props?.background,
                },
              ]}
            >
              {octData.peripOdPerc}
            </Text>
            <Text
              style={[
                s.percent,
                {
                  backgroundColor: octData?.peripOsPerc?.props?.background,
                },
              ]}
            >
              {octData.peripOsPerc}
            </Text>
          </View>
        </View>
        <Text style={s.line}>Total macular thickness (in microns)</Text>
        <View style={s.percentage}>
          <View>
            <Text style={s.line}>
              OD:{' '}
              <Text style={{ fontWeight: 'bold' }}>
                {octData.octData.macular_thickness.od}
              </Text>{' '}
              μm
            </Text>
            <Text style={s.line}>
              OS:{' '}
              <Text style={{ fontWeight: 'bold' }}>
                {octData.octData.macular_thickness.os}
              </Text>{' '}
              μm
            </Text>
          </View>
          <View>
            <Text style={s.line}>Controls</Text>
            <Text
              style={[
                s.percent,
                {
                  backgroundColor:
                    octData?.totalMacularOdPerc?.props?.background,
                },
              ]}
            >
              {octData.totalMacularOdPerc}
            </Text>
            <Text
              style={[
                s.percent,
                {
                  backgroundColor:
                    octData?.totalMacularOsPerc?.props?.background,
                },
              ]}
            >
              {octData.totalMacularOsPerc}
            </Text>
          </View>
        </View>
        <Text style={s.line}>Macular volume (in mm³)</Text>
        <View style={s.percentage}>
          <View>
            <Text style={s.line}>
              OD:{' '}
              <Text style={{ fontWeight: 'bold' }}>
                {octData.octData.macular_volume.od}
              </Text>{' '}
              mm³
            </Text>
            <Text style={s.line}>
              OS:{' '}
              <Text style={{ fontWeight: 'bold' }}>
                {octData.octData.macular_volume.os}
              </Text>{' '}
              mm³
            </Text>
          </View>
          <View>
            <Text style={s.line}>Controls</Text>
            <Text
              style={[
                s.percent,
                {
                  backgroundColor: octData?.macularVolOdPerc?.props?.background,
                },
              ]}
            >
              {octData.macularVolOdPerc}
            </Text>
            <Text
              style={[
                s.percent,
                {
                  backgroundColor: octData?.macularVolOsPerc?.props?.background,
                },
              ]}
            >
              {octData.macularVolOsPerc}
            </Text>
          </View>
        </View>
        <Text style={s.line}>GCL/IPL thickness (in microns)</Text>
        <View style={s.percentage}>
          <View>
            <Text style={s.line}>
              OD:{' '}
              <Text style={{ fontWeight: 'bold' }}>
                {octData.octData.gcl_ipl.od}
              </Text>{' '}
              μm
            </Text>
            <Text style={s.line}>
              OS:{' '}
              <Text style={{ fontWeight: 'bold' }}>
                {octData.octData.gcl_ipl.os}
              </Text>{' '}
              μm
            </Text>
          </View>
          <View>
            <Text style={s.line}>Controls</Text>
            <Text
              style={[
                s.percent,
                {
                  backgroundColor: octData?.gclIplOdPerc?.props?.background,
                },
              ]}
            >
              {octData.gclIplOdPerc}
            </Text>
            <Text
              style={[
                s.percent,
                {
                  backgroundColor: octData?.gclIplOsPerc?.props?.background,
                },
              ]}
            >
              {octData.gclIplOsPerc}
            </Text>
          </View>
        </View>
        <Text style={s.line}>GCL/IPL/RNFL (in microns)</Text>
        <View style={s.percentage}>
          <View>
            <Text style={s.line}>
              OD:{' '}
              <Text style={{ fontWeight: 'bold' }}>
                {octData.octData.gcl_ipl_rnfl.od}
              </Text>{' '}
              μm
            </Text>
            <Text style={s.line}>
              OS:{' '}
              <Text style={{ fontWeight: 'bold' }}>
                {octData.octData.gcl_ipl_rnfl.os}
              </Text>{' '}
              μm
            </Text>
          </View>
          <View>
            <Text style={s.line}>Controls</Text>
            <Text
              style={[
                s.percent,
                {
                  backgroundColor: octData?.gclIplRnflOdPerc?.props?.background,
                },
              ]}
            >
              {octData.gclIplRnflOdPerc}
            </Text>
            <Text
              style={[
                s.percent,
                {
                  backgroundColor: octData?.gclIplRnflOsPerc?.props?.background,
                },
              ]}
            >
              {octData.gclIplRnflOsPerc}
            </Text>
          </View>
        </View>
      </Page>
    </Document>
  );

  return (
    <>
      <Container ref={resultsRef}>
        <center>
          <h4>Results / Summary:</h4>
        </center>
        <Form>
          <Box>
            <label>Physician:</label>{' '}
            <p>{cognitiveTestData.cognitiveTest.physician}</p>
          </Box>
          <Box>
            <label>Patient:</label>{' '}
            <p>{cognitiveTestData.cognitiveTest.patient}</p>
          </Box>
          <Box>
            <label>ID number:</label>{' '}
            <p>{cognitiveTestData.cognitiveTest.idNumber}</p>
          </Box>
          <Box>
            <label>Sex:</label> <p>{cognitiveTestData.cognitiveTest.sex}</p>
            <label className='label-age'> Age:</label>
            <p>{cognitiveTestData.cognitiveTest.age}</p>
          </Box>
          <Box>
            <label>Diagnosis:</label>{' '}
            <p>{cognitiveTestData.cognitiveTest.diagnosis}</p>
          </Box>
          <Box>
            <label>Cognitive test A:</label>{' '}
            <p>{cognitiveTestData.cognitiveTest.cognitiveTestA}</p>
          </Box>
          <Box>
            <label>Score value:</label>{' '}
            <p>{cognitiveTestData.cognitiveTest.scoreA}</p>
          </Box>
          <Box>
            <label>Cognitive test B:</label>{' '}
            <p>{cognitiveTestData.cognitiveTest.cognitiveTestB}</p>
          </Box>
          <Box>
            <label>Score value:</label>{' '}
            <p>{cognitiveTestData.cognitiveTest.scoreB}</p>
          </Box>
          <Box>
            <label>Ocular disease:</label>{' '}
            <p>{cognitiveTestData.cognitiveTest.ocularDisease}</p>
          </Box>
          <Box>
            <label>OCT Model:</label>{' '}
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
                  {' '}
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
      <center>
        <Buttons>
          {!isMobile ? (
            <PrintButton onClick={handlePrint}>
              <img src={print} alt='print icon' width='20px' height='20px' />
              Print
            </PrintButton>
          ) : (
            ''
          )}
          <PDFDownloadLink
            document={<PdfDoc />}
            fileName='results.pdf'
            style={{ textDecoration: 'none' }}
          >
            {({ blob, url, loading, error }) =>
              loading ? (
                'Loading document...'
              ) : (
                <PrintButton>
                  <img src={save} alt='print icon' width='20px' height='20px' />
                  Save
                </PrintButton>
              )
            }
          </PDFDownloadLink>
        </Buttons>
      </center>
    </>
  );
}
export default Results;
