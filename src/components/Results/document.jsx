import React from 'react';
import {
  Page,
  Text,
  View,
  Document,
  StyleSheet,
  Font,
} from '@react-pdf/renderer';

import { Percentis } from './styles';
import { CognitiveTestContext } from '../../context/cognitiveTestContext';
import { OctDataContext } from '../../context/octDataContext';

const PdfDocument = () => {
  const cognitiveTestData = React.useContext(CognitiveTestContext);
  const octData = React.useContext(OctDataContext);

  Font.register({
    family: 'Roboto',
    src: './Roboto-Regular.ttf',
  });

  const s = StyleSheet.create({
    page: { padding: '20px', fontSize: '12px', fontFamily: 'Roboto' },
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
      border: '1px solid #d8d8d8',
    },
  });

  return (
    <Document>
      <Page size='A4' style={s.page}>
        <Text style={s.section}>Results / Summary:</Text>
        <Text style={s.line}>
          Physician:{cognitiveTestData?.cognitiveTest.physician}
        </Text>
        <Text style={s.line}>
          Patient:{cognitiveTestData?.cognitiveTest.patient}
        </Text>
        <Text style={s.line}>
          ID number:{cognitiveTestData?.cognitiveTest.idNumber}
        </Text>
        <Text style={s.line}>Sex:{cognitiveTestData?.cognitiveTest.sex}</Text>
        <Text style={s.line}>
          Diagnosis:{cognitiveTestData?.cognitiveTest.diagnosis}
        </Text>
        <Text style={s.line}>
          Cognitive test A:{cognitiveTestData?.cognitiveTest.cognitiveTestA}
        </Text>
        <Text style={s.line}>
          Score value:{cognitiveTestData?.cognitiveTest.scoreA}
        </Text>
        <Text style={s.line}>
          Cognitive test B:{' '}
          <b>{cognitiveTestData?.cognitiveTest.cognitiveTestB}</b>
        </Text>
        <Text style={s.line}>
          Score value:{cognitiveTestData?.cognitiveTest.scoreB}
        </Text>
        <Text style={s.line}>
          Ocular disease:{cognitiveTestData?.cognitiveTest.ocularDisease}
        </Text>
        <Text style={s.line}>
          OCT Model:{cognitiveTestData?.cognitiveTest.octModel}
        </Text>
        <Text style={s.section}>Average Analysis Report</Text>
        <Text style={s.line}>Peripapillary RNFL (in microns)</Text>
        <View style={s.percentage}>
          <View>
            <Text style={s.line}>
              OD: {octData?.octData?.peripapillary.od} um
            </Text>
            <Text style={s.line}>
              OS: {octData?.octData?.peripapillary.os} um
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
              {octData?.peripOdPerc}
            </Text>
            <Text
              style={[
                s.percent,
                {
                  backgroundColor: octData?.peripOsPerc?.props?.background,
                },
              ]}
            >
              {octData?.peripOsPerc}
            </Text>
          </View>
        </View>
        <Text style={s.line}>Total macular thickness (in microns)</Text>
        <View style={s.percentage}>
          <View>
            <Text style={s.line}>
              OD: {octData?.octData.macular_thickness.od} um
            </Text>
            <Text style={s.line}>
              OS: {octData?.octData.macular_thickness.os} um
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
              {octData?.totalMacularOdPerc}
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
              {octData?.totalMacularOsPerc}
            </Text>
          </View>
        </View>
        <Text style={s.line}>Macular volume (in mm³)</Text>
        <View style={s.percentage}>
          <View>
            <Text style={s.line}>
              OD: {octData?.octData.macular_volume.od} mm³
            </Text>
            <Text style={s.line}>
              OS: {octData?.octData.macular_volume.os} mm³
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
              {octData?.macularVolOdPerc}
            </Text>
            <Text
              style={[
                s.percent,
                {
                  backgroundColor: octData?.macularVolOsPerc?.props?.background,
                },
              ]}
            >
              {octData?.macularVolOsPerc}
            </Text>
          </View>
        </View>
        <Text style={s.line}>GCL/IPL thickness (in microns)</Text>
        <View style={s.percentage}>
          <View>
            <Text style={s.line}>OD: {octData?.octData.gcl_ipl.od} um</Text>
            <Text style={s.line}>OS: {octData?.octData.gcl_ipl.os} um</Text>
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
              {octData?.gclIplOdPerc}
            </Text>
            <Text
              style={[
                s.percent,
                {
                  backgroundColor: octData?.gclIplOsPerc?.props?.background,
                },
              ]}
            >
              {octData?.gclIplOsPerc}
            </Text>
          </View>
        </View>
        <Text style={s.line}>GCL/IPL/RNFL (in microns)</Text>
        <View style={s.percentage}>
          <View>
            <Text style={s.line}>
              OD: {octData?.octData.gcl_ipl_rnfl.od} um
            </Text>
            <Text style={s.line}>
              OS: {octData?.octData.gcl_ipl_rnfl.os} um
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
              {octData?.gclIplRnflOdPerc}
            </Text>
            <Text
              style={[
                s.percent,
                {
                  backgroundColor: octData?.gclIplRnflOsPerc?.props?.background,
                },
              ]}
            >
              {octData?.gclIplRnflOsPerc}
            </Text>
          </View>
        </View>
      </Page>
    </Document>
  );
};

export default PdfDocument;
